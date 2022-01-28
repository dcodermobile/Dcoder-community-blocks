const fetch = require('isomorphic-fetch'); 
const { Dropbox } = require('dropbox'); 

const main = async (inputs, auths)=>{
    const dbx = new Dropbox({ 
      accessToken: auths.DROPBOX.ACCESS_TOKEN, 
      fetch 
    });
    
    let filepath = inputs['filePath']
    const response = await dbx.sharingCreateSharedLinkWithSettings({
      path: filepath
    })
    
    return response.result.url
}

module.exports.main = main
