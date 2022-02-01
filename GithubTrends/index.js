const githubTrends = require('github-trends-api')

const main = async(inputs, auths, context) => {
  const section =  inputs.section
  const language =  inputs.language
  const since =  inputs.since
  const spoken_language_code =  inputs.spoken_language_code
  const options ={}
  console.log(section)
  if(section){
    options.section = section
    if(section == 'developers' && !language){
      throw new Error('Please provide language when you select developers.')
    }
  }
  if(language){
    options.language = language
  }
  if(since){
    options.since = since
  }
  if(spoken_language_code){
    options.spoken_language_code = spoken_language_code
  }

  const result = await githubTrends(options)
  //console.log(result)
  return result
}

module.exports.main = main