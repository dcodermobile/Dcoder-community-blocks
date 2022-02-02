const main = 
  async (inputs, auths, event) => {
  const axios = require('axios')
  const params = {}
  const access_token = auths.GOOGLE_CALENDAR.ACCESS_TOKEN
  // console.log(access_token)
  let calendarId = inputs.calendarId
  const q = inputs.q
  calendarId = calendarId || "primary"
  const iCalUID = inputs.iCalUID
  const singleEvents = inputs.singleEvents
  const orderBy = inputs.orderBy
  const timeMax = inputs.timeMax
  const timeMin = inputs.timeMin
  const timeZone = inputs.timeZone
  const updatedMin = inputs.updatedMin

  const calendarParams = ["q", "iCalUID", "orderBy", "singleEvents", "timeMax", "timeMin", "timeZone", "updatedMin"]
  params.q = q
  params.iCalUID = iCalUID
  params.singleEvents = singleEvents
  params.orderBy = orderBy
  params.timeMax = timeMax
  params.timeMin = timeMin
  params.timeZone = timeZone
  params.updatedMin = updatedMin
  let p = params
  const queryString = calendarParams.filter(param => p[param]).map(param => `${param}=${p[param]}`).join("&")
  //console.log(queryString)
  const result = await axios({
    url: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${queryString}`,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    method: 'GET'
  })
  //console.log(result)
  return result.data.items
}

module.exports.main = main