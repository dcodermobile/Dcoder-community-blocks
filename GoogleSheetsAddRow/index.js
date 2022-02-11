const axios = require('axios')

const main = async (inputs, auths, event) => {
  const columns = inputs.columns
  //const columns = ["1","35"]
  const token = auths.GOOGLE_SHEETS.ACCESS_TOKEN
  const spreadsheetId = inputs.sheetid
  const sheetName = inputs.sheetname
  //console.log(token);
  // validate input
  if (!columns || !columns.length) {
    throw new Error('Please enter an array of elements in the `Columns` parameter above')
  } else if (!Array.isArray(columns)) {
    throw new Error(
      'Column data is not an array. Please enter an array of elements in the `Columns` parameter above.'
    )
  } else if (Array.isArray(columns[0])) {
    throw new Error(
      "Column data is a multi-dimensional array. A one-dimensional is expected. If you're trying to send multiple rows to Google Sheets, search for the action to add multiple rows to Sheets, or try modifying the code for this step."
    )
  }
  let u =
    'https://sheets.googleapis.com/v4/spreadsheets/' +
    spreadsheetId +
    '/values/' +
    sheetName +
    ':append'

  const config = {
    method: 'post',
    url: u,
    params: {
      includeValuesInResponse: true,
      valueInputOption: 'USER_ENTERED'
    },
    headers: {
      Authorization: 'Bearer ' + token
    },
    data: {
      values: [columns]
    }
  }

  try {
    const result = await axios(config)
    console.log(result.data)
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data)
    }
    throw err
  }
}

module.exports.main = main
