const { Storage } = require('@google-cloud/storage');

const main = async (inputs, auths, event) => {
  const bucketName = inputs.bucketName
  const destFileName = inputs.destinationFilePath
  const filePath = inputs.sourceFilePath

  const storage_key = inputs.gcpKey
  // Creates a client
  const storage = new Storage({
    credentials: JSON.parse(storage_key)
  });

  await storage.bucket(bucketName).upload(filePath, {
    destination: destFileName,
  });
  console.log(`${filePath} uploaded to ${bucketName}`);
}

module.exports.main = main