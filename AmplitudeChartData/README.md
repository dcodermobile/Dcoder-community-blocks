# Get Amplitude Chart data

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60d9dc73e9fb45e2a9c3729e)

## Description

Get chart data from Amplitude analytics by providing chart id of an existing chart in Amplitude.

## Inputs

#### **api_key** _Text_

Amplitude api key, get from project details page on Amplitude.

#### **api_secret** _Text_

Amplitude api secret, get from project details page on Amplitude.

#### **chart_id** _Text_

Chart id of an existing Amplitude chart from your Amplitude dashboard( e.g. 'abc123' in the following URL: https://analytics.amplitude.com/demo/chart/abc123

## Output

#### **chartdata** _JsonObject_

Chart data from Amplitude.
