const { Dropbox } = require('dropbox')
const path = require('path')
const fs = require('fs')

const main = async (inputs, auths) => {
  const dbx = new Dropbox({ accessToken: auths.DROPBOX.ACCESS_TOKEN })
  const contents = await fs.promises.readFile(inputs.filePath)
  const response = await dbx.filesUpload({ path: inputs.filePath, contents })

  return response.result.path_display
}

module.exports.main = main
