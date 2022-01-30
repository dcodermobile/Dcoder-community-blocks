const axios = require('axios')

module.exports.main = async(inputs, auths, context) => {
  console.log(auths, context)
 const config = {
    url: `https://sheets.googleapis.com/v4/spreadsheets/${inputs.spreadsheetId}/values/${inputs.sheet_name}`,
    params: {
      dateTimeRenderOption: inputs.dateTimeRenderOption,
      majorDimension: inputs.majorDimension,
      valueRenderOption: inputs.valueRenderOption,
    },
    headers: {
      Authorization: `Bearer ${auths.GOOGLE_SHEETS.ACCESS_TOKEN}`,
    },
  }
  
  const response = await axios(config)
  
  if(inputs.skipFirstRow){
    if(inputs.majorDimension == 'ROWS'){
      response.data.values.shift()
    } else {
      for (let i = 0; i < response.data.values.length; i++){
        response.data.values[i].shift()
      }
    }
  }
  return response.data
}