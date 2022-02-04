const axios = require('axios')

const main = async (inputs, auths, event) => {
  // Pulling sheets value from Google Sheets API Get sheet values endpoint.
  const config = {
    url: `https://sheets.googleapis.com/v4/spreadsheets/${inputs.spreadsheetId}/values/${inputs.sheetName}`,
    headers: {
      Authorization: `Bearer ${auths.GOOGLE_SHEETS.ACCESS_TOKEN}`,
    },
  }
  const sheet_values = (await axios(config)).data.values;

  // Gets the 0 index column based on the column name parameter.
  var selected_col;
  try {
    selected_col = columnA1To0BasedIndex(inputs.columnName);
  } catch (ex) {
    console.log("Enter a column name in A1 format.");
    return [];
  }

  // Iterates rows in sheet values and compares with the value provided at the specified column.
  for (const row of sheet_values) {
    if (String(row[selected_col]) == inputs.columnValue) {
      return row;
    }
  }

  return [];
}

// Help function used to convert column name in A1 convention to 0 based index.
// Adjusted from @flambino 's answer in this codereview question: https://codereview.stackexchange.com/questions/90112/a1notation-conversion-to-row-column-index
const columnA1To0BasedIndex = (colA1) => {
  var i, l, chr,
    sum = 0,
    A = "A".charCodeAt(0),
    radix = "Z".charCodeAt(0) - A + 1;

  if (typeof colA1 !== 'string' || !/^[A-Z]+$/.test(colA1)) {
    throw new Error("Expected column label");
  }

  for (i = 0, l = colA1.length; i < l; i++) {
    chr = colA1.charCodeAt(i);
    sum = sum * radix + chr - A + 1
  }

  return sum - 1;
};

module.exports.main = main
