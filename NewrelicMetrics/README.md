# Newrelic get metrics

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60d1baf19e54782e20f5dec6)

## Description

Get metrics from newrelic requires newrelic api key and app id.

## Inputs

#### **app_id** _Text_

Newrelic app id.
Get your app id from https://rpm.newrelic.com/api/explore/applications/list

#### **api_key** _Text_

Your newrelic api key.

#### **metric_names** _Text_

Comma separated name of the metrics required. For example: HttpDispatcher

#### **value_fields** _Text_

Comma separated value field names to be included in response.

#### **from** _Text_

Isodate string from for a specific period of analytics, default is 30 min.

#### **to** _Text_

Isodate string to for a specific period of analytics, default is 30 min.

#### **period** _Text_

Period of timeslices in seconds.

## Output

#### **metrics** _JsonObject_

newrelic metric data.
