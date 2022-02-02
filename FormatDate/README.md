# Convert a date in specific format
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6154ce90ee9d4c7b9a6403d4)

## Description
Convert a date in a specific format, given the format and timezone.

## Inputs
#### **date**  *Text*
The date can be unix timestamp or date  iso string. If the input date is timestamp in seconds, then provide optional input isTimestampSeconds as true.
#### **format**  *Text*
The format for the date. ex: DD/MM/YYYY HH:mm:ss
#### **timezone**  *Text*
Optional, the timezone, ex: Asia/Calcutta or America/Los_Angeles
#### **isTimestampSeconds**  *Boolean*
Provide true if input timestamp is in seconds instead of milliseconds.

## Output
#### **formattedDate**  *Text*
Formatted date.

