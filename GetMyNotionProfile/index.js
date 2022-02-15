const axios = require('axios')

const main = async (inputs, auths, event) => {
  // url to fetch data
  const url = 'https://api.notion.com/v1/users'
  const token = auths.NOTION.ACCESS_TOKEN
  // query params passed to request
  const params = {}

  // headers for the request
  const headers = {
    'Content-Type': 'application/json',
    'Notion-Version': '2021-08-16',
    Authorization: `Bearer ${token}`
  }

  // http get api call
  const response = await axios.get(url, {
    headers,
    params
  })

  // api response data
  return response.data
}

module.exports.main = main
