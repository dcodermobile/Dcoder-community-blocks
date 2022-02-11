# Get Firebase crashes

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60da188fe9fb455ac3c3733a)

## Description

Get firebase crashes requires bigqiery linking of Firebase and service account json file.

## Inputs

#### **project** _Text_

Your project id on Google cloud console.

#### **package** _Text_

App's package name for ex: com.facebook

#### **platform** _Text_

platform, value can be android or ios.

#### **location** _Text_

Big query dataset location.

#### **service_account** _Text_

Service account json in raw text format.

#### **days** _Text_

Data of last n days.

#### **build_version** _Text_

App's build version code, optional.

#### **display_version** _Text_

App's display version, optional.

## Output

#### **crashData** _JsonArray_

Array of crash data in aescending order of date.
