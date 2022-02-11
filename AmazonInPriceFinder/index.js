const pricefinder = require('pricefinder-ecommerce')

const main = async (inputs, auths, context) => {
  const url = inputs.url

  const product = await pricefinder(url, 'amazon')
  return product
}

module.exports.main = main
