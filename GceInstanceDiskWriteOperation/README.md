# GCE Instance Write Read Operation

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60ebfd83a5137ad6fca2bda9)

## Description

This block will return GCE instance's disk write operation.

## Inputs

#### **projectId** _Text_

Project id of instance

#### **instanceName** _Text_

name of the instance on gce

#### **serviceAccountKey** _Text_

service account key to access gce instance log data

## Output

#### **diskWriteData** _JsonObject_

Disk write data of GCE instance.
