const axios = require('axios')
const main = async (inputs, auths, event) => {
  // Help function used to convert column name in A1 convention to 0 based index.
  // Adjusted from @flambino's answer in this codereview question: https://codereview.stackexchange.com/questions/90112/a1notation-conversion-to-row-column-index
  function columnA1To0BasedIndex(colA1) {
    var i,
      l,
      chr,
      sum = 0,
      A = 'A'.charCodeAt(0),
      radix = 'Z'.charCodeAt(0) - A + 1

    if (typeof colA1 !== 'string' || !/^[A-Z]+$/.test(colA1)) {
      throw new Error('Expected column label')
    }

    for (i = 0, l = colA1.length; i < l; i++) {
      chr = colA1.charCodeAt(i)
      sum = sum * radix + chr - A + 1
    }

    return sum - 1
  }
  //console.log(auths)
  // Pull sheets value from Google Sheets API Get sheet values endpoint.
  const config = {
    url: `https://sheets.googleapis.com/v4/spreadsheets/${inputs.spreadsheetId}/values/${inputs.sheet_name}`,
    headers: {
      Authorization: `Bearer ${auths.GOOGLE_SHEETS.ACCESS_TOKEN}`
    }
  }
  const result = await axios(config)
  const sheet_values = result.data.values
  let row_num = 0
  let rows = []
  // Iterates rows in sheet values and compares with the value provided at the specified column.
  const row_numbers = []
  if (inputs.column_name && inputs.column_value) {
    // Gets the 0 index column based on the column name parameter.
    var selected_col
    try {
      selected_col = columnA1To0BasedIndex(inputs.column_name)
    } catch (ex) {
      console.log('Enter a column name in A1 format.')
      return
    }

    for (const row of sheet_values) {
      if (String(row[selected_col]) === inputs.column_value) {
        row_numbers.push(row_num)
        rows.push(row)
      }
      row_num++
    }
  }
  if (row_numbers.length > 0) {
    return rows
  } else {
    return sheet_values
  }
}

module.exports.main = main
