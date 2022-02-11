const axios = require('axios')
const allSettled = require('promise.allsettled')
const get = require('lodash.get')
const fs = require('fs')
const path = require('path')

const main = async (inputs, auths, event) => {
  // Keywords are comma-separated, so we convert into an array
  let keywords = ''
  try {
    keywords = inputs.keywords
  } catch (err) {
    console.log('Unable to get keywords')
  }
  var KEYWORDS = keywords.split(',').map((k) => k.trim())

  const HN_BASE_URL = 'https://hacker-news.firebaseio.com/v0/'

  // Fetch all top HN stories, filtering by keywords,
  const topStories = (await axios.get(`${HN_BASE_URL}/topstories.json`)).data
  if (!topStories) {
    //todo we need alternate like this to end a flow.
    //$end("No top stories found")
    console.log('No stories')
    return
  }

  const responses = await allSettled(
    topStories.map((topStory) => axios.get(`${HN_BASE_URL}/item/${topStory}.json`))
  )

  // Pull previously-posted stories from this.$checkpoint.
  // See https://docs.pipedream.com/workflows/steps/code/#step-level-state-this-checkpoint
  let previouslyPostedStories = '' //+fs.readFileSync(path.join(__dirname, 'stories.txt'))

  const matchingStories = []
  for (response of responses) {
    if (response && response.value) {
      const story = response.value.data
      for (keyword of KEYWORDS) {
        const re = new RegExp(keyword, 'gi')
        if (
          story &&
          story.title &&
          story.title.match(re) &&
          !previouslyPostedStories.includes(story.id)
        ) {
          console.log(`MATCHING TITLE: ${story.title}`)
          matchingStories.push(story)
        }
      }
    }
  }

  if (!matchingStories.length) {
    console.log('No new stories matching keywords')
    return
  }

  return matchingStories
  //previouslyPostedStories = previouslyPostedStories.concat(matchingStories.map(s => s.id))
  //fs.writeFileSync(path.join(__dirname, 'stories.txt'),previouslyPostedStories, {encoding: 'utf-8'})
  console.log('Successfully created matching stories.')
}

module.exports.main = main
