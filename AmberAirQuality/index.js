const axios = require('axios')

const main = async (inputs, auths, event) => {
  const latitude = inputs.latitude
  const from = inputs.from
  const longitude = inputs.longitude
  const to = inputs.to
  const ambee_api_key = inputs.ambee_api_key
  // url to fetch data
  const url = 'https://api.ambeedata.com/history/by-lat-lng'

  // query params passed to request
  const params = {
    lat: latitude,
    lng: longitude,
    from,
    to
  }

  // headers for the request
  const headers = {
    'x-api-key': ambee_api_key
  }

  // http post api call
  const response = await axios.get(url, {
    headers,
    params
  })

  // api response data
  console.log(response.data)
  return response.data
}

module.exports.main = main
