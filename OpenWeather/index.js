const axios = require('axios')
const main = 
  async(inputs, auths, event) => {
  const city =  inputs.city
  const token =  inputs.token

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}`
  const result = await axios.get(url)
  console.log(result.data)
  return result.data
}

module.exports.main = main