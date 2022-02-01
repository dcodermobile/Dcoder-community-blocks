/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 655:
/***/ ((module) => {

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


/***/ }),

/***/ 118:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const main = 
  async (inputs, auths, event) => {

  const {
    getHtmlData
  } = __nccwpck_require__(655)


  let image_url = inputs.image_url
  let title = inputs.title
  let description = inputs.description
  let bg_color = inputs.bg_color
  let item_bg_color = inputs.item_bg_color
  let JSON_DATA = inputs.JSON_DATA
  if (!image_url) {
    image_url = "https://dcoder.tech/images/mails/dcoder_logo_1024.png"
  }
  if (!title) {
    title = "Dcoder flow"
  }
  if (!description) {
    description = "Hello from Dcoder flows."
  }
  if (!bg_color) {
    bg_color = "#212121"
  }
  if (!item_bg_color) {
    item_bg_color = "#191919"
  }
  if (typeof JSON_DATA === 'string') {
    JSON_DATA = JSON.parse(JSON_DATA)
  }

  let html_text = ""
  Object.keys(JSON_DATA).forEach(d => {
    html_text += `<div style="background:${item_bg_color};border-radius:5px;padding:10px; margin: 5px 0px">${d} : ${JSON_DATA[d]}</div>`
  })

  return getHtmlData(html_text, image_url, title, bg_color, description)
}

module.exports.main = main

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __nccwpck_require__(118);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;