# Upload a file to Google drive

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e1d1b3bb8ff684613b12f3)

## Description

Uploads a file to Google drive given the filename, file mime type and path to the file, can also put file in a folder if parent folder id is provided.

## Inputs

#### **filename** _Text_

Name of the file.

#### **parents** _JsonArray_

A list of parent folder IDs, entered manually or coming from list folder previous step.

#### **filetype** _Text_

mime type of the file. for example application/pdf for filetype.

#### **pathToFile** _Text_

Full path of the file.

## Output

#### **uploadResponse** _JsonObject_

Upload response from Drive.
