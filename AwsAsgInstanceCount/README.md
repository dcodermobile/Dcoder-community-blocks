# AWS Auto Scaling Group Instance Count

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60ec423fb488872d9506e4e2)

## Description

This block will give you the total instance count data for given auto scaling group.

## Inputs

#### **autoScalingGroupName** _Text_

Name of the auto scaling group

#### **startTime** _Text_

Specify the start range to fetch data.

#### **endTime** _Text_

End range to fetch the data.

#### **interval** _Number_

interval size to fetch data.

#### **region** _Text_

region in which instance is hosted. for eg- ap-southeast-1

#### **awsAccessKeyId** _Text_

Aws access key id to authenticate.

#### **awsSecretAccessKey** _Text_

Aws secret access key to authenticate

## Output

#### **cpuUtilisationData** _JsonObject_

Cpu utilisation of instance
