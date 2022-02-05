const main = async (inputs, auths, event) => {
const fetch = require('isomorphic-fetch'); 
const { Dropbox } = require('dropbox'); 
const dbx = new Dropbox({ 
  accessToken: auths.DROPBOX.ACCESS_TOKEN, 
  fetch 
});

try {
    let resp = await dbx.filesCreateFolderV2({
      path: inputs.folderPath
    })
    console.log('Folder created successfully')
    return resp
} catch (err) {
  this.err = err
}
return {}
}

module.exports.main = main
