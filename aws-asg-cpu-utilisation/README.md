# AWS Auto Scaling Group Cpu Utilisation
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60ec3603b48887329206e4b3)

## Description
This block will give you the cpu utilisation data for given auto scaling group.

## Inputs
#### **autoScalingGroupName**  *Text*
Name of the auto scaling group
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

