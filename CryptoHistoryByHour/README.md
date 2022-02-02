# Crypto history by hour.
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6154b69cee9d4c05566401d9)

## Description
Provide crypto history by hours, takes limit, cryptocompare.com api key as input.

## Inputs
#### **tsym**  *Text*
The currency symbol to convert into, for ex: USD, INR, EUR
#### **limit**  *Number*
The number of items in result.
#### **api_key**  *Text*
Your https://cryptocompare.com API key.
#### **fsym**  *Text*
The currency symbol of interest ex: BTC, ETH
Check full list on https://cryptocompare.com
#### **toTs**  *Text*
Returns historical data before that timestamp. If you want to get all the available historical data, you can use limit=2000 and keep going back in time using the toTs param. You can then keep requesting batches using: &limit=2000&toTs={the earliest timestamp received}

Leave empty for value till current time.

## Output
#### **data**  *JsonObject*
Cryptocompare response data;

