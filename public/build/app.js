(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
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

/***/ "./var/cache/fosRoutes.json":
/*!**********************************!*\
  !*** ./var/cache/fosRoutes.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"base_url":"","routes":{"spots_update":{"tokens":[["text","/spots"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"spots_list":{"tokens":[["text","/spots"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":""}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-b0dbb8"], () => (__webpack_exec__("./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxpRUFBZTtBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0VBUUksa0JBQVlPLE9BQVosRUFBcUI7SUFBQTs7SUFBQTs7SUFDakIsMEJBQU1BLE9BQU47O0lBRGlCO01BQUE7TUFBQSxPQUpYO0lBSVc7O0lBQUE7TUFBQTtNQUFBLE9BSEgsSUFBSUgsa0VBQUo7SUFHRzs7SUFBQTtNQUFBO01BQUEsT0FGTjtJQUVNOztJQUVqQixNQUFLSSxTQUFMOztJQUNBLE1BQUtDLGdCQUFMLEdBQXdCLElBQUlILG9FQUFKLHdFQUEyQyxNQUFLSSxTQUFMLEVBQTNDLENBQXhCO0lBQ0EsTUFBS0Msc0JBQUwsR0FBOEIsSUFBSU4sMEVBQUoscUVBQThDLE1BQUtLLFNBQUwsRUFBOUMsQ0FBOUI7SUFKaUI7RUFLcEI7Ozs7V0FHRCxxQkFBWTtNQUFBOztNQUNSLElBQUksdUJBQUMsSUFBRCxVQUFKLEVBQW1CO1FBQ2YscUNBQWUsSUFBSUUsTUFBTSxDQUFDQyxNQUFYLENBQWtCLEtBQUtDLFlBQXZCLENBQWY7O1FBQ0EscUNBQWFDLEVBQWIsQ0FBZ0IsaUJBQWhCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztVQUN0QyxNQUFJLENBQUNDLFNBQUw7UUFDSCxDQUZEO01BR0g7O01BQ0QsNkJBQU8sSUFBUDtJQUNIOzs7V0FFRCwwQkFBaUJDLEtBQWpCLEVBQXdCO01BQ3BCLFFBQVFBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFyQjtRQUNJLEtBQUssTUFBTDtVQUNJLEtBQUtYLGdCQUFMLENBQXNCWSxRQUF0QixDQUErQixLQUFLQyxrQkFBTCxDQUF3QkYsS0FBdkQ7VUFDQSxLQUFLVCxzQkFBTCxDQUE0QlksVUFBNUI7VUFDQTs7UUFDSixLQUFLLFlBQUw7VUFDSSxLQUFLWixzQkFBTCxDQUE0QlUsUUFBNUIsQ0FBcUMsS0FBS0csb0JBQUwsQ0FBMEJKLEtBQS9EO1VBQ0EsS0FBS1gsZ0JBQUwsQ0FBc0JjLFVBQXRCO1VBQ0E7TUFSUjtJQVVIOzs7V0FDRCxtQkFBVTtNQUNOLElBQU1FLElBQUksR0FBRyw2Q0FBcUJDLEdBQXJCLENBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLEdBQWpDLEVBQXNDLEdBQXRDLENBQWI7O01BQ0EsS0FBS2hCLFNBQUwsR0FBaUJnQixHQUFqQixDQUFxQkQsSUFBckI7SUFDSDs7O1dBRUQscUJBQVk7TUFDUixJQUFNRSxTQUFTLEdBQUcsNkNBQXFCQyxNQUFyQixFQUFsQjs7TUFDQSxJQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZNUIsMkRBQUEsQ0FBaUIsWUFBakIsQ0FBWixFQUE0QztRQUN4RDhCLE1BQU0sRUFBRSxNQURnRDtRQUV4REMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsU0FBZjtNQUZrRCxDQUE1QyxDQUFoQjtNQUlBUyxLQUFLLENBQUNQLE9BQUQsQ0FBTDtJQUNIOzs7V0FFRCxzQkFBYTtNQUFBOztNQUNULElBQU1RLGNBQWMsR0FBRyxLQUFLM0IsU0FBTCxHQUFpQjRCLGVBQWpCLEVBQXZCOztNQUNBLElBQUlELGNBQWMsWUFBWXBDLGtEQUE5QixFQUFvQztRQUNoQyw2Q0FBcUJzQyxNQUFyQixDQUE0QkYsY0FBNUI7O1FBQ0EsS0FBSzNCLFNBQUwsR0FBaUI2QixNQUFqQixDQUF3QkYsY0FBeEI7TUFDSDs7TUFDRCxJQUFJQSxjQUFjLFlBQVlHLEtBQTlCLEVBQXFDO1FBQ2pDSCxjQUFjLENBQUNJLEdBQWYsQ0FBbUIsVUFBQUMsTUFBTSxFQUFJO1VBQ3pCLElBQUlBLE1BQU0sWUFBWXpDLGtEQUF0QixFQUE0QjtZQUN4Qiw0QkFBSSxrQkFBSixDQUFxQnNDLE1BQXJCLENBQTRCRyxNQUE1Qjs7WUFDQSxNQUFJLENBQUNoQyxTQUFMLEdBQWlCNkIsTUFBakIsQ0FBd0JHLE1BQXhCO1VBQ0g7UUFDSixDQUxEO01BTUg7O01BQ0QsS0FBS3pCLFNBQUw7SUFDSDs7O1dBRUQscUJBQVk7TUFBQTs7TUFDUixJQUFNWSxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZNUIsMkRBQUEsQ0FBaUIsY0FBakIsQ0FBWixFQUE4QztRQUMxRDhCLE1BQU0sRUFBRTtNQURrRCxDQUE5QyxDQUFoQjtNQUdBSSxLQUFLLENBQUNQLE9BQUQsQ0FBTCxDQUFlYyxJQUFmLENBQW9CLFVBQUFDLFFBQVE7UUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQVQsRUFBSjtNQUFBLENBQTVCLEVBQWlERixJQUFqRCxDQUFzRCxVQUFBaEIsU0FBUyxFQUFJO1FBQy9EQSxTQUFTLENBQUNtQixPQUFWLENBQWtCLFVBQUNDLFFBQUQsRUFBYztVQUM1QixJQUFNdEIsSUFBSSxHQUFHLDRCQUFJLGtCQUFKLENBQXFCQyxHQUFyQixDQUF5QnFCLFFBQVEsQ0FBQ0MsS0FBbEMsRUFBeUNELFFBQVEsQ0FBQ0UsTUFBbEQsRUFBMERGLFFBQVEsQ0FBQ0csQ0FBbkUsRUFBc0VILFFBQVEsQ0FBQ0ksQ0FBL0UsQ0FBYjs7VUFDQSxNQUFJLENBQUN6QyxTQUFMLEdBQWlCZ0IsR0FBakIsQ0FBcUJELElBQXJCO1FBQ0gsQ0FIRDtNQUlILENBTEQ7SUFNSDs7OztFQTdFd0J6Qjs7cUNBQ1IsQ0FBQyxRQUFELEVBQVcsZ0JBQVgsRUFBNkIsY0FBN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NSckI7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0FBOztBQUNPLElBQU1xRCxHQUFHLEdBQUdELDBFQUFnQixDQUFDRSw0SUFBRCxDQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDs7Ozs7Ozs7OztJQUVxQmpEO0VBS2pCLGdDQUFZa0QsYUFBWixFQUF5QkMsTUFBekIsRUFBaUM7SUFBQTs7SUFBQTs7SUFBQTtNQUFBO01BQUEsT0FKbEI7SUFJa0I7O0lBQUE7TUFBQTtNQUFBO0lBQUE7O0lBQUE7TUFBQTtNQUFBO0lBQUE7O0lBQzdCLDBDQUFvQkQsYUFBcEI7O0lBQ0EscUNBQWVDLE1BQWY7RUFDSDs7OztXQUVELGtCQUFTQyxHQUFULEVBQWM7TUFDViwwQ0FBb0IsSUFBSUMsV0FBSixDQUFnQkQsR0FBaEIsQ0FBcEI7O01BQ0EsMENBQWtCRSxTQUFsQixHQUE4Qiw4REFBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQTlCO0lBQ0g7OztXQUVELHNCQUFhO01BQUE7O01BQ1QsMEJBQUksSUFBSixpQkFBdUI7UUFDbkIsMENBQWtCQyxLQUFsQjs7UUFDQSwwQ0FBa0JwQixHQUFsQixDQUFzQixVQUFBcUIsVUFBVSxFQUFJO1VBQ2hDLDJCQUFJLFVBQUosQ0FBYXZCLE1BQWIsQ0FBb0J1QixVQUFwQjtRQUNILENBRkQ7TUFHSDtJQUNKOzs7Ozs7eUJBRWNDLFNBQVM7RUFBQTs7RUFDcEIsSUFBTVIsV0FBVyxHQUFHckIsSUFBSSxDQUFDOEIsS0FBTCxDQUFXRCxPQUFPLENBQUNFLElBQW5CLENBQXBCOztFQUNBLDBDQUFrQnhCLEdBQWxCLENBQXNCLFVBQUFxQixVQUFVLEVBQUk7SUFDaEMsNEJBQUksVUFBSixDQUFhdkIsTUFBYixDQUFvQnVCLFVBQXBCO0VBQ0gsQ0FGRDs7RUFHQVAsV0FBVyxDQUFDZCxHQUFaLENBQWdCLFVBQUFxQixVQUFVLEVBQUk7SUFDMUIsSUFBTUksY0FBYyxHQUFHLElBQUkvRCxvREFBSixDQUFlMkQsVUFBVSxDQUFDSyxVQUFYLENBQXNCQyxPQUF0QixDQUE4QixDQUE5QixFQUFpQ0MsUUFBakMsRUFBZixFQUE0RFAsVUFBVSxDQUFDZCxLQUF2RSxFQUE4RWMsVUFBVSxDQUFDYixNQUF6RixFQUFpR2EsVUFBVSxDQUFDWixDQUE1RyxFQUErR1ksVUFBVSxDQUFDWCxDQUExSCxDQUF2Qjs7SUFDQSw0QkFBSSxlQUFKLENBQWtCbUIsSUFBbEIsQ0FBdUJKLGNBQXZCOztJQUNBLDRCQUFJLFVBQUosQ0FBYUssVUFBYixDQUF3QkwsY0FBeEI7RUFDSCxDQUpEO0FBS0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0w7Ozs7Ozs7Ozs7SUFFcUI1RDtFQUtqQiwwQkFBYWtFLGNBQWIsRUFBNkJoQixNQUE3QixFQUFxQztJQUFBOztJQUFBOztJQUFBO01BQUE7TUFBQSxPQUp0QjtJQUlzQjs7SUFBQTtNQUFBO01BQUE7SUFBQTs7SUFBQTtNQUFBO01BQUE7SUFBQTs7SUFDakMsNkNBQXVCZ0IsY0FBdkI7O0lBQ0EscUNBQWVoQixNQUFmO0VBQ0g7Ozs7V0FFRCxrQkFBU0MsR0FBVCxFQUFjO01BQ1YsMENBQW9CLElBQUlDLFdBQUosQ0FBZ0JELEdBQWhCLENBQXBCOztNQUNBLDBDQUFrQkUsU0FBbEIsR0FBOEIsOERBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUE5Qjs7TUFDQSw2Q0FBcUJhLE1BQXJCLEdBQThCaEMsR0FBOUIsQ0FBa0MsVUFBQWhCLElBQUksRUFBSTtRQUN0Q0EsSUFBSSxDQUFDaUQsT0FBTCxHQUFjLENBQWQ7TUFDSCxDQUZEOztNQUdBLHFDQUFhQyxTQUFiO0lBQ0g7OztXQUVELHNCQUFhO01BQ1QsNkNBQXFCRixNQUFyQixHQUE4QmhDLEdBQTlCLENBQWtDLFVBQUFoQixJQUFJLEVBQUk7UUFDdENBLElBQUksQ0FBQ2lELE9BQUwsR0FBYyxDQUFkO01BQ0gsQ0FGRDs7TUFHQSwwQkFBRyxJQUFILGlCQUFzQjtRQUNsQiwwQ0FBa0JiLEtBQWxCO01BQ0g7O01BQ0QscUNBQWFjLFNBQWI7SUFDSDs7Ozs7O3lCQUVjWixTQUFTO0VBQ3BCLElBQU1hLFNBQVMsR0FBRzFDLElBQUksQ0FBQzhCLEtBQUwsQ0FBV0QsT0FBTyxDQUFDRSxJQUFuQixDQUFsQjs7RUFDQSw2Q0FBcUJXLFNBQXJCLENBQStCQSxTQUEvQjs7RUFDQSxxQ0FBYUQsU0FBYjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQ2dCRTs7Ozs7Ozs7SUFDakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSSxnQkFBY0MsS0FBZCxFQUFxQjlCLEtBQXJCLEVBQTRCQyxNQUE1QixFQUFpRDtNQUFBLElBQWQ4QixLQUFjLHVFQUFOLEtBQU07TUFDN0MsSUFBTUMsSUFBSSxHQUFHLElBQUlwRSxNQUFNLENBQUNxRSxJQUFYLENBQWdCO1FBQ3pCQyxHQUFHLEVBQUUsQ0FEb0I7UUFFekJDLElBQUksRUFBRSxDQUZtQjtRQUd6Qm5DLEtBQUssRUFBRUEsS0FIa0I7UUFJekJDLE1BQU0sRUFBRUEsTUFKaUI7UUFLekJtQyxNQUFNLEVBQUVMLEtBTGlCO1FBTXpCTSxJQUFJLEVBQUUsYUFObUI7UUFPekJDLFdBQVcsRUFBRTtNQVBZLENBQWhCLENBQWI7TUFVQSxJQUFNQyxJQUFJLEdBQUcsSUFBSTNFLE1BQU0sQ0FBQzRFLElBQVgsQ0FBZ0JWLEtBQWhCLEVBQXVCO1FBQ2hDSyxJQUFJLEVBQUUsQ0FEMEI7UUFFaENELEdBQUcsRUFBRSxDQUYyQjtRQUdoQ0UsTUFBTSxFQUFFLE9BSHdCO1FBSWhDSyxlQUFlLEVBQUVWLEtBSmU7UUFLaENXLFFBQVEsRUFBRTtNQUxzQixDQUF2QixDQUFiO01BUUEsT0FBTyxDQUFDVixJQUFELEVBQU9PLElBQVAsQ0FBUDtJQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJMOzs7O0lBRXFCbkY7Ozs7OzthQUlSOzs7Ozs7O0lBRVQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDSSxhQUFJNEMsS0FBSixFQUFXQyxNQUFYLEVBQW1Ca0MsSUFBbkIsRUFBeUJELEdBQXpCLEVBQThCO01BQzFCLElBQU16RCxJQUFJLEdBQUcsSUFBSXhCLDhDQUFKLENBQVMsb0NBQVkwRixNQUFaLEdBQXFCLENBQTlCLEVBQWlDM0MsS0FBakMsRUFBd0NDLE1BQXhDLEVBQWdEa0MsSUFBaEQsRUFBc0RELEdBQXRELENBQWI7O01BQ0Esb0NBQVlaLElBQVosQ0FBaUI3QyxJQUFqQjs7TUFDQSxPQUFPQSxJQUFQO0lBQ0g7SUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0ksYUFBSW1FLE1BQUosRUFBVztNQUNQLE9BQU8sb0NBQVlBLE1BQU0sR0FBRyxDQUFyQixDQUFQO0lBQ0g7OztXQUVELGtCQUFTO01BQ0wsNkJBQU8sSUFBUDtJQUNIOzs7V0FFRCxrQkFBUztNQUNMLE9BQU8sb0NBQVluRCxHQUFaLENBQWdCLFVBQUFoQixJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDRyxNQUFMLEVBQUo7TUFBQSxDQUFwQixDQUFQO0lBQ0g7SUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxnQkFBT0gsSUFBUCxFQUFZO01BQ1Isb0NBQWMsb0NBQVlvRSxNQUFaLENBQW1CLFVBQUFDLENBQUM7UUFBQSxPQUFJQSxDQUFDLEtBQUtyRSxJQUFWO01BQUEsQ0FBcEIsQ0FBZDs7TUFDQSxvQ0FBWWdCLEdBQVosQ0FBZ0IsVUFBQ3FELENBQUQsRUFBSUMsS0FBSjtRQUFBLE9BQWNELENBQUMsQ0FBQ0UsU0FBRixDQUFZRCxLQUFLLEdBQUcsQ0FBcEIsQ0FBZDtNQUFBLENBQWhCO0lBQ0g7SUFFRDtBQUNKO0FBQ0E7Ozs7V0FDSSxtQkFBVW5CLFVBQVYsRUFBcUI7TUFDakIsb0NBQVluQyxHQUFaLENBQWdCLFVBQUFoQixJQUFJLEVBQUk7UUFDcEIsSUFBR21ELFVBQVMsQ0FBQ3FCLFFBQVYsQ0FBbUJ4RSxJQUFJLENBQUNtRSxNQUF4QixDQUFILEVBQW1DO1VBQy9CbkUsSUFBSSxDQUFDeUUsSUFBTDtRQUNILENBRkQsTUFFSztVQUNEekUsSUFBSSxDQUFDMEUsTUFBTDtRQUNIO01BQ0osQ0FORDtJQU9IOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pETDs7SUFFcUJoRzs7Ozs7RUFHakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxvQkFBWW9GLElBQVosRUFBbUJ2QyxLQUFuQixFQUEwQkMsTUFBMUIsRUFBa0NrQyxJQUFsQyxFQUF3Q0QsR0FBeEMsRUFBNEM7SUFBQTs7SUFBQTs7SUFDeEMsSUFBTWtCLFFBQVEsR0FBR3ZCLHlFQUFBLENBQXdCVSxJQUF4QixFQUE4QnZDLEtBQTlCLEVBQXFDQyxNQUFyQyxFQUE2QyxPQUE3QyxDQUFqQjtJQUNBLDBCQUFNbUQsUUFBTixFQUFnQjtNQUNaakIsSUFBSSxFQUFFQSxJQURNO01BRVpELEdBQUcsRUFBRUEsR0FGTztNQUdabEMsS0FBSyxFQUFFQSxLQUhLO01BSVpDLE1BQU0sRUFBRUE7SUFKSSxDQUFoQjs7SUFGd0M7O0lBQUE7O0lBUXhDLE1BQUtzQyxJQUFMLEdBQVlBLElBQVo7SUFDQSxNQUFLZSxXQUFMLEdBQW1CLE1BQW5CO0lBQ0EsTUFBS0MsVUFBTCxHQUFrQixLQUFsQjtJQVZ3QztFQVczQzs7O0VBckJtQzNGLE1BQU0sQ0FBQzRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YvQztBQUNBOzs7Ozs7Ozs7O0lBRXFCdkc7Ozs7O0VBS2pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksY0FBWTJGLE1BQVosRUFBb0I1QyxLQUFwQixFQUEyQkMsTUFBM0IsRUFBbUNrQyxJQUFuQyxFQUF5Q0QsR0FBekMsRUFBOEM7SUFBQTs7SUFBQTs7SUFDMUMsSUFBTWtCLFFBQVEsR0FBR3ZCLHlFQUFBLENBQXdCZSxNQUFNLENBQUN2QixRQUFQLEVBQXhCLEVBQTJDckIsS0FBM0MsRUFBa0RDLE1BQWxELEVBQTBELEtBQTFELENBQWpCO0lBQ0EsMEJBQU1tRCxRQUFOLEVBQWdCO01BQ1pqQixJQUFJLEVBQUVBLElBRE07TUFFWkQsR0FBRyxFQUFFQSxHQUZPO01BR1psQyxLQUFLLEVBQUVBLEtBSEs7TUFJWkMsTUFBTSxFQUFFQTtJQUpJLENBQWhCOztJQUYwQzs7SUFBQTs7SUFBQTs7SUFBQTs7SUFBQTtNQUFBO01BQUEsT0FUakM7SUFTaUM7O0lBQUE7TUFBQTtNQUFBLE9BUi9CO0lBUStCOztJQVExQyxNQUFLd0QsUUFBTCxDQUFjQyxHQUFkLENBQWtCQyxPQUFsQixHQUE0QixLQUE1QjtJQUNBLE1BQUtmLE1BQUwsR0FBY0EsTUFBZDtJQVQwQztFQVU3Qzs7OztXQUVELGtCQUFRO01BQ0osdUVBQXFCZ0IsR0FBckIsQ0FBeUIsUUFBekIsd0JBQWtDLElBQWxDOztNQUNBLDZEQUFnQkEsR0FBaEIsQ0FBb0IsaUJBQXBCLHdCQUFzQyxJQUF0QztJQUNIOzs7V0FFRCxnQkFBTztNQUNILHVFQUFxQkEsR0FBckIsQ0FBeUIsUUFBekIsd0JBQWtDLElBQWxDOztNQUNBLDZEQUFnQkEsR0FBaEIsQ0FBb0IsaUJBQXBCLHdCQUFzQyxJQUF0QztJQUNIO0lBRUQ7QUFDSjtBQUNBOzs7O1dBQ0ksbUJBQVVoQixNQUFWLEVBQWtCO01BQ2QsS0FBS0EsTUFBTCxHQUFjQSxNQUFkOztNQUNBLDZEQUFnQmdCLEdBQWhCLENBQW9CLE1BQXBCLEVBQTRCaEIsTUFBTSxDQUFDdkIsUUFBUCxFQUE1QjtJQUNIO0lBRUQ7QUFDSjtBQUNBOzs7O1dBYUksa0JBQVM7TUFDTCxJQUFNd0MsU0FBUywwQkFBRyxJQUFILHNDQUFHLElBQUgsQ0FBZjs7TUFDQSxPQUFPO1FBQ0gzRCxDQUFDLEVBQUU0RCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLNUIsSUFBaEIsQ0FEQTtRQUVIaEMsQ0FBQyxFQUFFMkQsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSzdCLEdBQWhCLENBRkE7UUFHSGxDLEtBQUssRUFBRThELElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtDLGNBQUwsRUFBWCxDQUhKO1FBSUgvRCxNQUFNLEVBQUU2RCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLRSxlQUFMLEVBQVg7TUFKTCxDQUFQO0lBTUg7Ozs7RUFqRTZCckcsTUFBTSxDQUFDNEY7O3FCQTZDMUI7RUFDUCxPQUFPLEtBQUtVLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsQ0FBUDtBQUNIOzswQkFNZTtFQUNaLE9BQU8sS0FBS0EsVUFBTCxDQUFnQixNQUFoQixFQUF3QixDQUF4QixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDMURMOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTZGLGdFQUFzQixDQUFDLG1FQUFNOzs7Ozs7Ozs7O0FDQTFIOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3JjL0V2ZW50L1ByZWRpY3Rpb25FdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9FdmVudC9TcG90RXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvRmFjdG9yeS9SZWN0YW5nbGVGYWN0b3J5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvTW9kZWwvU3BvdENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9QcmVkaWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvU3BvdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy9odG1sL25vZGVfbW9kdWxlcy9mYWJyaWMvZGlzdHxqc2RvbSIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy9odG1sL25vZGVfbW9kdWxlcy9mYWJyaWMvZGlzdHxqc2RvbS9saWIvanNkb20vbGl2aW5nL2dlbmVyYXRlZC91dGlscyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy9odG1sL25vZGVfbW9kdWxlcy9mYWJyaWMvZGlzdHxqc2RvbS9saWIvanNkb20vdXRpbHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcbmltcG9ydCAnZmFicmljJztcclxuaW1wb3J0IFNwb3QgZnJvbSBcIi4uL3NyYy9TcG90XCI7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7XHJcbmltcG9ydCBQcmVkaWN0aW9uIGZyb20gXCIuLi9zcmMvUHJlZGljdGlvblwiO1xyXG5pbXBvcnQgU3BvdENvbGxlY3Rpb24gZnJvbSBcIi4uL3NyYy9Nb2RlbC9TcG90Q29sbGVjdGlvblwiO1xyXG5pbXBvcnQgUHJlZGljdGlvbkV2ZW50SGFuZGxlciBmcm9tIFwiLi4vc3JjL0V2ZW50L1ByZWRpY3Rpb25FdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IFNwb3RFdmVudEhhbmRsZXIgZnJvbSBcIi4uL3NyYy9FdmVudC9TcG90RXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljIHRhcmdldHMgPSBbJ2NhbWVyYScsICdwcmVkaWN0aW9uc1VybCcsICdmcmVlU3BvdHNVcmwnIF1cclxuICAgICNjYW52YXMgPSBudWxsO1xyXG4gICAgI3Nwb3RDb2xsZWN0aW9uID0gbmV3IFNwb3RDb2xsZWN0aW9uKCk7XHJcbiAgICAjcHJlZGljdGlvbnMgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XHJcbiAgICAgICAgdGhpcy5sb2FkU3BvdHMoKTtcclxuICAgICAgICB0aGlzLnNwb3RFdmVudEhhbmRsZXIgPSBuZXcgU3BvdEV2ZW50SGFuZGxlcih0aGlzLiNzcG90Q29sbGVjdGlvbiwgdGhpcy5nZXRDYW52YXMoKSk7XHJcbiAgICAgICAgdGhpcy5wcmVkaWN0aW9uRXZlbnRIYW5kbGVyID0gbmV3IFByZWRpY3Rpb25FdmVudEhhbmRsZXIodGhpcy4jcHJlZGljdGlvbnMsIHRoaXMuZ2V0Q2FudmFzKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRDYW52YXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLiNjYW52YXMpIHtcclxuICAgICAgICAgICAgdGhpcy4jY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXModGhpcy5jYW1lcmFUYXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLiNjYW52YXMub24oJ29iamVjdDptb2RpZmllZCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVTcG90cygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2NhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hNb25pdG9yaW5nKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3BvdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RFdmVudEhhbmRsZXIuYWN0aXZhdGUodGhpcy5mcmVlU3BvdHNVcmxUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVkaWN0aW9uRXZlbnRIYW5kbGVyLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdwcmVkaWN0aW9uJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlZGljdGlvbkV2ZW50SGFuZGxlci5hY3RpdmF0ZSh0aGlzLnByZWRpY3Rpb25zVXJsVGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BvdEV2ZW50SGFuZGxlci5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRTcG90KCkge1xyXG4gICAgICAgIGNvbnN0IHNwb3QgPSB0aGlzLiNzcG90Q29sbGVjdGlvbi5hZGQoODAsIDUwLCAxMDAsIDEwMCk7XHJcbiAgICAgICAgdGhpcy5nZXRDYW52YXMoKS5hZGQoc3BvdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNwb3RzKCkge1xyXG4gICAgICAgIGNvbnN0IHNwb3RzSnNvbiA9IHRoaXMuI3Nwb3RDb2xsZWN0aW9uLnRvSnNvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChSb3V0aW5nLmdlbmVyYXRlKCdzcG90c19saXN0JyksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNwb3RzSnNvbiksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3BvdCgpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IHRoaXMuZ2V0Q2FudmFzKCkuZ2V0QWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkT2JqZWN0IGluc3RhbmNlb2YgU3BvdCkge1xyXG4gICAgICAgICAgICB0aGlzLiNzcG90Q29sbGVjdGlvbi5yZW1vdmUoc2VsZWN0ZWRPYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlzLmdldENhbnZhcygpLnJlbW92ZShzZWxlY3RlZE9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxlY3RlZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkT2JqZWN0Lm1hcChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFNwb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiNzcG90Q29sbGVjdGlvbi5yZW1vdmUob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENhbnZhcygpLnJlbW92ZShvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNhdmVTcG90cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTcG90cygpIHtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoUm91dGluZy5nZW5lcmF0ZSgnc3BvdHNfdXBkYXRlJyksIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmZXRjaChyZXF1ZXN0KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihzcG90c0pzb24gPT4ge1xyXG4gICAgICAgICAgICBzcG90c0pzb24uZm9yRWFjaCgoc3BvdEpzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwb3QgPSB0aGlzLiNzcG90Q29sbGVjdGlvbi5hZGQoc3BvdEpzb24ud2lkdGgsIHNwb3RKc29uLmhlaWdodCwgc3BvdEpzb24ueCwgc3BvdEpzb24ueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENhbnZhcygpLmFkZChzcG90KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJzsgXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC4oanx0KXN4PyQvXHJcbikpO1xyXG4iLCJpbXBvcnQgUHJlZGljdGlvbiBmcm9tIFwiLi4vUHJlZGljdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZGljdGlvbkV2ZW50SGFuZGxlciB7XHJcbiAgICAjZXZlbnRTb3VyY2UgPSBudWxsO1xyXG4gICAgI3ByZWRpY3Rpb25zO1xyXG4gICAgI2NhbnZhcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwcmVkaWN0aW9ucywgY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy4jcHJlZGljdGlvbnMgPSBwcmVkaWN0aW9ucztcclxuICAgICAgICB0aGlzLiNjYW52YXMgPSBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUodXJsKSB7XHJcbiAgICAgICAgdGhpcy4jZXZlbnRTb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UodXJsKVxyXG4gICAgICAgIHRoaXMuI2V2ZW50U291cmNlLm9ubWVzc2FnZSA9IHRoaXMuI2hhbmRsZU1lc3NhZ2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLiNldmVudFNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLiNldmVudFNvdXJjZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLiNwcmVkaWN0aW9ucy5tYXAocHJlZGljdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNjYW52YXMucmVtb3ZlKHByZWRpY3Rpb24pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjaGFuZGxlTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc3QgcHJlZGljdGlvbnMgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy4jcHJlZGljdGlvbnMubWFwKHByZWRpY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiNjYW52YXMucmVtb3ZlKHByZWRpY3Rpb24pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJlZGljdGlvbnMubWFwKHByZWRpY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwcmVkaWN0aW9uUmVjdCA9IG5ldyBQcmVkaWN0aW9uKHByZWRpY3Rpb24uY29uZmlkZW5jZS50b0ZpeGVkKDIpLnRvU3RyaW5nKCksIHByZWRpY3Rpb24ud2lkdGgsIHByZWRpY3Rpb24uaGVpZ2h0LCBwcmVkaWN0aW9uLngsIHByZWRpY3Rpb24ueSk7XHJcbiAgICAgICAgICAgIHRoaXMuI3ByZWRpY3Rpb25zLnB1c2gocHJlZGljdGlvblJlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLiNjYW52YXMuc2VuZFRvQmFjayhwcmVkaWN0aW9uUmVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUHJlZGljdGlvbiBmcm9tIFwiLi4vUHJlZGljdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdEV2ZW50SGFuZGxlciB7XHJcbiAgICAjZXZlbnRTb3VyY2UgPSBudWxsO1xyXG4gICAgI3Nwb3RDb2xsZWN0aW9uO1xyXG4gICAgI2NhbnZhcztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvciggc3BvdENvbGxlY3Rpb24sIGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuI3Nwb3RDb2xsZWN0aW9uID0gc3BvdENvbGxlY3Rpb247XHJcbiAgICAgICAgdGhpcy4jY2FudmFzID0gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKHVybCkge1xyXG4gICAgICAgIHRoaXMuI2V2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybClcclxuICAgICAgICB0aGlzLiNldmVudFNvdXJjZS5vbm1lc3NhZ2UgPSB0aGlzLiNoYW5kbGVNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy4jc3BvdENvbGxlY3Rpb24uZ2V0QWxsKCkubWFwKHNwb3QgPT4ge1xyXG4gICAgICAgICAgICBzcG90Lm9wYWNpdHk9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4jY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgdGhpcy4jc3BvdENvbGxlY3Rpb24uZ2V0QWxsKCkubWFwKHNwb3QgPT4ge1xyXG4gICAgICAgICAgICBzcG90Lm9wYWNpdHk9IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy4jZXZlbnRTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy4jZXZlbnRTb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4jY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgICNoYW5kbGVNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zdCBmcmVlU3BvdHMgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSk7XHJcbiAgICAgICAgdGhpcy4jc3BvdENvbGxlY3Rpb24uZnJlZVNwb3RzKGZyZWVTcG90cyk7XHJcbiAgICAgICAgdGhpcy4jY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZUZhY3Rvcnl7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxyXG4gICAgICogQHBhcmFtIHtpbnR9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3JcclxuICAgICAqIEByZXR1cm4gZmFicmljLk9iamVjdFtdXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjcmVhdGUodGl0bGUsIHdpZHRoLCBoZWlnaHQsY29sb3IgPSAncmVkJyl7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IG5ldyBmYWJyaWMuUmVjdCh7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgc3Ryb2tlOiBjb2xvcixcclxuICAgICAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBmYWJyaWMuVGV4dCh0aXRsZSwge1xyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIHN0cm9rZTogJ3doaXRlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gW3JlY3QsIHRleHRdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBTcG90IGZyb20gXCIuLi9TcG90XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcG90Q29sbGVjdGlvbntcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUgU3BvdFtdXHJcbiAgICAgKi9cclxuICAgICNzcG90cyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtpbnR9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbGVmdFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvcFxyXG4gICAgICogQHJldHVybiB7U3BvdH1cclxuICAgICAqL1xyXG4gICAgYWRkKHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcCkge1xyXG4gICAgICAgIGNvbnN0IHNwb3QgPSBuZXcgU3BvdCh0aGlzLiNzcG90cy5sZW5ndGggKyAxLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3ApO1xyXG4gICAgICAgIHRoaXMuI3Nwb3RzLnB1c2goc3BvdCk7XHJcbiAgICAgICAgcmV0dXJuIHNwb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtpbnR9IG51bWJlclxyXG4gICAgICogQHJldHVybiB7U3BvdH1cclxuICAgICAqL1xyXG4gICAgZ2V0KG51bWJlcil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Nwb3RzW251bWJlciAtIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jc3BvdHM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9Kc29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNzcG90cy5tYXAoc3BvdCA9PiBzcG90LnRvSnNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7U3BvdH0gc3BvdFxyXG4gICAgICovXHJcbiAgICByZW1vdmUoc3BvdCl7XHJcbiAgICAgICAgdGhpcy4jc3BvdHMgPSB0aGlzLiNzcG90cy5maWx0ZXIocyA9PiBzICE9PSBzcG90KTtcclxuICAgICAgICB0aGlzLiNzcG90cy5tYXAoKHMsIGluZGV4KSA9PiBzLnNldE51bWJlcihpbmRleCArIDEpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7aW50W119IGZyZWVTcG90c1xyXG4gICAgICovXHJcbiAgICBmcmVlU3BvdHMoZnJlZVNwb3RzKSB7XHJcbiAgICAgICAgdGhpcy4jc3BvdHMubWFwKHNwb3QgPT4ge1xyXG4gICAgICAgICAgICBpZihmcmVlU3BvdHMuaW5jbHVkZXMoc3BvdC5udW1iZXIpKXtcclxuICAgICAgICAgICAgICAgIHNwb3QuZnJlZSgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNwb3Qub2NjdXB5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVjdGFuZ2xlRmFjdG9yeSBmcm9tIFwiLi9GYWN0b3J5L1JlY3RhbmdsZUZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWRpY3Rpb24gZXh0ZW5kcyBmYWJyaWMuR3JvdXB7XHJcbiAgICB0ZXh0O1xyXG4gICAgcmVjdGFuZ2xlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHdpZHRoXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gaGVpZ2h0XHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbGVmdFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvcFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCAgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFJlY3RhbmdsZUZhY3RvcnkuY3JlYXRlKHRleHQsIHdpZHRoLCBoZWlnaHQsICdncmVlbicpO1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRzLCB7XHJcbiAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgIHRvcDogdG9wLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5ob3ZlckN1cnNvciA9ICdhdXRvJztcclxuICAgICAgICB0aGlzLnNlbGVjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJ2ZhYnJpYyc7XHJcbmltcG9ydCBSZWN0YW5nbGVGYWN0b3J5IGZyb20gXCIuL0ZhY3RvcnkvUmVjdGFuZ2xlRmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvdCBleHRlbmRzIGZhYnJpYy5Hcm91cCB7XHJcbiAgICBudW1iZXI7XHJcbiAgICByZWN0YW5nbGU7XHJcbiAgICAjZnJlZUNvbG9yID0gJ2JsdWUnO1xyXG4gICAgI29jY3VweUNvbG9yID0gJ3JlZCc7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7aW50fSBudW1iZXJcclxuICAgICAqIEBwYXJhbSB7aW50fSB3aWR0aFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGhlaWdodFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGxlZnRcclxuICAgICAqIEBwYXJhbSB7aW50fSB0b3BcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyLCB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3ApIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFJlY3RhbmdsZUZhY3RvcnkuY3JlYXRlKG51bWJlci50b1N0cmluZygpLCB3aWR0aCwgaGVpZ2h0LCAncmVkJyk7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudHMsIHtcclxuICAgICAgICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy5tdHIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIG9jY3VweSgpe1xyXG4gICAgICAgIHRoaXMuI2dldFJlY3RhbmdsZSgpLnNldCgnc3Ryb2tlJyx0aGlzLiNvY2N1cHlDb2xvcik7XHJcbiAgICAgICAgdGhpcy4jZ2V0VGV4dCgpLnNldCgnYmFja2dyb3VuZENvbG9yJyx0aGlzLiNvY2N1cHlDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnJlZSgpIHtcclxuICAgICAgICB0aGlzLiNnZXRSZWN0YW5nbGUoKS5zZXQoJ3N0cm9rZScsdGhpcy4jZnJlZUNvbG9yKTtcclxuICAgICAgICB0aGlzLiNnZXRUZXh0KCkuc2V0KCdiYWNrZ3JvdW5kQ29sb3InLHRoaXMuI2ZyZWVDb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHNldE51bWJlcihudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcclxuICAgICAgICB0aGlzLiNnZXRUZXh0KCkuc2V0KCd0ZXh0JywgbnVtYmVyLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7ZmFicmljLlRleHR9XHJcbiAgICAgKi9cclxuICAgICNnZXRUZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdHMoJ3RleHQnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7ZmFicmljLlJlY3R9XHJcbiAgICAgKi9cclxuICAgICNnZXRSZWN0YW5nbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0cygncmVjdCcpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSnNvbigpIHtcclxuICAgICAgICBjb25zdCByZWN0YW5nbGUgPSB0aGlzLiNnZXRSZWN0YW5nbGUoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBNYXRoLnJvdW5kKHRoaXMubGVmdCksXHJcbiAgICAgICAgICAgIHk6IE1hdGgucm91bmQodGhpcy50b3ApLFxyXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5yb3VuZCh0aGlzLmdldFNjYWxlZFdpZHRoKCkpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQodGhpcy5nZXRTY2FsZWRIZWlnaHQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCIvdmFyL3d3dy9odG1sL3Zhci9jYWNoZS9mb3NSb3V0ZXMuanNvblwiO1JvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlNwb3QiLCJSb3V0aW5nIiwiUHJlZGljdGlvbiIsIlNwb3RDb2xsZWN0aW9uIiwiUHJlZGljdGlvbkV2ZW50SGFuZGxlciIsIlNwb3RFdmVudEhhbmRsZXIiLCJjb250ZXh0IiwibG9hZFNwb3RzIiwic3BvdEV2ZW50SGFuZGxlciIsImdldENhbnZhcyIsInByZWRpY3Rpb25FdmVudEhhbmRsZXIiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW1lcmFUYXJnZXQiLCJvbiIsImUiLCJzYXZlU3BvdHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYWN0aXZhdGUiLCJmcmVlU3BvdHNVcmxUYXJnZXQiLCJkZWFjdGl2YXRlIiwicHJlZGljdGlvbnNVcmxUYXJnZXQiLCJzcG90IiwiYWRkIiwic3BvdHNKc29uIiwidG9Kc29uIiwicmVxdWVzdCIsIlJlcXVlc3QiLCJnZW5lcmF0ZSIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJzZWxlY3RlZE9iamVjdCIsImdldEFjdGl2ZU9iamVjdCIsInJlbW92ZSIsIkFycmF5IiwibWFwIiwib2JqZWN0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImZvckVhY2giLCJzcG90SnNvbiIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwicmVxdWlyZSIsInByZWRpY3Rpb25zIiwiY2FudmFzIiwidXJsIiwiRXZlbnRTb3VyY2UiLCJvbm1lc3NhZ2UiLCJiaW5kIiwiY2xvc2UiLCJwcmVkaWN0aW9uIiwibWVzc2FnZSIsInBhcnNlIiwiZGF0YSIsInByZWRpY3Rpb25SZWN0IiwiY29uZmlkZW5jZSIsInRvRml4ZWQiLCJ0b1N0cmluZyIsInB1c2giLCJzZW5kVG9CYWNrIiwic3BvdENvbGxlY3Rpb24iLCJnZXRBbGwiLCJvcGFjaXR5IiwicmVuZGVyQWxsIiwiZnJlZVNwb3RzIiwiUmVjdGFuZ2xlRmFjdG9yeSIsInRpdGxlIiwiY29sb3IiLCJyZWN0IiwiUmVjdCIsInRvcCIsImxlZnQiLCJzdHJva2UiLCJmaWxsIiwic3Ryb2tlV2lkdGgiLCJ0ZXh0IiwiVGV4dCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwibGVuZ3RoIiwibnVtYmVyIiwiZmlsdGVyIiwicyIsImluZGV4Iiwic2V0TnVtYmVyIiwiaW5jbHVkZXMiLCJmcmVlIiwib2NjdXB5IiwiZWxlbWVudHMiLCJjcmVhdGUiLCJob3ZlckN1cnNvciIsInNlbGVjdGFibGUiLCJHcm91cCIsImNvbnRyb2xzIiwibXRyIiwidmlzaWJsZSIsInNldCIsInJlY3RhbmdsZSIsIk1hdGgiLCJyb3VuZCIsImdldFNjYWxlZFdpZHRoIiwiZ2V0U2NhbGVkSGVpZ2h0IiwiZ2V0T2JqZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=