# Newrelic get metrics
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60d1baf19e54782e20f5dec6)

## Description
Get metrics from newrelic requires newrelic api key and app id.

## Inputs
#### **app_id**  *Text*
Newrelic app id.
Get your app id from https://rpm.newrelic.com/api/explore/applications/list
#### **api_key**  *Text*
Your newrelic api key.
#### **metric_names**  *Text*
Comma separated name of the metrics required. For example: HttpDispatcher
#### **value_fields**  *Text*
Comma separated  value field names to be included in response.
#### **from**  *Text*
Isodate string from for a specific period of analytics, default is 30 min.
#### **to**  *Text*
Isodate string to for a specific period of analytics, default is 30 min.
#### **period**  *Text*
Period of timeslices in seconds.

## Output
#### **metrics**  *JsonObject*
newrelic metric data.

