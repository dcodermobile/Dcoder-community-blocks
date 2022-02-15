# Get All Data of Google Sheet

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60c4426f7333f95c6c173c00)

## Description

Return the values of all cells of the specified sheet, for the specified spreadsheet ID.

## Inputs

#### **sheet_name** _Text_

Specify a sheet within your spreadsheet, like "Sheet1", or a range of values, like "Sheet1!A1:B2"

#### **valueRenderOption** _Text_

How values should be represented in the output. The default render option is FORMATTED_VALUE.
values it can take - FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA

#### **majorDimension** _Text_

For example, if the spreadsheet data is: A1=1,B1=2,A2=3,B2=4, then requesting range=A1:B2,majorDimension=ROWS will return [[1,2],[3,4]], whereas requesting range=A1:B2,majorDimension=COLUMNS will return [[1,3],[2,4]].

#### **dateTimeRenderOption** _Text_

How dates, times, and durations should be represented in the output. This is ignored if valueRenderOption is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
values it can take - SERIAL_NUMBER, FORMATTED_STRING

#### **spreadsheetId** _Text_

The ID of the spreadsheet to retrieve data from (found in the URL at docs.google.com/spreadsheets/d/{id})

## Output

#### **sheetData** _JsonObject_

data of all the cells in sheet
