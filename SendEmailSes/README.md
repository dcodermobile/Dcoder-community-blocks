# Send mail using amazon ses

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60c4910e0851ae7b224ac5c6)

## Description

Send an email using amazon ses with optional attachments.

## Inputs

#### **SES_KEY** _Text_

aws ses key

#### **SES_SECRET** _Text_

aws ses secret

#### **SES_REGION** _Text_

aws ses region.

#### **SES_SENDER** _Text_

sender name and email id

#### **MAIL_TO** _Text_

Reciever's email address.

#### **MAIL_SUBJECT** _Text_

mail subject

#### **MAIL_BODY** _Text_

mail body.

#### **attachmentList** _JsonArray_

A jsonarray of string, ie array of paths or urls of files to be attached.

## Output
