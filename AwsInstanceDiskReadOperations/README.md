# AWS Instance Disk Read Operations

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60f007488ecf3a76ced6fae7)

## Description

This block will give you the disk read operations data for given instance id.

## Inputs

#### **instanceId** _Text_

Id of AWS instance to be monitored.

#### **startTime** _Text_

Specify the start time to fetch data.

#### **endTime** _Text_

Specify end time to fetch the data.

#### **interval** _Number_

Interval in seconds to fetch data. for eg- 60 for 1 min, 300 for 5 min

#### **region** _Text_

Region in which instance is hosted on aws. for eg- ap-southeast-1

#### **awsAccessKeyId** _Text_

Aws access key id to authenticate.

#### **awsSecretAccessKey** _Text_

Aws secret access key to authenticate.

## Output

#### **diskReadData** _JsonObject_

Disk read data of instance.
