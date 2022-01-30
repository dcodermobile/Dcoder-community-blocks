const Airtable = require('airtable');
const main = async (inputs, auths, event) => {

  const axios = require('axios')
  const base_id = inputs.base_id
  const table = inputs.table
  const api_key = inputs.api_key
  
  Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: api_key
  });
  const base = Airtable.base(base_id);
  const data = [];
  const config = {};

  if (inputs.viewId) { config.view = inputs.viewId; }
  if (inputs.filterByFormula) { config.filterByFormula = inputs.filterByFormula; }
  if (inputs.maxRecords) { config.maxRecords = inputs.maxRecords; }
  if (inputs.sortFieldId && inputs.sortDirection) {
    config.sort = [
      {
        field: inputs.sortFieldId,
        direction: inputs.sortDirection,
      },
    ];
  }

  await base(inputs.table).select({
    ...config,
  })
    .eachPage(function page(records, fetchNextPage) {
    // inputs function (`page`) will get called for each page of records.
      records.forEach(function(record) {
        data.push(record._rawJson);
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    });

  return data;
}

module.exports.main = main