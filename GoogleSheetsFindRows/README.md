# Google sheets get rows
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60f86bbd1b58d2798fb3c83c)

## Description
Get rows from Google sheets, also allows you to filter based on column conditions.

## Inputs
#### **spreadsheetId**  *Text*
The ID of the spreadsheet to look in for value. The spreadsheetID can be found in the URL when viewing your Google sheet. E.g., https://docs.google.com/spreadsheets/d/[spreadsheetId]/edit#gid=0
#### **sheet_name**  *Text*
The A1 notation of the values to look in for value. E.g., A1:E5 or Sheet1!A1:E5
#### **column_name**  *Text*
The A1 notation column name to look in for value, for example: A or B
#### **column_value**  *Text*
The column value to look for.

## Output
#### **result**  *JsonArray*
Text response returned by block

