const fs = require("fs")
const path = require("path")
const { uploadToPlayStore } = require("./edits")
const { google } = require('googleapis')

const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/androidpublisher']
})

const main = async (inputs, auths) => {
  try {
    const serviceAccountJsonRaw = inputs["SERVICE_ACCOUNT_JSON_RAW"];
    const packageName = inputs["PACKAGE_NAME"];
    const releaseFile = ""
    let releaseFiles = inputs['RELEASE_FILES']
    if (releaseFiles) {
      releaseFiles = releaseFiles.split(',')
      releaseFiles = releaseFiles.filter(x => x !== '')
    }
    const releaseName = "";
    const track = inputs["TRACK"];
    const inAppUpdatePriority = "";
    const userFraction = "";
    const whatsNewDir = "";
    let mappingFile = inputs["MAPPING_FILE"];

    // Validate that we have a service account json in some format
    if (!serviceAccountJsonRaw) {
      console.log("No service account json key provided!");
      return;
    }

    // If the user has provided the raw plain text via secrets, or w/e, then write to file and
    // set appropriate env variable for the auth
    if (serviceAccountJsonRaw) {
      const serviceAccountFile = "./serviceAccountJson.json";
      fs.writeFileSync(serviceAccountFile, serviceAccountJsonRaw, {
        encoding: 'utf8'
      });

      // Insure that the api can find our service account credentials
      // core.exportVariable("GOOGLE_APPLICATION_CREDENTIALS", serviceAccountFile);
      process.env.GOOGLE_APPLICATION_CREDENTIALS = serviceAccountFile
    }
    console.log(serviceAccountJsonRaw, process.env)
    // Validate user fraction as a number, and within [0.0, 1.0]
    let userFractionFloat = parseFloat(userFraction);
    if (!isNaN(userFractionFloat)) {
      if (userFractionFloat <= 0.0 || userFractionFloat >= 1.0) {
        return;
      }
    } else {
      userFractionFloat = undefined;
    }

    // Validate the inAppUpdatePriority to be a valid number in within [0, 5]
    let inAppUpdatePriorityInt = parseInt(inAppUpdatePriority);
    if (!isNaN(inAppUpdatePriorityInt)) {
      if (inAppUpdatePriorityInt < 0 || inAppUpdatePriorityInt > 5) {
        return;
      }
    } else {
      inAppUpdatePriorityInt = undefined;
    }
    console.log(releaseFiles, releaseFile)
    // Check release files while maintaining backward compatibility
    let validatedReleaseFiles = [];
    if (releaseFiles.length == 0 && !releaseFile) {
      console.log("No files provided", releaseFiles, releaseFile)
      return;
    } else if (releaseFiles.length == 0 && releaseFile) {
      if (!fs.existsSync(releaseFile)) {
        console.log("File not found", releaseFile)
        return;
      } else {
        validatedReleaseFiles = [releaseFile];
      }
    } else if (releaseFiles.length > 0) {
      for (const file of releaseFiles) {
        if (!fs.existsSync(file)) {
          console.log("File not exist")
          return;
        }
      }
      validatedReleaseFiles = releaseFiles;
    }

    if (whatsNewDir != undefined && whatsNewDir.length > 0 && !fs.existsSync(whatsNewDir)) {
      // return
    }

    if (mappingFile != undefined && mappingFile.length > 0 && !fs.existsSync(mappingFile)) {
      console.log("mapping file not exist", mappingFile)
      mappingFile = undefined
    }
    console.log(validatedReleaseFiles)
    const authClient = await auth.getClient();
    const result = await uploadToPlayStore({
      auth: authClient,
      applicationId: packageName,
      track: track,
      inAppUpdatePriority: inAppUpdatePriorityInt || 0,
      userFraction: userFractionFloat,
      whatsNewDir: whatsNewDir,
      mappingFile: mappingFile,
      name: releaseName
    }, validatedReleaseFiles);

    console.log(`Finished uploading to the Play Store: ${result}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports.main = main