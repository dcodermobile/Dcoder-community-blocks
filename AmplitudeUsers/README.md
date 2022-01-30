# Get users from Amplitude
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60d25e9c9e54785352f5e46a)

## Description
Get active and new users from Amplitude analytics with optionality to fetch dau, mau or wau.

## Inputs
#### **api_key**  *Text*
Amplitude api key, get from project details page on Amplitude.
#### **api_secret**  *Text*
Amplitude api secret, get from project details page on Amplitude.
#### **start**  *Text*
date for start of analytics data interval.
#### **end**  *Text*
date for end of analytics data interval.
#### **m**  *Text*
Optional value can be new or active.
#### **i**  *Text*
Optional value can be 1, 7 or 30 for daily, weekly, and monthly respectively.

## Output
#### **usersdata**  *JsonObject*
Users data from Amplitude.

