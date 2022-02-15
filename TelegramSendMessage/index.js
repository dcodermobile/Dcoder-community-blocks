const axios = require('axios')
const utf8 = require('utf8')

const main = async (inputs, auths, event) => {
  const token = inputs.token
  const chatid = inputs.chatid
  const message = utf8.encode(inputs.message)

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${message}`
  const result = await axios.get(url)
  console.log(result.data)
}

module.exports.main = main
