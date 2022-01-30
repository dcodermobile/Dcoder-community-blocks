# AWS Instance Cpu Utilisation
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60ec0e529f2130c3fd263809)

## Description
This block will give you the cpu utilisation data for given instance id.

## Inputs
#### **instanceId**  *Text*
Instance id of instance to be monitored.
#### **startTime**  *Text*
Specify the start range to fetch data.
#### **endTime**  *Text*
End range to fetch the data.
#### **interval**  *Number*
interval size to fetch data.
#### **region**  *Text*
region in which instance is hosted. for eg- ap-southeast-1
#### **awsAccessKeyId**  *Text*
Aws access key id to authenticate.
#### **awsSecretAccessKey**  *Text*
Aws secret access key to authenticate

## Output
#### **cpuUtilisationData**  *JsonObject*
Cpu utilisation of instance

