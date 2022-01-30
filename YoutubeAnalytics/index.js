const moment = require('moment')
const axios = require('axios')

const main = async(inputs, auths, event) => {
  
  // JS epochs are ms, we need this in seconds
  let startDate = inputs.startDate
  let endDate =  inputs.endDate

  // The YouTube Analytics API is, roughly, 3 days behind. So you should schedule
  // this step to run everyday, but you'll really be fetching analytics for 3 days prior.
  startDate = moment(startDate).format('Y-MM-DD')
  endDate = moment(endDate).format('Y-MM-DD')
  
  const response = await axios({
    url: `https://youtubeanalytics.googleapis.com/v2/reports`,
    headers: {
      Authorization: `Bearer ${auths.YOUTUBE_ANALYTICS.ACCESS_TOKEN}`,
    },
    params: {
      startDate: startDate,
      endDate: endDate,
      ids: `channel==${inputs.channelId || "mine"}`,
      metrics: "views,likes,subscribersGained,estimatedMinutesWatched,dislikes,shares",
      sort: "day",
      dimensions: "day",
      maxResults: 100,
    }
  })
  console.log(response.data)
  return response.data

}

module.exports.main = main