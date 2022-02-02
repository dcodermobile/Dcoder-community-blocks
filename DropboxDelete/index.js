const main = async (inputs, auths, event) => {

  const {
    Dropbox
  } = require("dropbox")
  const dbx = new Dropbox({
    accessToken: auths.DROPBOX.ACCESS_TOKEN
  });
  let filepath = inputs.filepath
  const path = require("path")
  const fs = require('fs')

  //filepath = path.join(__dirname,filepath)
  const main = async () => {
    try {
      const response = await dbx.filesDelete({
        path: filepath
      })
      return true
      console.log(response)
      process.exit(0)
    } catch (err) {
      console.log('Error: ', err)
      return false
      process.exit(0)
    }
  }

  main()
}

module.exports.main = main