# Get-MongoDB-Connection-metrics

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e840b6c06deda57d792140)

## Description

Get mongodb connection metrics by providing mongodb url.

## Inputs

#### **mongo_url** _Text_

Mongodb url with admin db access to execute serverStatus command, ex, mongodb://user:pass@host:port/dbname?replicaSet=setname

## Output

#### **stats** _JsonObject_

Mongodb stats
