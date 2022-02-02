const axios = require('axios')

const main = async(inputs, secrets, auths, context) => {
  const tsym =  inputs.tsym
  const limit =  inputs.limit
  const api_key =  inputs.api_key
  const fsym =  inputs.fsym
  const toTs =  inputs.toTs
  // url to fetch data
  const url = "https://min-api.cryptocompare.com/data/v2/histohour"
  
  // query params passed to request
  const params = {
    limit,
    tsym,
    fsym
  }
  if(toTs){
    params.toTs = toTs
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