# Retrieving Covid-19 Statistics country-wise
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/62021a6625ed615f03e2d5d1/getcovid19statistics)

## Description
The block provides live Covid-19 statistics of a country by using "covid19-stats", an NPM module to retrieve worldometer's live Covid-19 stats. The module uses web scraping to obtain real time access to world wide statistical information. Using this block, you can provide the country name as input and get a JsonArray containing latest statistics of the desired country (as listed in worldometers) such as: country, totalCases, newCases, totalDeaths and newDeaths. 

## Inputs
#### **country** *Text*
Country name as text input. 

## Outputs
#### **covid19StatsReport** *JsonArray*
Covid-19 statistics report as per the country provided as input.
