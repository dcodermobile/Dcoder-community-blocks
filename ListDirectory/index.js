const main = async (inputs, auths, event) => {

  const fs = require('fs')

  // To get block input
  const path = inputs.path

  // Simillarly to set block's output
  return fs.readdirSync(path)
}

module.exports.main = main