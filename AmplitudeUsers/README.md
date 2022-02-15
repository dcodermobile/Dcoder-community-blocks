# Get users from Amplitude

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60d25e9c9e54785352f5e46a)

## Description

Get active and new users from Amplitude analytics with optionality to fetch dau, mau or wau.

## Inputs

#### **api_key** _Text_

Amplitude api key, get from project details page on Amplitude.

#### **api_secret** _Text_

Amplitude api secret, get from project details page on Amplitude.

#### **start** _Text_

date for start of analytics data interval.

#### **end** _Text_

date for end of analytics data interval.

#### **m** _Text_

Optional value can be new or active.

#### **i** _Text_

Optional value can be 1, 7 or 30 for daily, weekly, and monthly respectively.

## Output

#### **usersdata** _JsonObject_

Users data from Amplitude.
