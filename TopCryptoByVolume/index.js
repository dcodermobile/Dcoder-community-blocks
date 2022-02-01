const axios = require('axios')

const main = async(inputs, secrets, auths, context) => {
  const tsym =  inputs.tsym
  const limit =  inputs.limit
  const api_key =  inputs.api_key
  // url to fetch data
  const url = "https://min-api.cryptocompare.com/data/top/totalvolfull"
  
  // query params passed to request
  const params = {
    limit,
    tsym
  }
  
 // headers for the request
  const headers = {
    'Content-Type': 'application/json',
    api_key
  }
  
  // http get api call
  const response = await axios.get(url,{
    headers,
    params
  })
  return response.data.Data
}

module.exports.main = main