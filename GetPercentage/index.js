const main = async (inputs, auths, event) => {
  const output = ((inputs.secondNumber - inputs.firstNumber) / inputs.firstNumber) * 100
  return output.toFixed(2)
}

module.exports.main = main
