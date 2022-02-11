# Convert docs, PDF, Png files

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60d5abcf25eb897504dc4b99)

## Description

Convert docs, PDFs and pngs using convertapi.com apis.

## Inputs

#### **filepath** _Text_

Full filepath to the file to be converted, ex : /tmp/abc.docx or an https url to the file.

#### **from** _Text_

format of the input file can be: doc,pdf,png,ppt

See convertapi.com for full list.

#### **to** _Text_

format of the converted file, can be: doc,pdf,png,ppt

See convertapi.com for full list.

#### **secret_key** _Text_

Get secret_key from https://convertapi.com

#### **outputFilesPath** _Text_

Full path to the directory where the converted files are to be saved.

## Output

#### **convertedFiles** _JsonArray_

Converted files as an array of filepaths.
