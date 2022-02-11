const axios = require('axios')
const _ = require('lodash')
const qs = require('querystring')
const main = async (inputs, auths, event) => {
  let headers = inputs.headers
  let body = inputs.body
  let query_params = inputs.query_params
  let method = inputs.method
  const url = inputs.url
  console.log(url)
  if (!url) {
    throw new Error('Url not provided.')
  }
  let options = {
    url: url,
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': true
    }
  }

  if (headers) {
    if (typeof headers !== 'object') {
      headers = JSON.parse(headers)
    }
  }
  if (headers && !_.isEmpty(headers)) {
    options.headers = Object.assign(headers, {
      'Access-Control-Allow-Origin': true
    })
  }
  if (method) {
    options.method = method
  }

  if (body) {
    if (typeof body !== 'object') {
      body = JSON.parse(body)
    }
    if (!_.isEmpty(body)) {
      if (options.headers['Content-Type'] == 'application/x-www-form-urlencoded') {
        options.data = qs.stringify(body)
      } else {
        options.data = body
      }
    }
  }
  if (query_params) {
    if (typeof query_params !== 'object') {
      query_params = JSON.parse(query_params)
    }
    if (!_.isEmpty(query_params)) options.params = query_params
  }
  const data = await axios(options)
  console.log(data.data)
  return data.data
}

module.exports.main = main
