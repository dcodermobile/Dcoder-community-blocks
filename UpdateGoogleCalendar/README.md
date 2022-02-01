# Update a google calendar event
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/project/6091a742d989b1834cc6bbc6)

## Description
Updates Google calendar event requires calendar event id to be updated.

## Inputs
#### **calendarId**  *Text*
The ID of the calendar to add the event to.
#### **eventId**  *Text*
Event's id to be updated.
#### **start_dateTime**  *Text*
The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.
#### **start_timeZone**  *Text*
The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
#### **end_dateTime**  *Text*
The time, as a combined date-time value (formatted according to RFC3339). A time zone offset is required unless a time zone is explicitly specified in timeZone.
#### **end_timeZone**  *Text*
The time zone in which the time is specified. (Formatted as an IANA Time Zone Database name, e.g. "Europe/Zurich".)
#### **conferenceDataVersion**  *Text*
Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. Acceptable values are 0 to 1, inclusive.
#### **maxAttendees**  *Number*
The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned
#### **sendNotifications**  *Boolean*
Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
#### **sendUpdates**  *Text*
Guests who should receive notifications about the creation of the new event.
Acceptable values are:
"all": Notifications are sent to all guests.
"externalOnly": Notifications are sent to non-Google Calendar guests only.
"none": No notifications are sent. This value should only be used for migration use cases.
#### **anyoneCanAddSelf**  *Boolean*
Whether anyone can invite themselves to the event.
#### **colorId**  *Number*
The color for the event.
1	Lavender
2	Sage
3	Grape
4	Flamingo
5	Banana
6	Tangerine
7	Peacock
8	Graphite
9	Blueberry
10	Basil
11	Tomato
#### **summary**  *Text*
Title of the event.
#### **description**  *Text*
Description of the event, can contain html.
#### **recurrence**  *JsonArray*
List of RRULE, EXRULE, RDATE and EXDATE lines for a recurring event, as specified in RFC5545. Note that DTSTART and DTEND lines are not allowed in this field; event start and end times are specified in the start and end fields.
#### **gadget_display**  *Text*
The gadget's display mode. Possible values are:
"icon" - The gadget displays next to the event's title in the calendar view.
"chip" - The gadget displays when the event is clicked.
#### **gadget_height**  *Text*
The gadget's height in pixels.
#### **gadget_width**  *Text*
The gadget's width in pixels.
#### **gadget_iconLink**  *Text*
https url for the gadget's icon.
#### **gadget_link**  *Text*
The gadget's url.
#### **gadget_preferences**  *JsonObject*
Prefrences.
#### **gadget_title**  *Text*
The gadget's title
#### **gadget_type**  *Text*
The gadget's type.
#### **guestsCanInviteOthers**  *Boolean*
Whether attendees other than the organizer can invite others to the event.
#### **guestsCanModify**  *Boolean*
Whether guests can modify the event.
#### **guestsCanSeeOtherGuests**  *Boolean*
Whether guests can see other guests invited to the event.
#### **sequence**  *Text*
Sequence number as per iCalendar.
#### **source_title**  *Text*
The title of the source, for example a title of webpage or an email subject.
#### **source_url**  *Text*
http/https url of the source.
#### **status**  *Text*
Status of the event, can be "confirmed", "tentative" or "cancelled" only.
#### **transparency**  *Text*
Whether event should block time on calendar, can be either "opaque" for blocking or "transparent" for non blocking.
#### **visibility**  *Text*
Visibility of the event, can be one of "default", "public", "private" or "confidential".

## Output
#### **event**  *JsonObject*
The updated calendar event.

