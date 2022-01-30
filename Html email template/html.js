module.exports.getHtmlData = (data, image_url, title, bg_color, description) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body style="background:${bg_color};color: #bdbdbd">
  <img src='${image_url}' width="100%" />
  <h3 style="text-align: center"> ${title} </h3>
  <p style="padding:10px">${description}</p>
  ${data}
</body>
</html>`
}
