# Convert array of date in specific format
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6154cb70ee9d4c44846403c1)

## Description
Convert array of dates in a specific format, given the format and timezone.

## Inputs
#### **dates**  *JsonArray*
Array of dates, the dates can be unix timestamp or date  iso string. If the input date is timestamp in seconds, then provide optional input isTimestampSeconds as true.
#### **format**  *Text*
The format for the date. ex: DD/MM/YYYY HH:mm:ss
#### **timezone**  *Text*
Optional timezone, ex: Asia/Calcutta or America/Los_Angeles
#### **isTimestampSeconds**  *Boolean*
Provide true if input timestamp is in seconds instead of milliseconds.

## Output
#### **formattedDates**  *JsonArray*
Array of formatted dates.

