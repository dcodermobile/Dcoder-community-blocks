# Send WhatsApp message
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60d6d604e9fb4530dec36975)

## Description
Send a WhatsApp message using twilio.com's apis for whatsapp sandbox.

## Inputs
#### **accountSid**  *Text*
Your Twilio account sid. Get it from settings page of your project on Twilio.com
#### **authToken**  *Text*
Your Twilio auth token. Get it from settings page of your project on Twilio.com
#### **from**  *Text*
from whatsapp number formated as
whatsapp:+12849264789
#### **to**  *Text*
to whatsapp number formated as
whatsapp:+12849264789
#### **message**  *Text*
Message text.
#### **mediaUrl**  *Text*
Optional for attaching a media to the message.

## Output
#### **messageId**  *Text*
Returned message id.

