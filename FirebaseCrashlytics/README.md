# Get Firebase crashes
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60da188fe9fb455ac3c3733a)

## Description
Get firebase crashes requires bigqiery linking of Firebase and service account json file.

## Inputs
#### **project**  *Text*
Your project id on Google cloud console.
#### **package**  *Text*
App's package name for ex: com.facebook
#### **platform**  *Text*
platform, value can be android or ios.
#### **location**  *Text*
Big query dataset location.
#### **service_account**  *Text*
Service account json in raw text format.
#### **days**  *Text*
Data of last n days.
#### **build_version**  *Text*
App's build version code, optional.
#### **display_version**  *Text*
App's display version, optional.

## Output
#### **crashData**  *JsonArray*
Array of crash data in aescending order of date.

