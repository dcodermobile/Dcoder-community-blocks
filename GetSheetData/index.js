const axios = require('axios')

module.exports.main = async (inputs, secrets, auths, context) => {
  const config = {
    url: `https://sheets.googleapis.com/v4/spreadsheets/${inputs.spreadsheetId}/values/${inputs.sheet_name}`,
    params: {
      dateTimeRenderOption: inputs.dateTimeRenderOption,
      majorDimension: inputs.majorDimension,
      valueRenderOption: inputs.valueRenderOption
    },
    headers: {
      Authorization: `Bearer ${auths.GOOGLESHEETS.ACCESS_TOKEN}`
    }
  }

  const response = await axios(config)
  return response.data
}
