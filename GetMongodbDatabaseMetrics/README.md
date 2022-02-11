# Get Mongodb database stats

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e975fd2454f43ca05b717c)

## Description

Get mongodb database metrics by providing mongodb url and database name.

## Inputs

#### **mongo_url** _Text_

Mongodb url with admin db access to execute serverStatus command, ex, mongodb://user:pass@host:port/dbname?replicaSet=setname

#### **database** _Text_

Database name for metrics.

#### **scale** _Number_

To scale storage values in output for example value 1024 here will return all stats in KB instead of bytes.

## Output

#### **stats** _JsonObject_

Mongodb stats
