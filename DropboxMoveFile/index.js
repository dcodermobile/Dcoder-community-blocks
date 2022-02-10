const fetch = require('isomorphic-fetch')
const { Dropbox } = require('dropbox')

const main = async (inputs, auths, event) => {

  const dbx = new Dropbox({
    accessToken: auths.DROPBOX.ACCESS_TOKEN,
    fetch
  })

  try {
    const resp = await dbx.filesMoveV2({
      from_path: inputs.fromPath,
      to_path: inputs.toPath
    })
    return resp
  } catch (err) {
    console.log(err)
  }
  return {}
}

module.exports.main = main
