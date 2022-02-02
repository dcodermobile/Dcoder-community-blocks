# Get value of a key from Redis
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/614c7a90244dc567c4cd3ba0)

## Description
Get the value of a key from Redis, given key and connection uri to connect with Redis instance.

## Inputs
#### **connectionUri**  *Text*
Connection uri for redis in format:

redis://username:authpassword@127.0.0.1:6380/4?allowUsernameInURI=true

For compatibility reasons `allowUsernameInURI` need to be provided, otherwise the username part will be ignored.

Make sure to whitelist Dcoder's ips to connect to redis instance: https://code.dcoder.tech/feed/article/6055aa0f646cc60a0c9ac65e/add-dcoder-ips-to-whitelist
#### **key**  *Text*
Key to be set.

## Output
#### **value**  *Text*
Value of the key.

