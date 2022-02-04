# Find first matching row in Gooogle Sheets
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/61fccf837c0bef32a8444e89)

## Description
This block find the first matching row in a specified column in google sheet.

## Inputs
#### **spreadsheetId**  *Text*
The ID of the spreadsheet to look in for value. The spreadsheetID can be found in the URL when viewing your Google sheet. E.g., https://docs.google.com/spreadsheets/d/[spreadsheetId]/edit#gid=0
#### **sheetName**  *Text*
The A1 notation of the values to look in for value. E.g., A1:E5 or Sheet1!A1:E5
#### **columnName**  *Text*
The A1 notation column name to look in for value.
#### **columnValue**  *Text*
The column value to look for.

## Output
#### **matchedRow**  *JsonArray*
The matched row.

