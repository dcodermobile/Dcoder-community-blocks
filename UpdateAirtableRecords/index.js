const chunk = require('lodash.chunk')
const BATCH_SIZE = 10 // Airtable API allows to update up to 10 rows per request.
const axios = require('axios')

const main = async (inputs, auths, event) => {
  let records = inputs.records
  const base_id = inputs.base_id
  const api_key = inputs.api_key
  const table_name = inputs.table_name
  const typecast = inputs.typecast
  if (!records || !records.length) {
    console.log('No records found')
    return
  }
  const size = records.length
  console.log(records)
  records = JSON.parse(records)
  console.log(records)
  const response_records = []

  async function updateRecords(records) {
    const config = {
      method: 'patch',
      url: `https://api.airtable.com/v0/${base_id}/${encodeURIComponent(table_name)}`,
      headers: {
        Authorization: `Bearer ${api_key}`
      },
      data: {
        records,
        typecast: typecast
      }
    }

    let result = await axios(config)
    console.log(result.data)
    return result.data
  }

  const records_sets = chunk(records, BATCH_SIZE)
  for (const records_set of records_sets) {
    response_records.push(await updateRecords(records_set))
  }
  return response_records
}

module.exports.main = main
