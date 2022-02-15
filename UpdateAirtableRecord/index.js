const chunk = require('lodash.chunk')
const axios = require('axios')

const main = async (inputs, auths, event) => {
  let record = inputs.record
  const id = inputs.id
  const base_id = inputs.base_id
  const api_key = inputs.api_key
  const table_name = inputs.table_name
  if (!record) {
    console.log('No records found')
    return
  }
  record = JSON.parse(record)

  const config = {
    method: 'patch',
    url: `https://api.airtable.com/v0/${base_id}/${encodeURIComponent(table_name)}/${id}`,
    headers: {
      Authorization: `Bearer ${api_key}`
    },
    data: {
      fields: record,
      typecast: true
    }
  }
  let result = await axios(config)
  console.log(result.data)
  return result.data[0]
}

module.exports.main = main
