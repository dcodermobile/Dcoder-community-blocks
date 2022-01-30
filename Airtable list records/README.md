# List records from Airtable
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/609c04e457ab642f9e066ce0)

## Description
lList records from Airtable given tablename and baseid and api_key.

## Inputs
#### **base_id**  *Text*
Airtable base_id.
#### **table**  *Text*
Airtable table id or table name.
#### **api_key**  *Text*
Airtable api key.
#### **viewId**  *Text*
The name or ID of a view in the table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the sort parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the fields parameter.
#### **filterByFormula**  *Text*
A formula used to filter records. The formula will be evaluated for each record, and if the result is not 0, false, "", NaN, [], or #Error! the record will be included in the response.

If combined with the view parameter, only records in that view which satisfy the formula will be returned.

For example, to only include records where fieldname isn't empty, pass in NOT({fieldname} = '') as a parameter like this:

 filterByFormula: "NOT({fieldname} = '')"
#### **maxRecords**  *Number*
Provide maxRecords that you want to return if kept empty will return all the records.
#### **sortFieldId**  *Text*
Sort field, id of the field with which you want to sort the results.
#### **sortDirection**  *Text*
Sort results bases on Ascending or descending use "asc" for Ascending and "desc" for descending.

## Output
#### **records**  *JsonArray*
Airtable records.

