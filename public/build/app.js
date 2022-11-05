(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./barrier_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/barrier_controller.js",
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/barrier_controller.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/barrier_controller.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default(context) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, context);
    (0,video_js__WEBPACK_IMPORTED_MODULE_17__["default"])(_this.videoTarget);
    return _this;
  }

  return _createClass(_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);

_defineProperty(_default, "targets", ['video']);



/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _src_Spot__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/Spot */ "./assets/src/Spot.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! fos-router */ "./node_modules/fos-router/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _src_Prediction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/Prediction */ "./assets/src/Prediction.js");
/* harmony import */ var _src_Model_SpotCollection__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/Model/SpotCollection */ "./assets/src/Model/SpotCollection.js");
/* harmony import */ var _src_Event_PredictionEventHandler__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/Event/PredictionEventHandler */ "./assets/src/Event/PredictionEventHandler.js");
/* harmony import */ var _src_Event_SpotEventHandler__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../src/Event/SpotEventHandler */ "./assets/src/Event/SpotEventHandler.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
























function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }










var _canvas = /*#__PURE__*/new WeakMap();

var _spotCollection = /*#__PURE__*/new WeakMap();

var _predictions = /*#__PURE__*/new WeakMap();

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default(context) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, context);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _canvas, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _spotCollection, {
      writable: true,
      value: new _src_Model_SpotCollection__WEBPACK_IMPORTED_MODULE_27__["default"]()
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _predictions, {
      writable: true,
      value: []
    });

    _this.loadSpots();

    _this.spotEventHandler = new _src_Event_SpotEventHandler__WEBPACK_IMPORTED_MODULE_29__["default"](_classPrivateFieldGet(_assertThisInitialized(_this), _spotCollection), _this.getCanvas());
    _this.predictionEventHandler = new _src_Event_PredictionEventHandler__WEBPACK_IMPORTED_MODULE_28__["default"](_classPrivateFieldGet(_assertThisInitialized(_this), _predictions), _this.getCanvas());
    return _this;
  }

  _createClass(_default, [{
    key: "getCanvas",
    value: function getCanvas() {
      var _this2 = this;

      if (!_classPrivateFieldGet(this, _canvas)) {
        _classPrivateFieldSet(this, _canvas, new fabric.Canvas(this.cameraTarget));

        _classPrivateFieldGet(this, _canvas).on('object:modified', function (e) {
          _this2.saveSpots();
        });
      }

      return _classPrivateFieldGet(this, _canvas);
    }
  }, {
    key: "switchMonitoring",
    value: function switchMonitoring(event) {
      switch (event.target.value) {
        case 'spot':
          this.spotEventHandler.activate(this.freeSpotsUrlTarget.value);
          this.predictionEventHandler.deactivate();
          break;

        case 'prediction':
          this.predictionEventHandler.activate(this.predictionsUrlTarget.value);
          this.spotEventHandler.deactivate();
          break;
      }
    }
  }, {
    key: "addSpot",
    value: function addSpot() {
      var spot = _classPrivateFieldGet(this, _spotCollection).add(80, 50, 100, 100);

      this.getCanvas().add(spot);
    }
  }, {
    key: "saveSpots",
    value: function saveSpots() {
      var spotsJson = _classPrivateFieldGet(this, _spotCollection).toJson();

      var request = new Request(fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('spots_list'), {
        method: 'POST',
        body: JSON.stringify(spotsJson)
      });
      fetch(request);
    }
  }, {
    key: "removeSpot",
    value: function removeSpot() {
      var _this3 = this;

      var selectedObject = this.getCanvas().getActiveObject();

      if (selectedObject instanceof _src_Spot__WEBPACK_IMPORTED_MODULE_24__["default"]) {
        _classPrivateFieldGet(this, _spotCollection).remove(selectedObject);

        this.getCanvas().remove(selectedObject);
      }

      if (selectedObject instanceof Array) {
        selectedObject.map(function (object) {
          if (object instanceof _src_Spot__WEBPACK_IMPORTED_MODULE_24__["default"]) {
            _classPrivateFieldGet(_this3, _spotCollection).remove(object);

            _this3.getCanvas().remove(object);
          }
        });
      }

      this.saveSpots();
    }
  }, {
    key: "loadSpots",
    value: function loadSpots() {
      var _this4 = this;

      var request = new Request(fos_router__WEBPACK_IMPORTED_MODULE_25___default().generate('spots_update'), {
        method: 'GET'
      });
      fetch(request).then(function (response) {
        return response.json();
      }).then(function (spotsJson) {
        spotsJson.forEach(function (spotJson) {
          var spot = _classPrivateFieldGet(_this4, _spotCollection).add(spotJson.width, spotJson.height, spotJson.x, spotJson.y);

          _this4.getCanvas().add(spot);
        });
      });
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_22__.Controller);

_defineProperty(_default, "targets", ['camera', 'predictionsUrl', 'freeSpotsUrl']);



/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/src/Event/PredictionEventHandler.js":
/*!****************************************************!*\
  !*** ./assets/src/Event/PredictionEventHandler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PredictionEventHandler)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Prediction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Prediction */ "./assets/src/Prediction.js");
















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _eventSource = /*#__PURE__*/new WeakMap();

var _predictions = /*#__PURE__*/new WeakMap();

var _canvas = /*#__PURE__*/new WeakMap();

var _handleMessage = /*#__PURE__*/new WeakSet();

var PredictionEventHandler = /*#__PURE__*/function () {
  function PredictionEventHandler(_predictions2, canvas) {
    _classCallCheck(this, PredictionEventHandler);

    _classPrivateMethodInitSpec(this, _handleMessage);

    _classPrivateFieldInitSpec(this, _eventSource, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _predictions, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _canvas, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _predictions, _predictions2);

    _classPrivateFieldSet(this, _canvas, canvas);
  }

  _createClass(PredictionEventHandler, [{
    key: "activate",
    value: function activate(url) {
      _classPrivateFieldSet(this, _eventSource, new EventSource(url));

      _classPrivateFieldGet(this, _eventSource).onmessage = _classPrivateMethodGet(this, _handleMessage, _handleMessage2).bind(this);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this = this;

      if (_classPrivateFieldGet(this, _eventSource)) {
        _classPrivateFieldGet(this, _eventSource).close();

        _classPrivateFieldGet(this, _predictions).map(function (prediction) {
          _classPrivateFieldGet(_this, _canvas).remove(prediction);
        });
      }
    }
  }]);

  return PredictionEventHandler;
}();

function _handleMessage2(message) {
  var _this2 = this;

  var predictions = JSON.parse(message.data);

  _classPrivateFieldGet(this, _predictions).map(function (prediction) {
    _classPrivateFieldGet(_this2, _canvas).remove(prediction);
  });

  predictions.map(function (prediction) {
    var predictionRect = new _Prediction__WEBPACK_IMPORTED_MODULE_15__["default"](prediction.confidence.toFixed(2).toString(), prediction.width, prediction.height, prediction.x, prediction.y);

    _classPrivateFieldGet(_this2, _predictions).push(predictionRect);

    _classPrivateFieldGet(_this2, _canvas).sendToBack(predictionRect);
  });
}



/***/ }),

/***/ "./assets/src/Event/SpotEventHandler.js":
/*!**********************************************!*\
  !*** ./assets/src/Event/SpotEventHandler.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpotEventHandler)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Prediction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Prediction */ "./assets/src/Prediction.js");












function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _eventSource = /*#__PURE__*/new WeakMap();

var _spotCollection = /*#__PURE__*/new WeakMap();

var _canvas = /*#__PURE__*/new WeakMap();

var _handleMessage = /*#__PURE__*/new WeakSet();

var SpotEventHandler = /*#__PURE__*/function () {
  function SpotEventHandler(spotCollection, canvas) {
    _classCallCheck(this, SpotEventHandler);

    _classPrivateMethodInitSpec(this, _handleMessage);

    _classPrivateFieldInitSpec(this, _eventSource, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _spotCollection, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _canvas, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _spotCollection, spotCollection);

    _classPrivateFieldSet(this, _canvas, canvas);
  }

  _createClass(SpotEventHandler, [{
    key: "activate",
    value: function activate(url) {
      _classPrivateFieldSet(this, _eventSource, new EventSource(url));

      _classPrivateFieldGet(this, _eventSource).onmessage = _classPrivateMethodGet(this, _handleMessage, _handleMessage2).bind(this);

      _classPrivateFieldGet(this, _spotCollection).getAll().map(function (spot) {
        spot.opacity = 1;
      });

      _classPrivateFieldGet(this, _canvas).renderAll();
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      _classPrivateFieldGet(this, _spotCollection).getAll().map(function (spot) {
        spot.opacity = 0;
      });

      if (_classPrivateFieldGet(this, _eventSource)) {
        _classPrivateFieldGet(this, _eventSource).close();
      }

      _classPrivateFieldGet(this, _canvas).renderAll();
    }
  }]);

  return SpotEventHandler;
}();

function _handleMessage2(message) {
  var freeSpots = JSON.parse(message.data);

  _classPrivateFieldGet(this, _spotCollection).freeSpots(freeSpots);

  _classPrivateFieldGet(this, _canvas).renderAll();
}



/***/ }),

/***/ "./assets/src/Factory/RectangleFactory.js":
/*!************************************************!*\
  !*** ./assets/src/Factory/RectangleFactory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RectangleFactory)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RectangleFactory = /*#__PURE__*/function () {
  function RectangleFactory() {
    _classCallCheck(this, RectangleFactory);
  }

  _createClass(RectangleFactory, null, [{
    key: "create",
    value:
    /**
     * @param {string} title
     * @param {int} width
     * @param {int} height
     * @param {string} color
     * @return fabric.Object[]
     */
    function create(title, width, height) {
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'red';
      var rect = new fabric.Rect({
        top: 0,
        left: 0,
        width: width,
        height: height,
        stroke: color,
        fill: 'transparent',
        strokeWidth: 1
      });
      var text = new fabric.Text(title, {
        left: 0,
        top: 0,
        stroke: 'white',
        backgroundColor: color,
        fontSize: 15
      });
      return [rect, text];
    }
  }]);

  return RectangleFactory;
}();



/***/ }),

/***/ "./assets/src/Model/SpotCollection.js":
/*!********************************************!*\
  !*** ./assets/src/Model/SpotCollection.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpotCollection)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Spot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Spot */ "./assets/src/Spot.js");














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _spots = /*#__PURE__*/new WeakMap();

var SpotCollection = /*#__PURE__*/function () {
  function SpotCollection() {
    _classCallCheck(this, SpotCollection);

    _classPrivateFieldInitSpec(this, _spots, {
      writable: true,
      value: []
    });
  }

  _createClass(SpotCollection, [{
    key: "add",
    value:
    /**
     * @param {int} width
     * @param {int} height
     * @param {int} left
     * @param {int} top
     * @return {Spot}
     */
    function add(width, height, left, top) {
      var spot = new _Spot__WEBPACK_IMPORTED_MODULE_13__["default"](_classPrivateFieldGet(this, _spots).length + 1, width, height, left, top);

      _classPrivateFieldGet(this, _spots).push(spot);

      return spot;
    }
    /**
     *
     * @param {int} number
     * @return {Spot}
     */

  }, {
    key: "get",
    value: function get(number) {
      return _classPrivateFieldGet(this, _spots)[number - 1];
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return _classPrivateFieldGet(this, _spots);
    }
  }, {
    key: "toJson",
    value: function toJson() {
      return _classPrivateFieldGet(this, _spots).map(function (spot) {
        return spot.toJson();
      });
    }
    /**
     * @param {Spot} spot
     */

  }, {
    key: "remove",
    value: function remove(spot) {
      _classPrivateFieldSet(this, _spots, _classPrivateFieldGet(this, _spots).filter(function (s) {
        return s !== spot;
      }));

      _classPrivateFieldGet(this, _spots).map(function (s, index) {
        return s.setNumber(index + 1);
      });
    }
    /**
     * @param {int[]} freeSpots
     */

  }, {
    key: "freeSpots",
    value: function freeSpots(_freeSpots) {
      _classPrivateFieldGet(this, _spots).map(function (spot) {
        if (_freeSpots.includes(spot.number)) {
          spot.free();
        } else {
          spot.occupy();
        }
      });
    }
  }]);

  return SpotCollection;
}();



/***/ }),

/***/ "./assets/src/Prediction.js":
/*!**********************************!*\
  !*** ./assets/src/Prediction.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Prediction)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Factory_RectangleFactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Factory/RectangleFactory */ "./assets/src/Factory/RectangleFactory.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Prediction = /*#__PURE__*/function (_fabric$Group) {
  _inherits(Prediction, _fabric$Group);

  var _super = _createSuper(Prediction);

  /**
   * @param {string} text
   * @param {int} width
   * @param {int} height
   * @param {int} left
   * @param {int} top
   */
  function Prediction(text, width, height, left, top) {
    var _this;

    _classCallCheck(this, Prediction);

    var elements = _Factory_RectangleFactory__WEBPACK_IMPORTED_MODULE_16__["default"].create(text, width, height, 'green');
    _this = _super.call(this, elements, {
      left: left,
      top: top,
      width: width,
      height: height
    });

    _defineProperty(_assertThisInitialized(_this), "text", void 0);

    _defineProperty(_assertThisInitialized(_this), "rectangle", void 0);

    _this.text = text;
    _this.hoverCursor = 'auto';
    _this.selectable = false;
    return _this;
  }

  return _createClass(Prediction);
}(fabric.Group);



/***/ }),

/***/ "./assets/src/Spot.js":
/*!****************************!*\
  !*** ./assets/src/Spot.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Spot)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Factory_RectangleFactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Factory/RectangleFactory */ "./assets/src/Factory/RectangleFactory.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }






















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _freeColor = /*#__PURE__*/new WeakMap();

var _occupyColor = /*#__PURE__*/new WeakMap();

var _getText = /*#__PURE__*/new WeakSet();

var _getRectangle = /*#__PURE__*/new WeakSet();

var Spot = /*#__PURE__*/function (_fabric$Group) {
  _inherits(Spot, _fabric$Group);

  var _super = _createSuper(Spot);

  /**
   * @param {int} number
   * @param {int} width
   * @param {int} height
   * @param {int} left
   * @param {int} top
   */
  function Spot(number, width, height, left, top) {
    var _this;

    _classCallCheck(this, Spot);

    var elements = _Factory_RectangleFactory__WEBPACK_IMPORTED_MODULE_21__["default"].create(number.toString(), width, height, 'red');
    _this = _super.call(this, elements, {
      left: left,
      top: top,
      width: width,
      height: height
    });

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _getRectangle);

    _classPrivateMethodInitSpec(_assertThisInitialized(_this), _getText);

    _defineProperty(_assertThisInitialized(_this), "number", void 0);

    _defineProperty(_assertThisInitialized(_this), "rectangle", void 0);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _freeColor, {
      writable: true,
      value: 'blue'
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _occupyColor, {
      writable: true,
      value: 'red'
    });

    _this.controls.mtr.visible = false;
    _this.number = number;
    return _this;
  }

  _createClass(Spot, [{
    key: "occupy",
    value: function occupy() {
      _classPrivateMethodGet(this, _getRectangle, _getRectangle2).call(this).set('stroke', _classPrivateFieldGet(this, _occupyColor));

      _classPrivateMethodGet(this, _getText, _getText2).call(this).set('backgroundColor', _classPrivateFieldGet(this, _occupyColor));
    }
  }, {
    key: "free",
    value: function free() {
      _classPrivateMethodGet(this, _getRectangle, _getRectangle2).call(this).set('stroke', _classPrivateFieldGet(this, _freeColor));

      _classPrivateMethodGet(this, _getText, _getText2).call(this).set('backgroundColor', _classPrivateFieldGet(this, _freeColor));
    }
    /**
     * @param {int} number
     */

  }, {
    key: "setNumber",
    value: function setNumber(number) {
      this.number = number;

      _classPrivateMethodGet(this, _getText, _getText2).call(this).set('text', number.toString());
    }
    /**
     * @return {fabric.Text}
     */

  }, {
    key: "toJson",
    value: function toJson() {
      var rectangle = _classPrivateMethodGet(this, _getRectangle, _getRectangle2).call(this);

      return {
        x: Math.round(this.left),
        y: Math.round(this.top),
        width: Math.round(this.getScaledWidth()),
        height: Math.round(this.getScaledHeight())
      };
    }
  }]);

  return Spot;
}(fabric.Group);

function _getText2() {
  return this.getObjects('text')[0];
}

function _getRectangle2() {
  return this.getObjects('rect')[0];
}



/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fos-router */ "./node_modules/fos-router/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _var_www_html_var_cache_fosRoutes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./var/cache/fosRoutes.json */ "./var/cache/fosRoutes.json");
fos_router__WEBPACK_IMPORTED_MODULE_0___default().setRoutingData(_var_www_html_var_cache_fosRoutes_json__WEBPACK_IMPORTED_MODULE_1__);

/***/ }),

/***/ "?7b10":
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?6799":
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9748":
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?34aa":
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./var/cache/fosRoutes.json":
/*!**********************************!*\
  !*** ./var/cache/fosRoutes.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"barrier":{"tokens":[["text","/barrier"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"spots_update":{"tokens":[["text","/spots"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"spots_list":{"tokens":[["text","/spots"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-19226b"], () => (__webpack_exec__("./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksbUJBQVVoQixNQUFWLEVBQWtCO01BQ2QsS0FBS0EsTUFBTCxHQUFjQSxNQUFkOztNQUNBLDZEQUFnQmdCLEdBQWhCLENBQW9CLE1BQXBCLEVBQTRCaEIsTUFBTSxDQUFDdkIsUUFBUCxFQUE1QjtJQUNIO0lBRUQ7QUFDSjtBQUNBOzs7O1dBYUksa0JBQVM7TUFDTCxJQUFNd0MsU0FBUywwQkFBRyxJQUFILHNDQUFHLElBQUgsQ0FBZjs7TUFDQSxPQUFPO1FBQ0gzRCxDQUFDLEVBQUU0RCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLNUIsSUFBaEIsQ0FEQTtRQUVIaEMsQ0FBQyxFQUFFMkQsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSzdCLEdBQWhCLENBRkE7UUFHSGxDLEtBQUssRUFBRThELElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtDLGNBQUwsRUFBWCxDQUhKO1FBSUgvRCxNQUFNLEVBQUU2RCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLRSxlQUFMLEVBQVg7TUFKTCxDQUFQO0lBTUg7Ozs7RUFqRTZCckcsTUFBTSxDQUFDNEY7O3FCQTZDMUI7RUFDUCxPQUFPLEtBQUtVLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsQ0FBUDtBQUNIOzswQkFNZTtFQUNaLE9BQU8sS0FBS0EsVUFBTCxDQUFnQixNQUFoQixFQUF3QixDQUF4QixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDMURMOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZGLGdFQUFzQixDQUFDLG1FQUFNOzs7Ozs7Ozs7O0FDQTFIOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2JhcnJpZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9FdmVudC9QcmVkaWN0aW9uRXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvRXZlbnQvU3BvdEV2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL0ZhY3RvcnkvUmVjdGFuZ2xlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL01vZGVsL1Nwb3RDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvUHJlZGljdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL1Nwb3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIiwid2VicGFjazovLy8iLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvaHRtbC9ub2RlX21vZHVsZXMvZmFicmljL2Rpc3R8anNkb20iLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvaHRtbC9ub2RlX21vZHVsZXMvZmFicmljL2Rpc3R8anNkb20vbGliL2pzZG9tL2xpdmluZy9nZW5lcmF0ZWQvdXRpbHMiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8L3Zhci93d3cvaHRtbC9ub2RlX21vZHVsZXMvZmFicmljL2Rpc3R8anNkb20vbGliL2pzZG9tL3V0aWxzIiwid2VicGFjazovLy9pZ25vcmVkfC92YXIvd3d3L2h0bWwvbm9kZV9tb2R1bGVzL2dsb2JhbHxtaW4tZG9jdW1lbnQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2JhcnJpZXJfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2JhcnJpZXJfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7Q29udHJvbGxlcn0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuaW1wb3J0IHZpZGVvanMgZnJvbSAndmlkZW8uanMnO1xyXG5pbXBvcnQgXCJ2aWRlby5qcy9kaXN0L3ZpZGVvLWpzLmNzc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ3ZpZGVvJ11cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdmlkZW9qcyh0aGlzLnZpZGVvVGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtDb250cm9sbGVyfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5pbXBvcnQgJ2ZhYnJpYyc7XHJcbmltcG9ydCBTcG90IGZyb20gXCIuLi9zcmMvU3BvdFwiO1xyXG5pbXBvcnQgUm91dGluZyBmcm9tIFwiZm9zLXJvdXRlclwiO1xyXG5pbXBvcnQgUHJlZGljdGlvbiBmcm9tIFwiLi4vc3JjL1ByZWRpY3Rpb25cIjtcclxuaW1wb3J0IFNwb3RDb2xsZWN0aW9uIGZyb20gXCIuLi9zcmMvTW9kZWwvU3BvdENvbGxlY3Rpb25cIjtcclxuaW1wb3J0IFByZWRpY3Rpb25FdmVudEhhbmRsZXIgZnJvbSBcIi4uL3NyYy9FdmVudC9QcmVkaWN0aW9uRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCBTcG90RXZlbnRIYW5kbGVyIGZyb20gXCIuLi9zcmMvRXZlbnQvU3BvdEV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gWydjYW1lcmEnLCAncHJlZGljdGlvbnNVcmwnLCAnZnJlZVNwb3RzVXJsJyBdXHJcbiAgICAjY2FudmFzID0gbnVsbDtcclxuICAgICNzcG90Q29sbGVjdGlvbiA9IG5ldyBTcG90Q29sbGVjdGlvbigpO1xyXG4gICAgI3ByZWRpY3Rpb25zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMubG9hZFNwb3RzKCk7XHJcbiAgICAgICAgdGhpcy5zcG90RXZlbnRIYW5kbGVyID0gbmV3IFNwb3RFdmVudEhhbmRsZXIodGhpcy4jc3BvdENvbGxlY3Rpb24sIHRoaXMuZ2V0Q2FudmFzKCkpO1xyXG4gICAgICAgIHRoaXMucHJlZGljdGlvbkV2ZW50SGFuZGxlciA9IG5ldyBQcmVkaWN0aW9uRXZlbnRIYW5kbGVyKHRoaXMuI3ByZWRpY3Rpb25zLCB0aGlzLmdldENhbnZhcygpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0Q2FudmFzKCkge1xyXG4gICAgICAgIGlmICghdGhpcy4jY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2NhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHRoaXMuY2FtZXJhVGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy4jY2FudmFzLm9uKCdvYmplY3Q6bW9kaWZpZWQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlU3BvdHMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiNjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoTW9uaXRvcmluZyhldmVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Nwb3QnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcG90RXZlbnRIYW5kbGVyLmFjdGl2YXRlKHRoaXMuZnJlZVNwb3RzVXJsVGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbkV2ZW50SGFuZGxlci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAncHJlZGljdGlvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZWRpY3Rpb25FdmVudEhhbmRsZXIuYWN0aXZhdGUodGhpcy5wcmVkaWN0aW9uc1VybFRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RFdmVudEhhbmRsZXIuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkU3BvdCgpIHtcclxuICAgICAgICBjb25zdCBzcG90ID0gdGhpcy4jc3BvdENvbGxlY3Rpb24uYWRkKDgwLCA1MCwgMTAwLCAxMDApO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2FudmFzKCkuYWRkKHNwb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTcG90cygpIHtcclxuICAgICAgICBjb25zdCBzcG90c0pzb24gPSB0aGlzLiNzcG90Q29sbGVjdGlvbi50b0pzb24oKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoUm91dGluZy5nZW5lcmF0ZSgnc3BvdHNfbGlzdCcpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzcG90c0pzb24pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZldGNoKHJlcXVlc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNwb3QoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSB0aGlzLmdldENhbnZhcygpLmdldEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE9iamVjdCBpbnN0YW5jZW9mIFNwb3QpIHtcclxuICAgICAgICAgICAgdGhpcy4jc3BvdENvbGxlY3Rpb24ucmVtb3ZlKHNlbGVjdGVkT2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDYW52YXMoKS5yZW1vdmUoc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZE9iamVjdC5tYXAob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBTcG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jc3BvdENvbGxlY3Rpb24ucmVtb3ZlKG9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDYW52YXMoKS5yZW1vdmUob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zYXZlU3BvdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3BvdHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFJvdXRpbmcuZ2VuZXJhdGUoJ3Nwb3RzX3VwZGF0ZScpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oc3BvdHNKc29uID0+IHtcclxuICAgICAgICAgICAgc3BvdHNKc29uLmZvckVhY2goKHNwb3RKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcG90ID0gdGhpcy4jc3BvdENvbGxlY3Rpb24uYWRkKHNwb3RKc29uLndpZHRoLCBzcG90SnNvbi5oZWlnaHQsIHNwb3RKc29uLngsIHNwb3RKc29uLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDYW52YXMoKS5hZGQoc3BvdClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7IFxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuKGp8dClzeD8kL1xyXG4pKTtcclxuIiwiaW1wb3J0IFByZWRpY3Rpb24gZnJvbSBcIi4uL1ByZWRpY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWRpY3Rpb25FdmVudEhhbmRsZXIge1xyXG4gICAgI2V2ZW50U291cmNlID0gbnVsbDtcclxuICAgICNwcmVkaWN0aW9ucztcclxuICAgICNjYW52YXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJlZGljdGlvbnMsIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuI3ByZWRpY3Rpb25zID0gcHJlZGljdGlvbnM7XHJcbiAgICAgICAgdGhpcy4jY2FudmFzID0gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKHVybCkge1xyXG4gICAgICAgIHRoaXMuI2V2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybClcclxuICAgICAgICB0aGlzLiNldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSB0aGlzLiNoYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy4jZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy4jZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy4jcHJlZGljdGlvbnMubWFwKHByZWRpY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4jY2FudmFzLnJlbW92ZShwcmVkaWN0aW9uKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2hhbmRsZU1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IHByZWRpY3Rpb25zID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuI3ByZWRpY3Rpb25zLm1hcChwcmVkaWN0aW9uID0+IHtcclxuICAgICAgICAgICAgdGhpcy4jY2FudmFzLnJlbW92ZShwcmVkaWN0aW9uKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByZWRpY3Rpb25zLm1hcChwcmVkaWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlZGljdGlvblJlY3QgPSBuZXcgUHJlZGljdGlvbihwcmVkaWN0aW9uLmNvbmZpZGVuY2UudG9GaXhlZCgyKS50b1N0cmluZygpLCBwcmVkaWN0aW9uLndpZHRoLCBwcmVkaWN0aW9uLmhlaWdodCwgcHJlZGljdGlvbi54LCBwcmVkaWN0aW9uLnkpO1xyXG4gICAgICAgICAgICB0aGlzLiNwcmVkaWN0aW9ucy5wdXNoKHByZWRpY3Rpb25SZWN0KTtcclxuICAgICAgICAgICAgdGhpcy4jY2FudmFzLnNlbmRUb0JhY2socHJlZGljdGlvblJlY3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFByZWRpY3Rpb24gZnJvbSBcIi4uL1ByZWRpY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwb3RFdmVudEhhbmRsZXIge1xyXG4gICAgI2V2ZW50U291cmNlID0gbnVsbDtcclxuICAgICNzcG90Q29sbGVjdGlvbjtcclxuICAgICNjYW52YXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHNwb3RDb2xsZWN0aW9uLCBjYW52YXMpIHtcclxuICAgICAgICB0aGlzLiNzcG90Q29sbGVjdGlvbiA9IHNwb3RDb2xsZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuI2NhbnZhcyA9IGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSh1cmwpIHtcclxuICAgICAgICB0aGlzLiNldmVudFNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSh1cmwpXHJcbiAgICAgICAgdGhpcy4jZXZlbnRTb3VyY2Uub25tZXNzYWdlID0gdGhpcy4jaGFuZGxlTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuI3Nwb3RDb2xsZWN0aW9uLmdldEFsbCgpLm1hcChzcG90ID0+IHtcclxuICAgICAgICAgICAgc3BvdC5vcGFjaXR5PSAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuI2NhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHRoaXMuI3Nwb3RDb2xsZWN0aW9uLmdldEFsbCgpLm1hcChzcG90ID0+IHtcclxuICAgICAgICAgICAgc3BvdC5vcGFjaXR5PSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHRoaXMuI2V2ZW50U291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI2V2ZW50U291cmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI2NhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAjaGFuZGxlTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgZnJlZVNwb3RzID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuI3Nwb3RDb2xsZWN0aW9uLmZyZWVTcG90cyhmcmVlU3BvdHMpO1xyXG4gICAgICAgIHRoaXMuI2NhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGVGYWN0b3J5e1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcclxuICAgICAqIEBwYXJhbSB7aW50fSB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGhlaWdodFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXHJcbiAgICAgKiBAcmV0dXJuIGZhYnJpYy5PYmplY3RbXVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY3JlYXRlKHRpdGxlLCB3aWR0aCwgaGVpZ2h0LGNvbG9yID0gJ3JlZCcpe1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgZmFicmljLlJlY3Qoe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIHN0cm9rZTogY29sb3IsXHJcbiAgICAgICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgZmFicmljLlRleHQodGl0bGUsIHtcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBzdHJva2U6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtyZWN0LCB0ZXh0XTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3BvdCBmcm9tIFwiLi4vU3BvdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdENvbGxlY3Rpb257XHJcbiAgICAvKipcclxuICAgICAqIEB0eXBlIFNwb3RbXVxyXG4gICAgICovXHJcbiAgICAjc3BvdHMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7aW50fSB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGhlaWdodFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGxlZnRcclxuICAgICAqIEBwYXJhbSB7aW50fSB0b3BcclxuICAgICAqIEByZXR1cm4ge1Nwb3R9XHJcbiAgICAgKi9cclxuICAgIGFkZCh3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3ApIHtcclxuICAgICAgICBjb25zdCBzcG90ID0gbmV3IFNwb3QodGhpcy4jc3BvdHMubGVuZ3RoICsgMSwgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wKTtcclxuICAgICAgICB0aGlzLiNzcG90cy5wdXNoKHNwb3QpO1xyXG4gICAgICAgIHJldHVybiBzcG90O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7aW50fSBudW1iZXJcclxuICAgICAqIEByZXR1cm4ge1Nwb3R9XHJcbiAgICAgKi9cclxuICAgIGdldChudW1iZXIpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNzcG90c1tudW1iZXIgLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Nwb3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSnNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc3BvdHMubWFwKHNwb3QgPT4gc3BvdC50b0pzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1Nwb3R9IHNwb3RcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlKHNwb3Qpe1xyXG4gICAgICAgIHRoaXMuI3Nwb3RzID0gdGhpcy4jc3BvdHMuZmlsdGVyKHMgPT4gcyAhPT0gc3BvdCk7XHJcbiAgICAgICAgdGhpcy4jc3BvdHMubWFwKChzLCBpbmRleCkgPT4gcy5zZXROdW1iZXIoaW5kZXggKyAxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ludFtdfSBmcmVlU3BvdHNcclxuICAgICAqL1xyXG4gICAgZnJlZVNwb3RzKGZyZWVTcG90cykge1xyXG4gICAgICAgIHRoaXMuI3Nwb3RzLm1hcChzcG90ID0+IHtcclxuICAgICAgICAgICAgaWYoZnJlZVNwb3RzLmluY2x1ZGVzKHNwb3QubnVtYmVyKSl7XHJcbiAgICAgICAgICAgICAgICBzcG90LmZyZWUoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzcG90Lm9jY3VweSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlY3RhbmdsZUZhY3RvcnkgZnJvbSBcIi4vRmFjdG9yeS9SZWN0YW5nbGVGYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVkaWN0aW9uIGV4dGVuZHMgZmFicmljLkdyb3Vwe1xyXG4gICAgdGV4dDtcclxuICAgIHJlY3RhbmdsZTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcclxuICAgICAqIEBwYXJhbSB7aW50fSB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGhlaWdodFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGxlZnRcclxuICAgICAqIEBwYXJhbSB7aW50fSB0b3BcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGV4dCwgIHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcCl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBSZWN0YW5nbGVGYWN0b3J5LmNyZWF0ZSh0ZXh0LCB3aWR0aCwgaGVpZ2h0LCAnZ3JlZW4nKTtcclxuICAgICAgICBzdXBlcihlbGVtZW50cywge1xyXG4gICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuaG92ZXJDdXJzb3IgPSAnYXV0byc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICdmYWJyaWMnO1xyXG5pbXBvcnQgUmVjdGFuZ2xlRmFjdG9yeSBmcm9tIFwiLi9GYWN0b3J5L1JlY3RhbmdsZUZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwb3QgZXh0ZW5kcyBmYWJyaWMuR3JvdXAge1xyXG4gICAgbnVtYmVyO1xyXG4gICAgcmVjdGFuZ2xlO1xyXG4gICAgI2ZyZWVDb2xvciA9ICdibHVlJztcclxuICAgICNvY2N1cHlDb2xvciA9ICdyZWQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gd2lkdGhcclxuICAgICAqIEBwYXJhbSB7aW50fSBoZWlnaHRcclxuICAgICAqIEBwYXJhbSB7aW50fSBsZWZ0XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gdG9wXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG51bWJlciwgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBSZWN0YW5nbGVGYWN0b3J5LmNyZWF0ZShudW1iZXIudG9TdHJpbmcoKSwgd2lkdGgsIGhlaWdodCwgJ3JlZCcpO1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRzLCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMubXRyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBvY2N1cHkoKXtcclxuICAgICAgICB0aGlzLiNnZXRSZWN0YW5nbGUoKS5zZXQoJ3N0cm9rZScsdGhpcy4jb2NjdXB5Q29sb3IpO1xyXG4gICAgICAgIHRoaXMuI2dldFRleHQoKS5zZXQoJ2JhY2tncm91bmRDb2xvcicsdGhpcy4jb2NjdXB5Q29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZyZWUoKSB7XHJcbiAgICAgICAgdGhpcy4jZ2V0UmVjdGFuZ2xlKCkuc2V0KCdzdHJva2UnLHRoaXMuI2ZyZWVDb2xvcik7XHJcbiAgICAgICAgdGhpcy4jZ2V0VGV4dCgpLnNldCgnYmFja2dyb3VuZENvbG9yJyx0aGlzLiNmcmVlQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtpbnR9IG51bWJlclxyXG4gICAgICovXHJcbiAgICBzZXROdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XHJcbiAgICAgICAgdGhpcy4jZ2V0VGV4dCgpLnNldCgndGV4dCcsIG51bWJlci50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge2ZhYnJpYy5UZXh0fVxyXG4gICAgICovXHJcbiAgICAjZ2V0VGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RzKCd0ZXh0JylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2ZhYnJpYy5SZWN0fVxyXG4gICAgICovXHJcbiAgICAjZ2V0UmVjdGFuZ2xlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdHMoJ3JlY3QnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICB0b0pzb24oKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdGFuZ2xlID0gdGhpcy4jZ2V0UmVjdGFuZ2xlKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZCh0aGlzLmxlZnQpLFxyXG4gICAgICAgICAgICB5OiBNYXRoLnJvdW5kKHRoaXMudG9wKSxcclxuICAgICAgICAgICAgd2lkdGg6IE1hdGgucm91bmQodGhpcy5nZXRTY2FsZWRXaWR0aCgpKSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHRoaXMuZ2V0U2NhbGVkSGVpZ2h0KCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7aW1wb3J0IHJvdXRlcyBmcm9tIFwiL3Zhci93d3cvaHRtbC92YXIvY2FjaGUvZm9zUm91dGVzLmpzb25cIjtSb3V0aW5nLnNldFJvdXRpbmdEYXRhKHJvdXRlcyk7IiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJ2aWRlb2pzIiwiY29udGV4dCIsInZpZGVvVGFyZ2V0IiwiU3BvdCIsIlJvdXRpbmciLCJQcmVkaWN0aW9uIiwiU3BvdENvbGxlY3Rpb24iLCJQcmVkaWN0aW9uRXZlbnRIYW5kbGVyIiwiU3BvdEV2ZW50SGFuZGxlciIsImxvYWRTcG90cyIsInNwb3RFdmVudEhhbmRsZXIiLCJnZXRDYW52YXMiLCJwcmVkaWN0aW9uRXZlbnRIYW5kbGVyIiwiZmFicmljIiwiQ2FudmFzIiwiY2FtZXJhVGFyZ2V0Iiwib24iLCJlIiwic2F2ZVNwb3RzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGl2YXRlIiwiZnJlZVNwb3RzVXJsVGFyZ2V0IiwiZGVhY3RpdmF0ZSIsInByZWRpY3Rpb25zVXJsVGFyZ2V0Iiwic3BvdCIsImFkZCIsInNwb3RzSnNvbiIsInRvSnNvbiIsInJlcXVlc3QiLCJSZXF1ZXN0IiwiZ2VuZXJhdGUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwic2VsZWN0ZWRPYmplY3QiLCJnZXRBY3RpdmVPYmplY3QiLCJyZW1vdmUiLCJBcnJheSIsIm1hcCIsIm9iamVjdCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmb3JFYWNoIiwic3BvdEpzb24iLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJwcmVkaWN0aW9ucyIsImNhbnZhcyIsInVybCIsIkV2ZW50U291cmNlIiwib25tZXNzYWdlIiwiYmluZCIsImNsb3NlIiwicHJlZGljdGlvbiIsIm1lc3NhZ2UiLCJwYXJzZSIsImRhdGEiLCJwcmVkaWN0aW9uUmVjdCIsImNvbmZpZGVuY2UiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJwdXNoIiwic2VuZFRvQmFjayIsInNwb3RDb2xsZWN0aW9uIiwiZ2V0QWxsIiwib3BhY2l0eSIsInJlbmRlckFsbCIsImZyZWVTcG90cyIsIlJlY3RhbmdsZUZhY3RvcnkiLCJ0aXRsZSIsImNvbG9yIiwicmVjdCIsIlJlY3QiLCJ0b3AiLCJsZWZ0Iiwic3Ryb2tlIiwiZmlsbCIsInN0cm9rZVdpZHRoIiwidGV4dCIsIlRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImxlbmd0aCIsIm51bWJlciIsImZpbHRlciIsInMiLCJpbmRleCIsInNldE51bWJlciIsImluY2x1ZGVzIiwiZnJlZSIsIm9jY3VweSIsImVsZW1lbnRzIiwiY3JlYXRlIiwiaG92ZXJDdXJzb3IiLCJzZWxlY3RhYmxlIiwiR3JvdXAiLCJjb250cm9scyIsIm10ciIsInZpc2libGUiLCJzZXQiLCJyZWN0YW5nbGUiLCJNYXRoIiwicm91bmQiLCJnZXRTY2FsZWRXaWR0aCIsImdldFNjYWxlZEhlaWdodCIsImdldE9iamVjdHMiXSwic291cmNlUm9vdCI6IiJ9