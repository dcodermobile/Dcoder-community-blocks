# Send email using Gmail
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60e1b86a2938a1c23caf6703)

## Description
Send an email using Gmail oauth with attachment support.s

## Inputs
#### **to**  *Text*
Email address to whom you want to send email.
#### **subject**  *Text*
Subject of the email.
#### **text**  *Text*
body of the email.
#### **html**  *Text*
Optional body in html format.
#### **filePath**  *Text*
Full path to the file to be added as attachment.
#### **from**  *Text*
The e-mail address of the sender. All e-mail addresses can be plain 'sender@gmail.com' or formatted 'Sender Name <sender@gmail.com>'
#### **cc**  *Text*
Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field
#### **bcc**  *Text*
Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field
#### **replyTo**  *Text*
An e-mail address that will appear on the Reply-To: field

## Output
#### **mailResponse**  *JsonObject*
Mail response.

