const { execSync } = require('child_process')

const main = async(inputs, auths, context) => {
  const res = execSync(inputs.command, { cwd: inputs.workingDirectory })
  console.log(res.toString())
}

module.exports.main = main