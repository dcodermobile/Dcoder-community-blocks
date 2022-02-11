# Get Google Calendar events

[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/feed/block/60900d178c6e1d205b73c5c0)

## Description

Get Google Calendar events based on given criteria.

## Inputs

#### **calendarId** _Text_

The ID of the calendar to search within, defaults to primary of authenticated calendar.

#### **q** _Text_

Free text search term to find events that match this text.

#### **iCalUID** _Text_

Specifies event ID in the iCalendar format to be included in the response.

#### **singleEvents** _Boolean_

Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves.
Important to set true when orderBy is used.

#### **orderBy** _Text_

Acceptable values are:
"startTime": Order by the start date/time (ascending). This is only available when querying single events (i.e. the parameter singleEvents is True)
"updated": Order by last modification time (ascending).

#### **timeMin** _Text_

Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.

#### **timeMax** _Text_

Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.

#### **timeZone** _Text_

Time zone used in the response. Optional. The default is the time zone of the calendar.

#### **updatedMin** _Text_

Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.

## Output

#### **events** _JsonArray_

jsonarray of events, you can iterate over it with iterator block.
