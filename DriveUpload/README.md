# Upload a file to Google drive
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/60e1d1b3bb8ff684613b12f3)

## Description
Uploads a file to Google drive given the filename, file mime type and path to the file, can also put file in a folder if parent folder id is provided.

## Inputs
#### **filename**  *Text*
Name of the file.
#### **parents**  *JsonArray*
A list of parent folder IDs, entered manually or coming from list folder previous step.
#### **filetype**  *Text*
mime type of the file. for example application/pdf for filetype.
#### **pathToFile**  *Text*
Full path of the file.

## Output
#### **uploadResponse**  *JsonObject*
Upload response from Drive.

