# Update a docx doc

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60c47ef0b9a1c06211a709d6)

## Description

Templatize and update a docx document, can replace text in document.

## Inputs

#### **filePath** _Text_

Full path to the template document on disk. for ex: /tmp/file.docx

#### **variablesToReplace** _JsonObject_

A json key value pair object for each variable to be replaced in the doc.

#### **newFilePath** _Text_

Full path to the new docx file. for ex: /tmp/new.docx

## Output

#### **updatedFilePath** _Text_

Path to the updated file.
