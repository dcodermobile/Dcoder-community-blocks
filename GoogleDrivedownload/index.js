const {google} = require('googleapis')
const fs = require('fs')
const path = require('path')
module.exports.main =
  async(inputs, auths, event) => {
  
  const folderPath = inputs.folderPath;
  const driveAuth = new google.auth.OAuth2()
  driveAuth.setCredentials({ access_token: auths.GOOGLE_DRIVE.ACCESS_TOKEN })
  const drive = await google.drive({ version: 'v3', auth: driveAuth });
  const fileId = inputs.fileId;
  
  const responseForName = await drive.files.get({
    fileId: fileId
  })
  
  const fileDestPath = path.join(folderPath,responseForName.data.name )
  const dest = fs.createWriteStream(fileDestPath);
  const response = await drive.files.get({
    fileId: fileId,
    alt: 'media'
  }, { responseType: 'stream'})
  await new Promise(resolve =>
    response.data
      .pipe(dest)
      .on('finish', resolve))
  console.log('File saved at '+ fileDestPath);
  return fileDestPath
}

