const axios = require('axios')
const main = async (inputs, auths, event) => {
  const calendarId = inputs.calendarId
  const eventId = inputs.eventId
  const conferenceDataVersion = inputs.conferenceDataVersion
  const maxAttendees = inputs.maxAttendees
  const sendNotifications = inputs.sendNotifications
  const sendUpdates = inputs.sendUpdates
  //const supportsAttachments =inputs.supportsAttachments

  let params = {}
  const calendarParams = [
    'conferenceDataVersion',
    'maxAttendees',
    'sendNotifications',
    'sendUpdates'
  ]
  params.conferenceDataVersion = conferenceDataVersion
  params.maxAttendees = maxAttendees
  params.sendNotifications = sendNotifications
  params.sendUpdates = sendUpdates
  //params.supportsAttachments = supportsAttachments

  let p = params

  const queryString = calendarParams
    .filter((param) => p[param])
    .map((param) => `${param}=${p[param]}`)
    .join('&')

  data = {
    anyoneCanAddSelf: inputs.anyoneCanAddSelf,
    colorId: inputs.colorId,
    summary: inputs.summary,
    location: inputs.location,
    description: inputs.description,
    start: {
      dateTime: inputs.start_dateTime,
      timeZone: inputs.start_timeZone
    },
    end: {
      dateTime: inputs.end_dateTime,
      timeZone: inputs.end_timeZone
    },
    recurrence: inputs.recurrence,
    gadget: {
      display: inputs.gadget_display,
      height: inputs.gadget_height,
      iconLink: inputs.gadget_iconLink,
      link: inputs.gadget_link,
      preferences: inputs.gadget_preferences,
      title: inputs.gadget_title,
      type: inputs.gadget_type,
      width: inputs.gadget_width
    },
    guestsCanInviteOthers: inputs.guestsCanInviteOthers,
    guestsCanModify: inputs.guestsCanModify,
    guestsCanSeeOtherGuests: inputs.guestsCanSeeOtherGuests,
    sequence: inputs.sequence,
    source: {
      title: inputs.source_title,
      url: inputs.source_url
    },
    status: inputs.status,
    transparency: inputs.transparency,
    visibility: inputs.visibility
  }

  // remove empty parameters from data object
  const removeEmpty = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] && typeof obj[key] == 'object') removeEmpty(obj[key])
      else if (obj[key] == undefined || obj[key] == '' || obj[key] == '{}') delete obj[key]
    })
    return obj
  }
  console.log(data)
  data = removeEmpty(data)
  if (!Object.keys(data.gadget).length) delete data.gadget
  if (!Object.keys(data.source).length) delete data.source

  console.log(data)
  try {
    const token = auths.GOOGLE_CALENDAR.ACCESS_TOKEN
    // console.log(token)
    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}?${queryString}`
    // console.log(url)
    const result = await require('@pipedreamhq/platform').axios(this, {
      url: url,
      headers: {
        Authorization: `Bearer ${token}`
      },
      method: 'PUT',
      data: data
    })
    console.log(result)
    return result
  } catch (err) {
    if (err.response && err.response.data) {
      console.log(err.response.data)
      console.log(err.response.data.error.errors)
    } else console.log(err)
    throw err
  }
}

module.exports.main = main
