const main = async (inputs, auths, event) => {
  const fetch = require('isomorphic-fetch');
  const { Dropbox } = require('dropbox');
  const dbx = new Dropbox({
    accessToken: auths.DROPBOX.ACCESS_TOKEN,
    fetch
  });

  try {
    const resp = await dbx.filesMoveV2({
      fromPath: inputs.fromPath,
      toPath: inputs.toPath
    })
    return resp
  } catch (err) {
    console.log(err)
  }
  return {}
}

module.exports.main = main
