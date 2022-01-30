const { Dropbox } = require("dropbox")
const path = require("path")
const fs = require('fs')


const main = async(inputs, auths, context) => {
  const filepath =  inputs.filepath
  const dbx = new Dropbox({ accessToken: auths.DROPBOX.ACCESS_TOKEN });
  const contents = await fs.promises.readFile(filepath)
  const response = await dbx.filesUpload({ path: filepath, contents })
  return response.result.path_display
}

module.exports.main = main