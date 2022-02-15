# Get Metric Data From Prometheus

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60dbfa68e9fb452e1fc37f8e)

## Description

This block fetches metric data from prometheus server.

## Inputs

#### **prometheusServerUrl** _Text_

Url of the prometheus server to fetch data

#### **prometheusUsername** _Text_

Username to access prometheus apis.

#### **prometheusPassword** _Text_

Passwords to access prometheus apis.

#### **query** _Text_

Prometheus query to fetch data

#### **startTime** _Text_

Query start time range

#### **endTime** _Text_

Query end time range

#### **step** _Text_

step size for data- for eg- 10s, 20m, 1h

## Output

#### **response** _JsonObject_

api response of the http post call
