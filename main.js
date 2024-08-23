/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./checkall.svg */ \"./src/assets/checkall.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./plus.svg */ \"./src/assets/plus.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./close.svg */ \"./src/assets/close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    min-height: 100vh;\n    box-sizing: border-box;\n    margin: 0;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    display: flex;\n    align-content: center;\n    flex-direction: column;\n}\n\ndialog {\n    border-radius: 5px;\n    border: none;\n    box-shadow: 2px 5px rgb(152, 152, 152);\n    position: absolute;\n    top: 40%;\n}\n\n.add-project-dialog,\n.cancel-project-dialog {\n    font-weight: bold;\n    width: 80px;\n    border: none;\n    border-radius: 2px;\n    padding: 3px;\n    cursor: pointer;\n}\n\n.cancel-project-dialog {\n    background-color: rgb(39, 165, 39);\n    color: black;\n}\n\n.add-project-dialog {\n    background-color: red;\n    color: white;\n}\n\n.task-description {\n    min-width: 300px;\n    max-width: 300px;\n    min-height: 200px;\n    max-height: 300px;\n}\n\n.task-add {\n\n}\n\n.task-cancel {\n\n}\n\n.task-dialog {\n    border-radius: 5px;\n    border: none;\n    box-shadow: 2px 5px rgb(152, 152, 152);\n    position: absolute;\n    top: 35%;\n    \n}\n\n.task-dialog > form {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.task-nameinput  {\n    width: 300px;\n}\n\n.date-priority {\n    display: flex;\n    justify-content: space-between;\n}\n\nheader {\n    background-color: rgb(73, 73, 73);\n    color: white;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    height: 55px;\n    align-items: center;\n    gap: 5px;\n    font-size: 30px;\n}\n\nheader > span {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    height: 40px;\n}\n\n.main-content {\n    display: flex;\n    align-content: stretch;\n    flex: 1;\n}\n\n.side-bar {\n    background-color: rgb(144, 144, 144);\n    width: 260px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    font-weight: bold;\n    font-size: 20px;\n}\n\n.side-bar span:hover {\n    background-color: rgb(158, 158, 158);\n }\n \n\n.plus {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n.project ,\n.project-title{\n    display: flex;\n    justify-content: space-between;\n    cursor: pointer;\n}\n\n.delete-project,\n.delete-task {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});  \n}\n\n.plus,\n.delete-project {\n    height: 30px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.delete-task {\n    height: 25px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.task-plus {\n    content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    height: 45px;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.task-page {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    background-color: rgb(235, 235, 235);\n}\n\n.project-header,\n.today-page,\n.week-page {\n    display: flex;\n    height: 30px;\n    align-items: center;\n    cursor: pointer;\n    font-size: 30px;\n}\n\n.task-container {\n    background-color: rgb(144, 144, 144);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-radius: 2px;\n    height: 25px;\n    padding-left: 5px;\n    margin-bottom: 5px;\n}\n\n.low {\n    border-left: green solid 10px;\n}\n\n.medium {\n    border-left: rgb(172, 172, 17) solid 10px;   \n}\n\n.high {\n    border-left: rgb(161, 39, 39) solid 10px;\n}\n\n.task-subsection\n.today-subsection {\n    padding: 20px;\n}\n\n.task-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 200px;\n}\n\n.task-info > button {\n    height: 20px;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.today {\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/assets/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles.css":
/*!*******************************!*\
  !*** ./src/assets/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/assets/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/addProject.js":
/*!**************************************!*\
  !*** ./src/components/addProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ \"./src/components/createProject.js\");\n\n\nfunction addProject(){\n    const addProjectBtn = document.querySelector('.plus');\n    const projectDialog = document.querySelector('.project-dialog');\n    const addProject = document.querySelector('.add-project-dialog');\n    const projectSubsection = document.querySelector('.project-subsection');\n    const projectInput = document.querySelector('.project-input');\n    const cancelProject = document.querySelector('.cancel-project-dialog');\n\n    cancelProject.addEventListener('click', (e) => {\n        e.preventDefault();\n        projectInput.value = '';\n        projectDialog.close();\n    });\n    \n    addProjectBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        projectDialog.show();\n    });\n\n    addProject.addEventListener('click', (e) => {\n        e.preventDefault();\n\n        if(projectInput){\n            const projectName = document.createElement('span');\n            const deleteProjectIcon = document.createElement('span');\n            const currentProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_0__.CreateProject)();\n            let localtorageArr = [];\n\n            projectName.textContent = `# ${projectInput.value.trim()}`;\n            projectName.classList.add('project-title');\n            deleteProjectIcon.classList.add('delete-project');\n            projectName.appendChild(deleteProjectIcon);\n\n            if(localStorage.getItem(\"todo\")){\n                localtorageArr = [...JSON.parse(localStorage.getItem(\"todo\"))];\n            }\n            currentProject.setProjectTitle(projectInput.value.trim());\n\n            localtorageArr.push(currentProject.getProjectInfo());\n            localStorage.setItem(\"todo\", JSON.stringify(localtorageArr));\n\n            projectSubsection.appendChild(projectName);\n            projectInput.value = '';\n            projectDialog.close();\n        }\n    });\n}   \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\n\n//# sourceURL=webpack://todo/./src/components/addProject.js?");

/***/ }),

/***/ "./src/components/addTask.js":
/*!***********************************!*\
  !*** ./src/components/addTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _projectMethodInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectMethodInit */ \"./src/components/projectMethodInit.js\");\n/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ \"./src/components/createTask.js\");\n\n\n\nfunction addTask(){\n    const taskDialog = document.querySelector('.task-dialog');\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'task-plus'){\n            taskDialog.show();\n        }\n    });\n\n    document.addEventListener('click', (e) => {\n       \n        if(e.target.className === 'task-cancel'){\n            e.preventDefault();\n            const taskName = document.querySelector('.task-nameinput');\n            const taskDescripton = document.querySelector('.task-description');\n\n            taskName.textContent = '';\n            taskDescripton.textContent = '';\n            taskDialog.close();\n        }\n    });\n\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'task-add'){\n            e.preventDefault();\n            \n            const taskName = document.querySelector('.task-nameinput');\n            const taskDate = document.querySelector('#date');\n            const taskPriority = document.querySelector('select');\n            const taskDescripton = document.querySelector('.task-description');\n            const taskPage = document.querySelector('.task-page');\n            const taskSubsection = document.querySelector('.task-subsection');\n\n            if(taskName.value && taskDate.value){\n                const taskContainer = document.createElement('div');\n                const taskNameContainer = document.createElement('span');\n                const taskDateContainer = document.createElement('span');\n                const taskCloseIcon = document.createElement('span');\n                const taskDetails = document.createElement('button');\n                const taskInfoContainer = document.createElement('div');\n                const todoArr = JSON.parse(localStorage.getItem(\"todo\"));\n                const projectTitle = taskPage.firstChild.textContent.replace('#','').trim();\n\n                const currProject = (0,_projectMethodInit__WEBPACK_IMPORTED_MODULE_0__.ProjectMethodInit)();\n                const currentTask = (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.CreateTask)();\n                let projectIndex = 0;\n\n                for(let i = 0; i < todoArr.length; i++){\n                    if(todoArr[i].projectTitle === projectTitle){\n                        currProject.setProjectTitle(todoArr[i].projectTitle);\n                        currProject.setProjectTasks(todoArr[i].projectTasks);\n                        projectIndex = i;\n                        break;\n                    }\n                }\n\n                currentTask.setTitle(taskName.value.trim());\n                currentTask.setDueDate(taskDate.value.trim());\n                currentTask.setDescription(taskDescripton.value.trim());\n                currentTask.setPriority(taskPriority.options[taskPriority.selectedIndex].text);\n\n                currProject.addTasks(currentTask.getTaskInfo());\n                todoArr[projectIndex] = currProject.getProjectInfo();\n                localStorage.setItem(\"todo\", JSON.stringify(todoArr));\n\n                taskContainer.classList.add('task-container');\n                taskNameContainer.textContent = taskName.value.trim();\n                taskDateContainer.textContent = taskDate.value.trim();\n                //taskDescriptonContainer.textContent = taskDescripton.textContent.trim();\n                taskCloseIcon.classList.add('delete-task')\n                taskDetails.textContent = 'Details';\n\n                taskInfoContainer.classList.add('task-info');\n                taskInfoContainer.appendChild(taskDateContainer);\n                taskInfoContainer.appendChild(taskDetails);\n                taskInfoContainer.appendChild(taskCloseIcon);\n                //taskInfoContainer.appendChild(taskDescriptonContainer);\n\n                if(taskPriority.options[taskPriority.selectedIndex].text === 'low'){\n                    taskContainer.classList.add('low');\n                } else if(taskPriority.options[taskPriority.selectedIndex].text === 'medium'){\n                    taskContainer.classList.add('medium');\n                } else {\n                    taskContainer.classList.add('high');\n                }\n\n                taskContainer.appendChild(taskNameContainer);\n                taskContainer.appendChild(taskInfoContainer);\n                taskSubsection.appendChild(taskContainer);\n\n                taskName.value = '';\n                taskDescripton.value = ''\n                taskDialog.close();\n            }\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/addTask.js?");

/***/ }),

/***/ "./src/components/createProject.js":
/*!*****************************************!*\
  !*** ./src/components/createProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateProject: () => (/* binding */ CreateProject)\n/* harmony export */ });\nfunction CreateProject(){\n    let   projectTitle = '';\n    let   projectTasks = [];\n\n    const getProjectTitle = () => projectTitle;\n    const getProjectTasks = () => projectTasks;\n    const getProjectInfo  = () => ({\n        projectTitle, projectTasks\n    });\n \n    const setProjectTitle = (title) => projectTitle = title;\n    const setProjectTasks = (task)  => projectTasks.push(task);\n   \n    return { getProjectTitle, getProjectTasks, setProjectTitle, setProjectTasks,\n        getProjectInfo\n    }\n}\n\n\n \n \n \n\n//# sourceURL=webpack://todo/./src/components/createProject.js?");

/***/ }),

/***/ "./src/components/createTask.js":
/*!**************************************!*\
  !*** ./src/components/createTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateTask: () => (/* binding */ CreateTask)\n/* harmony export */ });\nfunction CreateTask(){\n    let title            = '';\n    let priority         = '';\n    let description      = '';\n    let dueDate          = '';\n \n    const getTitle       = () => title;\n    const getPriority    = () => priority;\n    const getDescription = () => description;\n    const getDueDate     = () => dueDate;\n \n    const getTaskInfo    = () => ({\n    title, priority, description, dueDate\n    });\n \n    const setTitle       = (taskTitle)       => title       = taskTitle;\n    const setPriority    = (taskPriority)    => priority    = taskPriority;\n    const setDescription = (taskDescription) => description = taskDescription;\n    const setDueDate     = (taskDeadline)    => dueDate = taskDeadline;\n \n    return { getTitle, getPriority, getDescription, getDueDate,\n    getTaskInfo, setTitle, setPriority, setDescription, setDueDate }        \n}\n \n \n\n\n//# sourceURL=webpack://todo/./src/components/createTask.js?");

/***/ }),

/***/ "./src/components/deleteProject.js":
/*!*****************************************!*\
  !*** ./src/components/deleteProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject)\n/* harmony export */ });\nfunction deleteProject(){\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'delete-project'){ \n            let localStorageArr = JSON.parse(localStorage.getItem(\"todo\"));\n            let projectName = e.target.parentNode.textContent.replace('#','').trim();\n            let projectIndex = -1;\n\n            for(let i = 0; i < localStorageArr.length; i++){\n                if(localStorageArr[i].projectTitle === projectName){\n                    projectIndex = i;\n                    break;\n                }\n            }\n            if(projectIndex >= 0) localStorageArr.splice(projectIndex, 1);\n\n            localStorage.setItem(\"todo\", JSON.stringify(localStorageArr));\n            e.target.parentNode.parentNode.removeChild(e.target.parentNode);\n        }\n    });\n}\n \n\n \n\n//# sourceURL=webpack://todo/./src/components/deleteProject.js?");

/***/ }),

/***/ "./src/components/deleteTask.js":
/*!**************************************!*\
  !*** ./src/components/deleteTask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTasks: () => (/* binding */ deleteTasks)\n/* harmony export */ });\n/* harmony import */ var _projectMethodInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectMethodInit */ \"./src/components/projectMethodInit.js\");\n\n\nfunction deleteTasks(){\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'delete-task'){\n            const currProject = (0,_projectMethodInit__WEBPACK_IMPORTED_MODULE_0__.ProjectMethodInit)();\n            const localStorageArr = JSON.parse(localStorage.getItem(\"todo\"));\n            const projectName =  document.querySelector('.project-header');\n            const taskName =  e.target.parentNode.parentNode.firstChild.textContent.trim();\n            let projectIndex = 0;\n            let taskIndex = 0;\n\n            console.log(localStorageArr);\n            for(let i = 0; i < localStorageArr.length; i++){\n                if(localStorageArr[i].projectTitle === projectName.textContent.replace('#','').trim()){\n                    let tasks = localStorageArr[i].projectTasks;\n                    for(let j = 0; j < tasks.length; j++){\n                        if(tasks[j].title === taskName){\n                            currProject.setProjectTitle(localStorageArr[i].projectTitle);\n                            currProject.setProjectTasks(localStorageArr[i].projectTasks);\n                            projectIndex = i;\n                            taskIndex = j;\n                        }\n                    }\n                }\n            } \n\n            currProject.deleteProject(taskIndex, 1);\n            localStorageArr[projectIndex] = currProject.getProjectInfo();\n            localStorage.setItem(\"todo\", JSON.stringify(localStorageArr));\n            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);\n            console.log(333);\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/deleteTask.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles.css */ \"./src/assets/styles.css\");\n/* harmony import */ var _todoUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoUI */ \"./src/components/todoUI.js\");\n/* harmony import */ var _sideBarUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideBarUI */ \"./src/components/sideBarUI.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ \"./src/components/addProject.js\");\n/* harmony import */ var _loadProjectsTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadProjectsTask */ \"./src/components/loadProjectsTask.js\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addTask */ \"./src/components/addTask.js\");\n/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteProject */ \"./src/components/deleteProject.js\");\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deleteTask */ \"./src/components/deleteTask.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./today */ \"./src/components/today.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./week */ \"./src/components/week.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_todoUI__WEBPACK_IMPORTED_MODULE_1__.TODOUI)();\n(0,_sideBarUI__WEBPACK_IMPORTED_MODULE_2__.sideBarUI)();\n(0,_addProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_loadProjectsTask__WEBPACK_IMPORTED_MODULE_4__.loadProjectTask)();\n(0,_addTask__WEBPACK_IMPORTED_MODULE_5__.addTask)();\n(0,_deleteProject__WEBPACK_IMPORTED_MODULE_6__.deleteProject)();\n(0,_deleteTask__WEBPACK_IMPORTED_MODULE_7__.deleteTasks)();\n(0,_today__WEBPACK_IMPORTED_MODULE_8__.getTodayTasks)();\n(0,_week__WEBPACK_IMPORTED_MODULE_9__.getWeeklyTodos)();\n\n//# sourceURL=webpack://todo/./src/components/index.js?");

/***/ }),

/***/ "./src/components/loadProjectsTask.js":
/*!********************************************!*\
  !*** ./src/components/loadProjectsTask.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjectTask: () => (/* binding */ loadProjectTask)\n/* harmony export */ });\nfunction loadProjectTask(){\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'project-title'){\n            const taskPage = document.querySelector('.task-page');\n            const projectContainer = document.createElement('div');\n            const plusBtn = document.createElement('span');\n            const taskSubsection = document.createElement('div');\n\n            plusBtn.classList.add('task-plus');\n            projectContainer.textContent = e.target.textContent;\n            projectContainer.appendChild(plusBtn);\n            projectContainer.classList.add('project-header');\n            taskSubsection.classList.add('task-subsection');\n\n            while(taskPage.firstChild){\n                taskPage.removeChild(taskPage.firstChild);\n            }\n\n            taskPage.appendChild(projectContainer);\n            taskPage.appendChild(taskSubsection);\n            //load project tasks below if it exist in local storage\n            //const projectName = e.target.value.replace('#','').trim();\n        }\n\n    });\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/loadProjectsTask.js?");

/***/ }),

/***/ "./src/components/projectDialog.js":
/*!*****************************************!*\
  !*** ./src/components/projectDialog.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectDialog: () => (/* binding */ projectDialog)\n/* harmony export */ });\nfunction projectDialog(){\n    const dialog = document.createElement('dialog');\n    const form = document.createElement('form');\n    const projectNameInput = document.createElement('input');\n    const addBtn = document.createElement('button');\n    const cancelBtn = document.createElement('button');\n\n    projectNameInput.placeholder = 'Name';\n    projectNameInput.classList.add('project-input');\n\n    addBtn.classList.add('add-project-dialog');\n    cancelBtn.classList.add('cancel-project-dialog');\n\n    addBtn.textContent = 'Add';\n    cancelBtn.textContent = 'Cancel';\n\n    form.appendChild(projectNameInput);\n    form.appendChild(addBtn);\n    form.appendChild(cancelBtn);\n\n    dialog.classList.add('project-dialog');\n    dialog.appendChild(form);\n\n    return dialog;\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/projectDialog.js?");

/***/ }),

/***/ "./src/components/projectMethodInit.js":
/*!*********************************************!*\
  !*** ./src/components/projectMethodInit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectMethodInit: () => (/* binding */ ProjectMethodInit)\n/* harmony export */ });\nfunction ProjectMethodInit(){\n    let   projectTitle = '';\n    let   projectTasks = [];\n\n    const getProjectTitle = () => projectTitle;\n    const getProjectTasks = () => projectTasks;\n    const getProjectInfo  = () => ({\n        projectTitle, projectTasks\n    });\n \n    const setProjectTitle = (title) => projectTitle = title;\n    const setProjectTasks = (task)  => projectTasks = [...task];\n    const addTasks     = (tasks) => projectTasks.push(tasks);\n    const deleteProject = (index, num) => projectTasks.splice(index, num)\n   \n    return { getProjectTitle, getProjectTasks, setProjectTitle, setProjectTasks,\n        getProjectInfo, addTasks, deleteProject\n    }\n}\n\n\n \n \n\n//# sourceURL=webpack://todo/./src/components/projectMethodInit.js?");

/***/ }),

/***/ "./src/components/sideBarUI.js":
/*!*************************************!*\
  !*** ./src/components/sideBarUI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sideBarUI: () => (/* binding */ sideBarUI)\n/* harmony export */ });\nfunction sideBarUI(){\n    const mainContent = document.querySelector('.main-content');\n    const sidebar = document.createElement('div');\n    const today = document.createElement('span');\n    const week = document.createElement('span');\n    const project = document.createElement('span');\n    const projectAddIcon = document.createElement('span');\n    const projectSubsection = document.createElement('div');\n    const taskPage = document.createElement('div');\n\n    today.classList.add('today');\n    today.textContent = \"Today\"; \n    week.textContent = \"Week\";\n    week.classList.add('week');\n    project.textContent = \"Project\";\n\n    projectAddIcon.classList.add('plus');\n    project.classList.add('project');\n    project.appendChild(projectAddIcon);\n    projectSubsection.classList.add('project-subsection');\n\n    sidebar.appendChild(today);\n    sidebar.appendChild(week);\n    sidebar.appendChild(project);\n    sidebar.appendChild(projectSubsection);\n\n    taskPage.classList.add('task-page');\n\n    sidebar.classList.add('side-bar');\n    mainContent.appendChild(sidebar);\n    mainContent.appendChild(taskPage);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/sideBarUI.js?");

/***/ }),

/***/ "./src/components/taskDialog.js":
/*!**************************************!*\
  !*** ./src/components/taskDialog.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskDialog: () => (/* binding */ taskDialog)\n/* harmony export */ });\nfunction taskDialog(){\n    const dialog = document.createElement('dialog');\n    const form = document.createElement('form');\n    const taskNameInput = document.createElement('input');\n    const priorityInput = document.createElement('select');\n    const lowPriority= document.createElement('option');\n    const mediumPriority = document.createElement('option');\n    const highPriority = document.createElement('option');\n    const dateInput = document.createElement('input');\n    const dateInputLabel = document.createElement('span');\n    const addBtn = document.createElement('button');\n    const cancelBtn = document.createElement('button');\n    const datePriorityContainer = document.createElement('div');\n    const dateContainer = document.createElement('div');\n    const priority = document.createElement('span');\n    const priorityContainer = document.createElement('div');\n    const taskDescription = document.createElement('textarea');\n    const addCancelButtonContainer = document.createElement('div');\n\n    taskNameInput.placeholder = 'Name';\n    taskNameInput.classList.add('task-nameinput');\n\n    //date info\n    dateInput.type = \"date\";\n    dateInput.id = \"date\";\n    dateInputLabel.textContent = \"Due Date:\";\n    dateInputLabel.for = \"date\";\n    dateContainer.appendChild(dateInputLabel);\n    dateContainer.appendChild(dateInput);\n\n    //priority info\n    lowPriority.value = 'low';\n    lowPriority.textContent = 'low';\n    mediumPriority.value = 'medium';\n    mediumPriority.textContent = 'medium';\n    highPriority.value = 'high';\n    highPriority.textContent = 'high';\n    priorityInput.appendChild(lowPriority);\n    priorityInput.appendChild(mediumPriority);\n    priorityInput.appendChild(highPriority);\n    priority.textContent = 'Priority:';\n    priorityContainer.appendChild(priority);\n    priorityContainer.appendChild(priorityInput);\n\n    datePriorityContainer.appendChild(dateContainer);\n    datePriorityContainer.appendChild(priorityContainer);\n    datePriorityContainer.classList.add('date-priority')\n\n    //task description info\n    taskDescription.classList.add('task-description');\n\n    addBtn.textContent = \"Add\";\n    cancelBtn.textContent = \"Cancel\";\n    addBtn.classList.add('task-add');\n    cancelBtn.classList.add('task-cancel');\n    addCancelButtonContainer.appendChild(addBtn);\n    addCancelButtonContainer.appendChild(cancelBtn);\n\n    form.appendChild(taskNameInput);\n    form.appendChild(datePriorityContainer);\n    form.appendChild(taskDescription);\n    form.appendChild(addCancelButtonContainer);\n\n    dialog.appendChild(form);\n    dialog.classList.add('task-dialog');\n\n    return dialog;\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/taskDialog.js?");

/***/ }),

/***/ "./src/components/today.js":
/*!*********************************!*\
  !*** ./src/components/today.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTodayTasks: () => (/* binding */ getTodayTasks)\n/* harmony export */ });\nfunction getTodayTasks(){\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'today'){\n            const day = new Date().getDate();\n            const month = new Date().getMonth() + 1;\n            const year = new Date().getFullYear();\n    \n            const todayPageSubsection = document.createElement('div');\n            const todayContentPage = document.querySelector('.task-page');\n            const todayHeader = document.createElement('div');\n            const localStorageArr = JSON.parse(localStorage.getItem(\"todo\"));\n\n            todayHeader.textContent = \"Today\";\n            todayHeader.classList.add('today-page');\n            todayPageSubsection.classList.add('today-subsection');\n    \n            while(todayContentPage.firstChild){\n                todayContentPage.removeChild(todayContentPage.firstChild);\n            }\n\n            todayContentPage.appendChild(todayHeader);\n            todayContentPage.appendChild(todayPageSubsection);\n\n            if(localStorageArr){\n                for(let i = 0; i < localStorageArr.length; i++){\n                    const project = localStorageArr[i].projectTasks;\n                    for(let j = 0; j < project.length; j++){\n                        let currTaskDate = project[j].dueDate.split('-');\n                        if(currTaskDate[0] == year && currTaskDate[1] == '0'+month &&\n                            currTaskDate[2] == day){\n                                const taskContainer = document.createElement('div');\n                                const taskTitle = document.createElement('span');\n                                const taskDueDate = document.createElement('span');\n                                const taskDetails = document.createElement('button');\n                                const taskInfoContainer = document.createElement('div');\n\n                                taskTitle.textContent = project[j].title;\n                                taskDueDate.textContent = project[j].dueDate;\n\n                                taskDetails.textContent = 'Details';\n                \n                                taskContainer.classList.add('task-container');\n                                taskInfoContainer.classList.add('task-info');\n                                taskInfoContainer.appendChild(taskDueDate);\n                                taskInfoContainer.appendChild(taskDetails);\n\n                                taskContainer.appendChild(taskTitle)\n                                taskContainer.appendChild(taskInfoContainer);\n                                \n                                if(project[j].priority === 'low'){\n                                    taskContainer.classList.add('low');\n                                } else if(project[j].priority === 'medium'){\n                                    taskContainer.classList.add('medium');\n                                } else {\n                                    taskContainer.classList.add('high');\n                                }\n                                todayPageSubsection.appendChild(taskContainer);\n                            }\n                    }\n                }\n            }\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/today.js?");

/***/ }),

/***/ "./src/components/todoUI.js":
/*!**********************************!*\
  !*** ./src/components/todoUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TODOUI: () => (/* binding */ TODOUI)\n/* harmony export */ });\n/* harmony import */ var _projectDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDialog */ \"./src/components/projectDialog.js\");\n/* harmony import */ var _taskDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDialog */ \"./src/components/taskDialog.js\");\n\n\n\nfunction TODOUI(){\n    const body = document.querySelector('body');\n    const header = document.createElement('header');\n    const checkIcon = document.createElement('span'); \n    const mainContent = document.createElement('div');\n\n    header.textContent = \"TODO\";\n    mainContent.classList.add('main-content');\n\n    header.appendChild(checkIcon)\n    body.appendChild(header);\n    body.appendChild(mainContent);\n    body.appendChild((0,_projectDialog__WEBPACK_IMPORTED_MODULE_0__.projectDialog)());\n    body.appendChild((0,_taskDialog__WEBPACK_IMPORTED_MODULE_1__.taskDialog)());\n\n}\n\n\n\n//# sourceURL=webpack://todo/./src/components/todoUI.js?");

/***/ }),

/***/ "./src/components/week.js":
/*!********************************!*\
  !*** ./src/components/week.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeeklyTodos: () => (/* binding */ getWeeklyTodos)\n/* harmony export */ });\nfunction getWeeklyTodos(){\n    document.addEventListener('click', (e) => {\n        if(e.target.className === 'week'){\n            const day = new Date().getDate();\n            const month = new Date().getMonth() + 1;\n            const year = new Date().getFullYear();\n\n            const firstDayOfWeek = day - (new Date().getDay());\n            const lastDayOfWeek = firstDayOfWeek + 6;\n\n            const weekPageSubsection = document.createElement('div');\n            const weekHeader = document.createElement('div');\n\n            const weekContentPage = document.querySelector('.task-page');\n            const localStorageArr = JSON.parse(localStorage.getItem(\"todo\"));\n\n            weekHeader.textContent = \"Week\";\n            weekHeader.classList.add('week-page');\n            weekPageSubsection.classList.add('week-subsection');\n    \n            while(weekContentPage.firstChild){\n                weekContentPage.removeChild(weekContentPage.firstChild);\n            }\n\n            weekContentPage.appendChild(weekHeader);\n            weekContentPage.appendChild(weekPageSubsection);\n\n            if(localStorageArr){\n                for(let i = 0; i < localStorageArr.length; i++){\n                    const project = localStorageArr[i].projectTasks;\n                    for(let j = 0; j < project.length; j++){\n                        let currTaskDate = project[j].dueDate.split('-');\n                        if(currTaskDate[0] == year && currTaskDate[1] == month &&\n                            currTaskDate[2] >= firstDayOfWeek && currTaskDate[2] <= lastDayOfWeek){\n                                const taskContainer = document.createElement('div');\n                                const taskTitle = document.createElement('span');\n                                const taskDueDate = document.createElement('span');\n                                const taskDetails = document.createElement('button');\n                                const taskInfoContainer = document.createElement('div');\n\n                                taskTitle.textContent = project[j].title;\n                                taskDueDate.textContent = project[j].dueDate;\n                                taskDetails.textContent = 'Details';\n                \n                                taskContainer.classList.add('task-container');\n                                taskInfoContainer.classList.add('task-info');\n                                taskInfoContainer.appendChild(taskDueDate);\n                                taskInfoContainer.appendChild(taskDetails);\n\n                                taskContainer.appendChild(taskTitle)\n                                taskContainer.appendChild(taskInfoContainer);\n                                \n                                if(project[j].priority === 'low'){\n                                    taskContainer.classList.add('low');\n                                } else if(project[j].priority === 'medium'){\n                                    taskContainer.classList.add('medium');\n                                } else {\n                                    taskContainer.classList.add('high');\n                                }\n                                weekPageSubsection.appendChild(taskContainer);\n                        }\n                    }\n                }\n            }\n        }\n    });\n};\n\n\n\n//# sourceURL=webpack://todo/./src/components/week.js?");

/***/ }),

/***/ "./src/assets/checkall.svg":
/*!*********************************!*\
  !*** ./src/assets/checkall.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9121a749df6119cbd0f0.svg\";\n\n//# sourceURL=webpack://todo/./src/assets/checkall.svg?");

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"97d4c0a10ac97607dc65.svg\";\n\n//# sourceURL=webpack://todo/./src/assets/close.svg?");

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cffe9a515498593b872.svg\";\n\n//# sourceURL=webpack://todo/./src/assets/plus.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;