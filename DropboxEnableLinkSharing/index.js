const fetch = require('isomorphic-fetch')
const { Dropbox } = require('dropbox')
const main = async (inputs, auths, context) => {
  const dbx = new Dropbox({
    accessToken: auths.DROPBOX.ACCESS_TOKEN,
    fetch
  })

  let filepath = inputs.filepath
  const response = await dbx.sharingCreateSharedLinkWithSettings({
    path: filepath
  })
  if (!response.result.url) {
    console.log(response)
  }
  return response.result.url
}

module.exports.main = main
