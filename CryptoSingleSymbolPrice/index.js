const axios = require('axios')

const main = async (inputs, secrets, auths, context) => {
  const tsyms = inputs.tsyms
  const api_key = inputs.api_key
  const fsym = inputs.fsym
  // url to fetch data
  const url = 'https://min-api.cryptocompare.com/data/price'

  // query params passed to request
  const params = {
    tsyms,
    fsym
  }

  // headers for the request
  const headers = {
    'Content-Type': 'application/json',
    api_key
  }

  // http get api call
  const response = await axios.get(url, {
    headers,
    params
  })
  return response.data
}

module.exports.main = main
