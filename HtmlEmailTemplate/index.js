const main = async (inputs, auths, event) => {
  const { getHtmlData } = require('./html')

  let image_url = inputs.image_url
  let title = inputs.title
  let description = inputs.description
  let bg_color = inputs.bg_color
  let item_bg_color = inputs.item_bg_color
  let JSON_DATA = inputs.JSON_DATA
  if (!image_url) {
    image_url = 'https://dcoder.tech/images/mails/dcoder_logo_1024.png'
  }
  if (!title) {
    title = 'Dcoder flow'
  }
  if (!description) {
    description = 'Hello from Dcoder flows.'
  }
  if (!bg_color) {
    bg_color = '#212121'
  }
  if (!item_bg_color) {
    item_bg_color = '#191919'
  }
  if (typeof JSON_DATA === 'string') {
    JSON_DATA = JSON.parse(JSON_DATA)
  }

  let html_text = ''
  Object.keys(JSON_DATA).forEach((d) => {
    html_text += `<div style="background:${item_bg_color};border-radius:5px;padding:10px; margin: 5px 0px">${d} : ${JSON_DATA[d]}</div>`
  })

  return getHtmlData(html_text, image_url, title, bg_color, description)
}

module.exports.main = main
