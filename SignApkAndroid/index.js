const child_process = require('child_process')
const fs = require("fs")
const path = require("path")

const getReleaseFile = (files) => {
  if (files.length > 0) {
    return files[0]
  }
}

const findReleaseFile = (releaseDir) => {
  const releaseFiles = fs.readdirSync(releaseDir, { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .filter(item => item.name.endsWith(".apk") || item.name.endsWith(".aab"));

  return getReleaseFile(releaseFiles)
}

const main = async (inputs, auths) => {
  try {
    const releaseDir = inputs["RELEASE_DIR"]
    const signingKeyBase64 = inputs["SIGNING_KEY_BASE_64"]
    const alias = inputs["ALIAS"]
    const keyPassword = inputs["KEY_PASSWORD"]
    const keyStorePassword = inputs["KEY_STORE_PASSWORD"]

    console.log(`Preparing to sign key @ ${releaseDir} with signing key`);
    // 1. Find release file
    const releaseFile = findReleaseFile(releaseDir);

    // 3. Now that we have a release file, decode and save the signing key
    const signingKey = path.join(releaseDir, 'signingKey.jks');
    fs.writeFileSync(signingKey, signingKeyBase64, 'base64');

    // 4. Now zipalign the release file
    const releaseFilePath = path.join(releaseDir, releaseFile.name);
    let signedReleaseFile = '';
    if (releaseFile.name.endsWith('.apk')) {
      signedReleaseFile = await signApkFile(releaseFilePath, signingKey, alias, keyStorePassword, keyPassword);
    }
    return signedReleaseFile
  } catch (error) {
    console.error(error)
  }
}

const signApkFile = async(apkFile, signingKeyFile, alias, keyStorePassword, keyPassword) => {
  const zipAlign = 'zipalign'
  // Align the apk file
  const alignedApkFile = apkFile.replace('.apk', '-aligned.apk')

  child_process.spawnSync(`"${zipAlign}"`, [
    '-c',
    '-v', '4',
    `"${apkFile}"`
  ], { shell: true })

  child_process.spawnSync(`"cp"`, [
    `"${apkFile}"`,
    `"${alignedApkFile}"`
  ], { shell: true })

  // find apksigner path
  const apkSigner = 'apksigner'

  // apksigner sign --ks my-release-key.jks --out my-app-release.apk my-app-unsigned-aligned.apk
  const signedApkFile = apkFile.replace('.apk', '-signed.apk')

  const args = [
    'sign',
    '--ks', signingKeyFile,
    '--ks-key-alias', alias,
    '--ks-pass', `pass:${keyStorePassword}`,
    '--out', `"${signedApkFile}"`
  ];

  if (keyPassword) {
    args.push('--key-pass', `pass:${keyPassword}`);
  }

  args.push(`"${alignedApkFile}"`);

  child_process.spawnSync(`"${apkSigner}"`, args, { shell: true });

  // Verify
  child_process.spawnSync(`"${apkSigner}"`, [
    'verify',
    `"${signedApkFile}"`
  ], { shell: true });

  console.log(signedApkFile)
  return signedApkFile
}

module.exports.main = main