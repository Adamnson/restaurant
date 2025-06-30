/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var lib;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu_style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu_style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.items-menu {\n  margin: 2rem;\n  min-height: 80vw;\n  border: 0.5rem dotted gold;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.item-container {\n  min-width: 80%;\n  border: 0.5rem solid greenyellow;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.item {\n  min-height: 8rem;\n  min-width: max(8rem,min(40%,20rem));\n  margin: 2rem;\n  padding: 0.5rem;\n  border: 5px dotted whitesmoke;\n  border-radius: 1rem;\n  display: grid;\n  grid-template-rows: 1fr/ 1fr 1fr;\n  background-color: palegreen;\n}\n\n.image{\n  background-color: whitesmoke;\n  min-height: 15vw;\n  border-radius: 0.5rem;\n}\n\n.image > img {\n  max-height: 15vh;\n  width: 100%;\n  border-radius: 0.5rem;\n  margin-top: 0.1rem;\n}\n\n.dish {\n  min-height: 15vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 1.5rem;\n}\n\n.name {\n  max-width: 50%;\n  text-wrap: wrap;\n}\n\n.quantity {\n  border-radius:  50%;\n  height: 3rem;\n  width: 3rem;\n  font-size: 1.2rem;\n  background-color: red;\n  position: absolute;\n  /* top: 12%; */\n  /* bottom: 2rem; */\n  left: max(5rem,min(60%,85rem)) ;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus,\n.minus {\n  border-radius: 50%;\n  height: 5rem;\n  width: 5rem;\n  font-size: 1.5rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lib/./src/menu_style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://lib/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lib/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showCart: () => (/* binding */ showCart)\n/* harmony export */ });\n/* harmony import */ var _page_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_setup.js */ \"./src/page_setup.js\");\n\n\nfunction showCart() {\n  console.log(\"cart button was clicked\");\n  let names = [];\n  _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu.forEach(item =>{ \n    names.push(item.name.split(\" \").join(\"-\"));\n  })\n  let table = buildBillTable()\n  showTotal(names,table)\n}\n\nfunction buildBillTable(){\n  let content_div = document.querySelector(\"#content\");\n  content_div.innerHTML = \"\";\n  let bill_table = document.createElement(\"table\");\n  let heading1 = document.createElement(\"th\");\n  let heading2 = document.createElement(\"th\");\n  let heading3 = document.createElement(\"th\");\n  let heading4 = document.createElement(\"th\");\n  heading1.innerHTML = \"Dish\";\n  heading2.innerHTML = \"Quantity\";\n  heading3.innerHTML = \"Unit Price\";\n  heading4.innerHTML = \"Total\";\n  bill_table.appendChild(heading1);\n  bill_table.appendChild(heading2);\n  bill_table.appendChild(heading3);\n  bill_table.appendChild(heading4);\n  content_div.appendChild(bill_table);\n  return bill_table\n}\n\nfunction showTotal(names,table){\n  let sum_total = 0;\n  for(let i = 0; i < names.length; i++){\n    if(_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.cart[names[i]]){\n      console.log(`${_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu[i].name} : ${_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.cart[names[i]]} => ${_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.cart[names[i]] * _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu[i].price}`)\n      let table_row = document.createElement('tr');\n      let dish_name = document.createElement('td');\n      let dish_price = document.createElement('td');\n      let dish_qty = document.createElement('td');\n      let dish_total = document.createElement('td');\n      dish_name.innerHTML = _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu[i].name;\n      dish_price.innerHTML = _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu[i].price\n      dish_qty.innerHTML = _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.cart[names[i]];\n      dish_total.innerHTML = _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.cart[names[i]] * _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu[i].price;\n      sum_total += _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.cart[names[i]] * _page_setup_js__WEBPACK_IMPORTED_MODULE_0__.current_menu[i].price;\n      table_row.appendChild(dish_name);\n      table_row.appendChild(dish_qty);\n      table_row.appendChild(dish_price);\n      table_row.appendChild(dish_total);\n      table.appendChild(table_row);\n    }\n  }\n  let final_row = document.createElement('tr');\n    for(let j = 0;j<3; j++){\n      final_row.appendChild(document.createElement('td'));\n    }\n    let total_price = document.createElement('td');\n    total_price.innerHTML=sum_total;\n    final_row.appendChild(total_price);\n    table.appendChild(final_row);\n}\n\n\n//# sourceURL=webpack://lib/./src/cart.js?");

/***/ }),

/***/ "./src/contact_us.js":
/*!***************************!*\
  !*** ./src/contact_us.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showContact: () => (/* binding */ showContact)\n/* harmony export */ });\nfunction showContact() {\n  console.log(\"conatact button was clicked\");\n}\n\n\n//# sourceURL=webpack://lib/./src/contact_us.js?");

/***/ }),

/***/ "./src/dosa.jpg":
/*!**********************!*\
  !*** ./src/dosa.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c24d2e21bdd24350924.jpg\";\n\n//# sourceURL=webpack://lib/./src/dosa.jpg?");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showHome: () => (/* binding */ showHome)\n/* harmony export */ });\nconst home = \"This is the Home page\";\nconst content_div = document.querySelector(\"#content\");\n\nfunction showHome() {\n  console.log(\"home button was clicked\");\n  content_div.innerHTML = home;\n}\n\n//# sourceURL=webpack://lib/./src/home_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showCart: () => (/* reexport safe */ _cart_js__WEBPACK_IMPORTED_MODULE_4__.showCart),\n/* harmony export */   showContact: () => (/* reexport safe */ _contact_us_js__WEBPACK_IMPORTED_MODULE_3__.showContact),\n/* harmony export */   showHome: () => (/* reexport safe */ _home_page_js__WEBPACK_IMPORTED_MODULE_1__.showHome),\n/* harmony export */   showMenu: () => (/* reexport safe */ _menu_page_js__WEBPACK_IMPORTED_MODULE_2__.showMenu)\n/* harmony export */ });\n/* harmony import */ var _page_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_setup.js */ \"./src/page_setup.js\");\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_page.js */ \"./src/home_page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_page.js */ \"./src/menu_page.js\");\n/* harmony import */ var _contact_us_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_us.js */ \"./src/contact_us.js\");\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart.js */ \"./src/cart.js\");\n\n\n\n\n\n\nconsole.log(\"webpack setup done\");\n// const content_div = document.querySelector(\"#content\");\n// const btn_home = document.querySelector(\"#home\");\n// const btn_menu = document.querySelector(\"#menu\");\n// const btn_contact = document.querySelector(\"#contact\");\n// const btn_cart = document.querySelector(\"#cart\");\n// btn_home.addEventListener('click', showHome())\n// btn_menu.addEventListener('click', showMenu())\n// btn_contact.addEventListener('click', showContact())\n// btn_cart.addEventListener('click', showCart())\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://lib/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showMenu: () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu_style.css */ \"./src/menu_style.css\");\n/* harmony import */ var _page_setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page_setup */ \"./src/page_setup.js\");\n\n\n\nconst content_div = document.querySelector(\"#content\");\n\nfunction showMenu() {\n  content_div.innerHTML = \"\";\n\n  let menu_div = document.createElement(\"div\");\n  menu_div.setAttribute(\"class\",\"items-menu\");\n  content_div.appendChild(menu_div);\n  _page_setup__WEBPACK_IMPORTED_MODULE_1__.current_menu.forEach(el => { \n    menu_div.appendChild(addItemToMenu(el));\n    updateItemInCart(el.name.split(\" \").join(\"-\"), \"0\");\n  })\n}\n\nfunction addItemToMenu(dish){\n\n  let dashJoinedName = dish.name.split(\" \").join(\"-\");\n  /* the outter most container */\n  let item_container = document.createElement('div');\n  item_container.setAttribute('class', \"item-container\");\n  /* plus button */\n  let btn_plus = document.createElement(\"button\");\n  btn_plus.setAttribute('class', \"plus\");\n  btn_plus.innerHTML = \"+\";\n  btn_plus.addEventListener(\"click\", () => {updateItemInCart(menu_item_btn.id, \"+\")});\n  /* minus button */\n  let btn_minus = document.createElement(\"button\");\n  btn_minus.setAttribute('class', \"minus\");\n  btn_minus.innerHTML = \"-\";\n  btn_minus.addEventListener(\"click\", () => {updateItemInCart(menu_item_btn.id, \"-\")});\n  /* central button with details of the dish*/\n  let menu_item_btn = document.createElement(\"button\");\n  menu_item_btn.setAttribute(\"class\", \"item\");\n  menu_item_btn.classList.add(dashJoinedName);\n  menu_item_btn.setAttribute(\"id\", dashJoinedName)\n  menu_item_btn = addImagePriceName(dish, menu_item_btn)\n  \n  item_container.appendChild(btn_minus);\n  item_container.appendChild(menu_item_btn);\n  item_container.appendChild(btn_plus);\n  return item_container;\n}\n\nfunction addImagePriceName(dish, menu_item_btn){\n\n  let item = dish.name;\n  let price = dish.price;\n  let img = dish.image;\n  let dashJoinedName = item.split(\" \").join(\"-\");\n\n  let image_placeholder = document.createElement('div');\n  image_placeholder.setAttribute('class',\"image\");\n  image_placeholder.classList.add(dashJoinedName);\n  let img_el = document.createElement(\"img\");\n  img_el.src = img;\n  image_placeholder.appendChild(img_el);\n\n  let dish_div = document.createElement('div');\n  dish_div.setAttribute(\"class\", \"dish\");\n  dish_div.classList.add(dashJoinedName);\n\n  let btn_item = document.createElement(\"div\");\n  btn_item.setAttribute('class',\"name\")\n  btn_item.classList.add(dashJoinedName);\n  btn_item.innerHTML = item;\n\n  let price_item = document.createElement(\"div\");\n  price_item.classList.add(dashJoinedName);\n  price_item.innerHTML = price;\n  \n  menu_item_btn.appendChild(image_placeholder);\n  dish_div.appendChild(btn_item);\n  dish_div.appendChild(price_item);\n  menu_item_btn.appendChild(dish_div);\n\n  return menu_item_btn;\n}\n\nfunction updateItemInCart(item_id, sign){\n  if (sign === \"+\"){\n    _page_setup__WEBPACK_IMPORTED_MODULE_1__.cart[item_id]++;\n    console.log(`1 more ${item_id} was added to cart`);\n  }else if (sign === \"-\"){\n    if (_page_setup__WEBPACK_IMPORTED_MODULE_1__.cart[item_id]){\n      _page_setup__WEBPACK_IMPORTED_MODULE_1__.cart[item_id]--;\n      console.log(`1 ${item_id} was removed from cart`);\n    }\n    else {\n      console.log(`no more ${item_id} in cart`);\n    }\n  }\n  console.log(_page_setup__WEBPACK_IMPORTED_MODULE_1__.cart) \n  dispalyItemNumberCircle(item_id);\n}\n\nfunction dispalyItemNumberCircle(item_id){\n  let circle = document.querySelector(`#${item_id} .quantity`);\n  if (_page_setup__WEBPACK_IMPORTED_MODULE_1__.cart[item_id]) {\n    if (circle){\n      circle.style.display = \"\";\n      circle.innerHTML = _page_setup__WEBPACK_IMPORTED_MODULE_1__.cart[item_id];\n    }\n    else{\n      let circle = document.createElement('div');\n      circle.setAttribute(\"class\", \"quantity\");\n      circle.innerHTML = _page_setup__WEBPACK_IMPORTED_MODULE_1__.cart[item_id];\n      let el = document.querySelector(`#${item_id}`);\n      el.appendChild(circle);\n    }\n  }else {\n    if(circle){\n      circle.style.display = 'none';\n    }\n  }\n}\n\n//# sourceURL=webpack://lib/./src/menu_page.js?");

/***/ }),

/***/ "./src/menu_style.css":
/*!****************************!*\
  !*** ./src/menu_style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu_style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/menu_style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lib/./src/menu_style.css?");

/***/ }),

/***/ "./src/page_setup.js":
/*!***************************!*\
  !*** ./src/page_setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cart: () => (/* binding */ cart),\n/* harmony export */   current_menu: () => (/* binding */ current_menu)\n/* harmony export */ });\n/* harmony import */ var _dosa_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dosa.jpg */ \"./src/dosa.jpg\");\n/* harmony import */ var _vada_pav_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vada_pav.jpg */ \"./src/vada_pav.jpg\");\n/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pizza.jpg */ \"./src/pizza.jpg\");\n/* harmony import */ var _poha_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poha.jpg */ \"./src/poha.jpg\");\n\n\n\n\n\nclass Dish {\n  constructor(name, price, image_link) {\n    this.name = name\n    this.price = price\n    this.image = image_link\n  }\n}\n\nlet dosa = new Dish(\"Dosa\", 50, _dosa_jpg__WEBPACK_IMPORTED_MODULE_0__);\nlet vadaPav = new Dish(\"Vada Pav\", 15, _vada_pav_jpg__WEBPACK_IMPORTED_MODULE_1__);\nlet pizza = new Dish(\"Pizza Slice\", 35, _pizza_jpg__WEBPACK_IMPORTED_MODULE_2__);\nlet poha = new Dish(\"Poha\", 25, _poha_jpg__WEBPACK_IMPORTED_MODULE_3__);\nlet current_menu = [dosa, vadaPav, pizza, poha];\nlet cart = {};\ncurrent_menu.forEach( dish => {\ncart[dish.name.split(\" \").join(\"-\")] = 0;\n} )\n\n\n\n\n//# sourceURL=webpack://lib/./src/page_setup.js?");

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"035f21f3290a4c825ebd.jpg\";\n\n//# sourceURL=webpack://lib/./src/pizza.jpg?");

/***/ }),

/***/ "./src/poha.jpg":
/*!**********************!*\
  !*** ./src/poha.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6c566c3ace70299a6369.jpg\";\n\n//# sourceURL=webpack://lib/./src/poha.jpg?");

/***/ }),

/***/ "./src/vada_pav.jpg":
/*!**************************!*\
  !*** ./src/vada_pav.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"162daa4dde1bd3d6c7c5.jpg\";\n\n//# sourceURL=webpack://lib/./src/vada_pav.jpg?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	lib = __webpack_exports__;
/******/ 	
/******/ })()
;