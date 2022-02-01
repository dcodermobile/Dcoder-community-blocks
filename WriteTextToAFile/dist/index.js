/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 118:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const main = async (inputs, secrets, auths, context) => {

  const fs = __nccwpck_require__(747)
  const path = __nccwpck_require__(622)
  // To get block input
  try {
    let filepath = inputs.filepath
    const mode = inputs.mode // 1 for append, 2 for write, default write
    const directory = inputs.directory
    const filename = inputs.filename
    const text = inputs.text

    if (!filepath && directory && filename) {
      filepath = path.join(directory, filename)
    } else if (!filepath) {
      console.log('Error: filepath is not provided and optional directory and filename also not provided.')
    }
    if (!mode || mode == 2) {
      fs.writeFileSync(filepath, text)
    } else if (mode && mode == 1) {
      fs.appendFileSync(filepath, text, {
        flag: 'a'
      })
    }
  } catch (err) {
    console.log(err.message)
  }
  // Simillarly to set block's ouput
  // core.setOutput('varName', value)
}

module.exports.main = main

/***/ }),

/***/ 747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

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