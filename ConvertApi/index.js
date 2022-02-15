const fs = require('fs')
const path = require('path')
const main = async (inputs, auths, event) => {
  const filepath = inputs.filepath
  const from = inputs.from
  const to = inputs.to
  const secret_key = inputs.secret_key
  let outputFilesPath = inputs.outputFilesPath

  if (!outputFilesPath) {
    outputFilesPath = '/tmp'
  }
  var convertapi = require('convertapi')(secret_key)
  let result = null
  if (from) {
    result = await convertapi.convert(
      to,
      {
        File: filepath
      },
      from
    )
  } else {
    result = await convertapi.convert(to, {
      File: filepath
    })
  }
  if (!fs.existsSync(outputFilesPath)) {
    fs.mkdirSync(outputFilesPath, {
      recursive: true
    })
  }
  await result.saveFiles(outputFilesPath)
  const files = []
  fs.readdirSync(outputFilesPath).forEach((file) => {
    files.push(path.join(outputFilesPath, file))
  })
  return files
}

module.exports.main = main
