const fs = require("fs")
const { readFileSync } = require("fs")
const { google } = require('googleapis')
const { readLocalizedReleaseNotes } = require("./whatsnew")
const androidPublisher = google.androidpublisher('v3');

module.exports.uploadToPlayStore = async (options, releaseFiles) => {
  // Check the 'track' for 'internalsharing', if so switch to a non-track api
  if (options.track === 'internalsharing') {
    let downloadUrls = []
    for (const releaseFile of releaseFiles) {
      await uploadInternalSharingRelease(options, releaseFile)
        .then(downloadUrl => {
          downloadUrls.push(downloadUrl)
        })
        .catch(reason => {
          return Promise.reject(reason)
        })
    }
  } else {
    // Create a new Edit
    const appEdit = await androidPublisher.edits.insert({
      auth: options.auth,
      packageName: options.applicationId
    })

    await validateSelectedTrack(appEdit.data, options).catch(reason => {
      return Promise.reject(reason);
    })

    // Upload artifacts to Google Play, and store their version codes
    const versionCodes = new Array()
    for (const releaseFile of releaseFiles) {
      const versionCode = await uploadRelease(appEdit.data, options, releaseFile).catch(reason => {
        return Promise.reject(reason)
      })
      versionCodes.push(versionCode)
    }

    // Add the uploaded artifacts to the Edit track
    const track = await addReleasesToTrack(appEdit.data, options, versionCodes)

    const res = await androidPublisher.edits.commit({
      auth: options.auth,
      editId: appEdit.data.id,
      packageName: options.applicationId
    })

    // Simple check to see whether commit was successful
    if (res.data.id != null) {
      return Promise.resolve(res.data.id)
    } else {
      return Promise.reject(res.status)
    }
  }
}

const uploadInternalSharingRelease = async (options, releaseFile) => {
  if (releaseFile.endsWith('.apk')) {
    const res = await internalSharingUploadApk(options, releaseFile)
    return Promise.resolve(res.downloadUrl)
  } else if (releaseFile.endsWith('.aab')) {
    const res = await internalSharingUploadBundle(options, releaseFile)
    return Promise.resolve(res.downloadUrl)
  } else {
    return Promise.reject(`${releaseFile} is invalid`)
  }
}

const uploadRelease = async (appEdit, options, releaseFile) => {
  if (releaseFile.endsWith('.apk')) {
    const apk = await uploadApk(appEdit, options, releaseFile)
    await uploadMappingFile(appEdit, apk.versionCode, options)
    return Promise.resolve(apk.versionCode)
  } else if (releaseFile.endsWith('.aab')) {
    const bundle = await uploadBundle(appEdit, options, releaseFile)
    await uploadMappingFile(appEdit, bundle.versionCode, options)
    return Promise.resolve(bundle.versionCode)
  } else {
    return Promise.reject(`${releaseFile} is invalid`)
  }
}

const validateSelectedTrack = async (appEdit, options) => {
  const res = await androidPublisher.edits.tracks.list({
    auth: options.auth,
    editId: appEdit.id,
    packageName: options.applicationId
  })
  const allTracks = res.data.tracks
  if (allTracks == undefined || allTracks.find(value => value.track == options.track) == undefined) {
    return Promise.reject(`Track "${options.track}" could not be found `)
  }
}

const addReleasesToTrack = async (appEdit, options, versionCodes) => {
  let status;
  if (options.userFraction != undefined) {
    status = 'inProgress'
  } else {
    status = 'completed'
  }

  const res = await androidPublisher.edits.tracks
    .update({
      auth: options.auth,
      editId: appEdit.id,
      packageName: options.applicationId,
      track: options.track,
      requestBody: {
        track: options.track,
        releases: [
          {
            name: options.name,
            userFraction: options.userFraction,
            status: status,
            inAppUpdatePriority: options.inAppUpdatePriority,
            releaseNotes: await readLocalizedReleaseNotes(options.whatsNewDir),
            versionCodes: versionCodes.filter(x => x != 0).map(x => x.toString())
          }
        ]
      }
    })

  return res.data
}

const uploadMappingFile = async (appEdit, versionCode, options) => {
  if (options.mappingFile != undefined && options.mappingFile.length > 0) {
    const mapping = readFileSync(options.mappingFile, 'utf-8');
    if (mapping != undefined) {
      await androidPublisher.edits.deobfuscationfiles.upload({
        auth: options.auth,
        packageName: options.applicationId,
        editId: appEdit.id,
        apkVersionCode: versionCode,
        deobfuscationFileType: 'proguard',
        media: {
          mimeType: 'application/octet-stream',
          body: fs.createReadStream(options.mappingFile)
        }
      })
    }
  }
}

const internalSharingUploadApk = async (options, apkReleaseFile) => {
  const res = await androidPublisher.internalappsharingartifacts.uploadapk({
    auth: options.auth,
    packageName: options.applicationId,
    media: {
      mimeType: 'application/vnd.android.package-archive',
      body: fs.createReadStream(apkReleaseFile)
    }
  })

  return res.data
}

const internalSharingUploadBundle = async (options, bundleReleaseFile) => {
  const res = await androidPublisher.internalappsharingartifacts.uploadbundle({
    auth: options.auth,
    packageName: options.applicationId,
    media: {
      mimeType: 'application/octet-stream',
      body: fs.createReadStream(bundleReleaseFile)
    }
  })

  return res.data
}

const uploadApk = async (appEdit, options, apkReleaseFile) => {
  const res = await androidPublisher.edits.apks.upload({
    auth: options.auth,
    packageName: options.applicationId,
    editId: appEdit.id,
    media: {
      mimeType: 'application/vnd.android.package-archive',
      body: fs.createReadStream(apkReleaseFile)
    }
  })

  return res.data
}

const uploadBundle = async (appEdit, options, bundleReleaseFile) => {
  const res = await androidPublisher.edits.bundles.upload({
    auth: options.auth,
    packageName: options.applicationId,
    editId: appEdit.id,
    media: {
      mimeType: 'application/octet-stream',
      body: fs.createReadStream(bundleReleaseFile)
    }
  });

  return res.data
}