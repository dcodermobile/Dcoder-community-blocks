const {
    WebClient
  } = require('@slack/web-api')
  
const main = async (inputs, secrets, auths, context) => {
  // Send to Slack

    let channel = inputs.channel
    let text = inputs.text
    let token = auths.SLACK.ACCESS_TOKEN

    const web = new WebClient(token)
    try {
      //for (story of matchingStories) {
      //const storyURL = story.url ? story.url : `https://news.ycombinator.com/item?id=${story.id}`
      //const text = `New Story on HN matching your keywords: <${storyURL}|${story.title}> (<https://news.ycombinator.com/item?id=${story.id}|comments>)`
      await web.chat.postMessage({
        channel,
        text,
        as_user: true
      })
      console.log("Successfully sent.")
      return true 
    } catch (e) {
      
      if (e.toString().indexOf("not_in_channel") > 0) {
        console.log("Error:\nTo send messages, invite Dcoder app to you channel first by writing /invite @Dcoder")
      } else {
        console.log(e)
      }
      return false
    }
}

module.exports.main = main