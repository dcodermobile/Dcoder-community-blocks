const main = async (inputs, auths, event) => {

  const fs = require('fs')
  const path = require('path')
  // To get block input
  try {
    let filepath = inputs.filepath
    const mode = inputs.mode // 1 for append, 2 for write, default write
    const directory = inputs.directory
    const filename = inputs.filename
    const text = inputs.text

    if (!filepath && directory && filename) {
      filepath = path.join(directory, filename)
    } else if (!filepath) {
      console.log('Error: filepath is not provided and optional directory and filename also not provided.')
    }
    if (!mode || mode == 2) {
      fs.writeFileSync(filepath, text)
    } else if (mode && mode == 1) {
      fs.appendFileSync(filepath, text, {
        flag: 'a'
      })
    }
  } catch (err) {
    console.log(err.message)
  }
  // Simillarly to set block's ouput
  // core.setOutput('varName', value)
}

module.exports.main = main