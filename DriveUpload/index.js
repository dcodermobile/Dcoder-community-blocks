const fs = require("fs")
const {google} = require('googleapis')


const main = async(inputs, auths, event) => {
  const driveAuth = new google.auth.OAuth2()
  driveAuth.setCredentials({ access_token: auths.GOOGLE_DRIVE.ACCESS_TOKEN })
  const drive = await google.drive({ version: 'v3', auth: driveAuth });

  const uploadResponse = (await drive.files.create({
  resource: {
    name: inputs.filename,
    originalFilename: inputs.filename,
    parents: inputs.parents,
  },
  media: {
    mimeType: inputs.filetype,
    uploadType: "media",
    body: fs.createReadStream(inputs.pathToFile)
  },
  fields: '*'
  })).data
  return uploadResponse
}

module.exports.main = main