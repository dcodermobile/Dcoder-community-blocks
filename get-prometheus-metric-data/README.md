# Get Metric Data From Prometheus
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60dbfa68e9fb452e1fc37f8e)

## Description
This block fetches metric data from prometheus server.

## Inputs
#### **prometheusServerUrl**  *Text*
Url of the prometheus server to fetch data
#### **prometheusUsername**  *Text*
Username to access prometheus apis.
#### **prometheusPassword**  *Text*
Passwords to access prometheus apis.
#### **query**  *Text*
Prometheus query to fetch data
#### **startTime**  *Text*
Query start time range
#### **endTime**  *Text*
Query end time range
#### **step**  *Text*
step size for data- for eg- 10s, 20m, 1h

## Output
#### **response**  *JsonObject*
api response of the http post call

