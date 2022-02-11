# Get single crypto symbol price

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/6154b9cfee9d4c0cfb6401fa)

## Description

Provides current price of a crypto currency in multiple other currencies, given crypto currency symbol, to currency symbol and cryptocompare.com api key as input.

## Inputs

#### **fsym** _Text_

The currency symbol of interest ex: BTC, ETH
Check full list on https://cryptocompare.com

#### **tsyms** _Text_

Comma separated list of the currency symbol to convert into, for ex: USD, INR, EUR

#### **api_key** _Text_

Your https://cryptocompare.com API key.

## Output

#### **data** _JsonObject_

Cryptocompare response data;
