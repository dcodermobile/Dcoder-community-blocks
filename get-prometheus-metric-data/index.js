const axios = require('axios')

const main = async(inputs, auths, event) => {
  // url to fetch data
  const url = inputs.prometheusServerUrl
  
  // query params passed to request
  const params = {
    query: inputs.query,
    start: inputs.startTime,
    end: inputs.endTime,
    step: inputs.step
  }
  
  // headers for the request
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(`${inputs.prometheusUsername}:${inputs.prometheusPassword}`).toString('base64')
  }
  
  // body data for post api
  const body = { }
  
  // http post api call
  const response = await axios.post(`${url}/api/v1/query_range`, body, {
    headers,
    params
  })
   
  // api response data
  console.log(response.data)
  return response.data
}

module.exports.main = main
