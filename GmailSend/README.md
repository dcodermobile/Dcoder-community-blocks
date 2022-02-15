# Send email using Gmail

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e1b86a2938a1c23caf6703)

## Description

Send an email using Gmail oauth with attachment support.s

## Inputs

#### **to** _Text_

Email address to whom you want to send email.

#### **subject** _Text_

Subject of the email.

#### **text** _Text_

body of the email.

#### **html** _Text_

Optional body in html format.

#### **filePath** _Text_

Full path to the file to be added as attachment.

#### **from** _Text_

The e-mail address of the sender. All e-mail addresses can be plain 'sender@gmail.com' or formatted 'Sender Name <sender@gmail.com>'

#### **cc** _Text_

Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field

#### **bcc** _Text_

Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field

#### **replyTo** _Text_

An e-mail address that will appear on the Reply-To: field

## Output

#### **mailResponse** _JsonObject_

Mail response.
