const Airtable = require('airtable');
const main = async (inputs, auths, event) => {

  const axios = require('axios')
  const base_id = inputs.base_id
  const table = inputs.table
  const api_key = inputs.api_key
  const ids =  inputs.ids
  console.log(ids)
  Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: api_key
  });
  const base = Airtable.base(base_id);
  const idChunks = chunk(ids)
  let output = []
  for(let i = 0; i <idChunks.length; i++){
    console.log('Deleting: ')
    console.log(idChunks[i])
    let result = await base(inputs.table).destroy(idChunks[i])
    if(result){
      console.log('Deleted records: ' + result.length)
    }
    output = output.concat(result)
  }
  return output
}

function chunk (arr) {

  /*var chunks = [],
      i = 0,
      n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }*/
  var i,j, temporary, chunk = 10;
  const data =[]
  if(arr.length<=10){
    data.push(arr)
    return data
  }
  for (i = 0,j = arr.length; i < j; i += chunk) {
    temporary = arr.slice(i, i + chunk);
    data.push(temporary)
  }

  return data;
}


module.exports.main = main