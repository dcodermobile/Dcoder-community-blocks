const axios = require('axios')
const dateFormat = require('dateformat')
const main = async (inputs, auths, event) => {
  const api_key = inputs.api_key
  const api_secret = inputs.api_secret
  const start = dateFormat(new Date(inputs.start), 'yyyymmdd')
  const end = dateFormat(new Date(inputs.end), 'yyyymmdd')
  const m = inputs.m
  const i = inputs.i
  // url to fetch data
  const url = 'https://amplitude.com/api/2/users'

  // query params passed to request
  const params = {
    start,
    end,
    m,
    i
  }
  let authdata = `${api_key}:${api_secret}`
  authdata = Buffer.from(authdata).toString('base64')
  // headers for the request
  const headers = {
    Authorization: 'Basic ' + authdata
  }

  try {
    // http get api call
    const response = await axios.get(url, {
      headers,
      params
    })
    // api response data
    console.log(response.data)
    return response.data
  } catch (err) {
    // error log
    //console.log(err)
    console.error(err.response.data)
    throw err
  }
}

module.exports.main = main
