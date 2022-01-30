# Youtube Analytics
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60f6c978d6196fc0801dfb37)

## Description
Provides YouTube analytics for a period defined, can return views, subscribers and more metrics.

## Inputs
#### **startDate**  *Text*
Start date for the period of youtube analytics data, can be isodate string.
Note: Youtube analytics data api provides data 3 days late, hence make sure atleast your start date is 3 days behind from current date.
#### **endDate**  *Text*
End date for the period of youtube analytics data, can be isodate string.
Note: Youtube analytics data api provides data 3 days late, hence make sure atleast your start date is 3 days behind from current date.
#### **channelId**  *Text*
Set this to the unique channel ID of the channel for which you are retrieving data. The user authorizing the request must be the owner of the channel.

The channel ID is currently a string that begins with the letters UC, though its format is subject to change. (You can find your channel's ID on the advanced account settings page for your YouTube channel, link here https://www.youtube.com/account_advanced )

## Output
#### **analytics**  *JsonObject*
Youtube analytics data.

