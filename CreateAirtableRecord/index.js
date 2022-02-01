const Airtable = require('airtable');
const main = async (inputs, auths, event) => {

  const axios = require('axios')
  const base_id = inputs.base_id
  const table = inputs.table
  const api_key = inputs.api_key
  const record =  inputs.record
  
  Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: api_key
  });
  const base = Airtable.base(base_id);
  
  const data = await base(inputs.table).create([{"fields":record}])
  console.log(data)
  return data[0]
}

module.exports.main = main