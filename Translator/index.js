const translate = require('translate')

const main = async (inputs, auths, event) => {
  const text = inputs.text
  const from = inputs.from
  const to = inputs.to
  const api_key = inputs.api_key
  const engine = inputs.engine

  const output = await translate(text, {
    to: to,
    from: from,
    engine: engine,
    key: api_key
  })
  console.log(output)
  return output
}

module.exports.main = main
