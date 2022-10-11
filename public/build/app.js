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
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _src_Spot__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../src/Spot */ "./assets/src/Spot.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! fos-router */ "./node_modules/fos-router/public/js/router.js");
/* harmony import */ var fos_router__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(fos_router__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _src_Prediction__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../src/Prediction */ "./assets/src/Prediction.js");
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

var _spots = /*#__PURE__*/new WeakMap();

var _predictions = /*#__PURE__*/new WeakMap();

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  /**
   * @type Spot[]
   */
  function _default(context) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, context);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _canvas, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _spots, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _predictions, {
      writable: true,
      value: []
    });

    _this.loadSpots();

    _this.eventSubscribe();

    return _this;
  }
  /**
   * @param {fabric.Rect} rectangle
   */


  _createClass(_default, [{
    key: "renderSpot",
    value: function renderSpot(rectangle) {
      rectangle.controls.mtr.visible = false; // this.getCanvas().add(rectangle)
    }
    /**
     * @param {fabric.Rect} rectangle
     */

  }, {
    key: "renderPrediction",
    value: function renderPrediction(rectangle) {
      rectangle.hoverCursor = 'auto';
      rectangle.selectable = false;
      this.getCanvas().sendToBack(rectangle);
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      if (!_classPrivateFieldGet(this, _canvas)) {
        _classPrivateFieldSet(this, _canvas, new fabric.Canvas(this.cameraTarget));
      }

      return _classPrivateFieldGet(this, _canvas);
    }
  }, {
    key: "addSpot",
    value: function addSpot() {
      var numberSpot = parseInt(this.numberTarget.value);
      var rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 80,
        height: 50,
        stroke: 'red',
        fill: 'transparent',
        strokeWidth: 1
      });
      var spot = new _src_Spot__WEBPACK_IMPORTED_MODULE_30__["default"](numberSpot, rect);

      _classPrivateFieldGet(this, _spots).push(spot);

      this.renderSpot(rect);
    }
  }, {
    key: "saveSpots",
    value: function saveSpots() {
      var spotsJson = _classPrivateFieldGet(this, _spots).sort(function (spot1, spot2) {
        return spot1.number - spot2.number;
      }).map(function (spot) {
        return spot.toJson();
      });

      var request = new Request(fos_router__WEBPACK_IMPORTED_MODULE_31___default().generate('spots_list'), {
        method: 'POST',
        body: JSON.stringify(spotsJson)
      });
      fetch(request);
    }
  }, {
    key: "loadSpots",
    value: function loadSpots() {
      var _this2 = this;

      var request = new Request(fos_router__WEBPACK_IMPORTED_MODULE_31___default().generate('spots_update'), {
        method: 'GET'
      });
      fetch(request).then(function (response) {
        return response.json();
      }).then(function (spotsJson) {
        spotsJson.forEach(function (spotJson) {
          var rect = new fabric.Rect({
            top: spotJson.y,
            left: spotJson.x,
            width: spotJson.width,
            height: spotJson.height,
            stroke: 'red',
            fill: 'transparent',
            strokeWidth: 1
          });
          var spot = new _src_Spot__WEBPACK_IMPORTED_MODULE_30__["default"](spotJson.number, rect);

          _classPrivateFieldGet(_this2, _spots).push(spot);

          _this2.renderSpot(rect);
        });
      });
    }
  }, {
    key: "eventSubscribe",
    value: function eventSubscribe() {
      var _this3 = this;

      var url = this.mercureUrlTarget.value;
      var eventSource = new EventSource(url);

      eventSource.onmessage = function (event) {
        var predictions = JSON.parse(event.data);

        _classPrivateFieldGet(_this3, _predictions).map(function (prediction) {
          _classPrivateFieldGet(_this3, _canvas).remove(prediction.text);

          _classPrivateFieldGet(_this3, _canvas).remove(prediction.rectangle);
        });

        console.log(predictions);
        predictions.map(function (prediction) {
          var rect = new fabric.Rect({
            top: prediction.y / 3,
            left: prediction.x / 3,
            width: prediction.width / 3,
            height: prediction.height / 3,
            stroke: 'green',
            fill: 'transparent',
            strokeWidth: 1
          });
          var text = new fabric.Text(prediction.confidence.toFixed(2).toString(), {
            left: prediction.x / 3,
            top: prediction.y / 3 - 17,
            stroke: 'white',
            backgroundColor: 'green',
            fontSize: 15,
            padding: 10
          });

          _classPrivateFieldGet(_this3, _predictions).push(new _src_Prediction__WEBPACK_IMPORTED_MODULE_32__["default"](text, rect));

          _this3.renderPrediction(rect);

          _this3.renderPrediction(text);
        });
      };
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_28__.Controller);

_defineProperty(_default, "targets", ['camera', 'number', 'mercureUrl']);



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
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);




function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Prediction = /*#__PURE__*/_createClass(
/**
 * @param {fabric.Text} text
 * @param {fabric.Rect} rectangle
 */
function Prediction(text, rectangle) {
  _classCallCheck(this, Prediction);

  _defineProperty(this, "text", void 0);

  _defineProperty(this, "rectangle", void 0);

  this.text = text;
  this.rectangle = rectangle;
});



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
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spot = /*#__PURE__*/function () {
  /**
   * @param {int} number
   * @param {fabric.Rect} rectangle
   */
  function Spot(number, rectangle) {
    _classCallCheck(this, Spot);

    _defineProperty(this, "number", void 0);

    _defineProperty(this, "rectangle", void 0);

    this.number = number;
    this.rectangle = rectangle;
  }

  _createClass(Spot, [{
    key: "toJson",
    value: function toJson() {
      return {
        x: Math.round(this.rectangle.left),
        y: Math.round(this.rectangle.top),
        width: Math.round(this.rectangle.getScaledWidth()),
        height: Math.round(this.rectangle.getScaledHeight())
      };
    }
  }]);

  return Spot;
}();



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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-132f44"], () => (__webpack_exec__("./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!"), __webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUwsQ0FBVyxLQUFLM0UsU0FBTCxDQUFlaUIsR0FBMUIsQ0FGQTtRQUdIRSxLQUFLLEVBQUV1RCxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLM0UsU0FBTCxDQUFlNEUsY0FBZixFQUFYLENBSEo7UUFJSHhELE1BQU0sRUFBRXNELElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUszRSxTQUFMLENBQWU2RSxlQUFmLEVBQVg7TUFKTCxDQUFQO0lBTUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CTDs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2RixnRUFBc0IsQ0FBQyxtRUFBTTs7Ozs7Ozs7OztBQ0ExSDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLihqJTdDdClzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NyYy9QcmVkaWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zcmMvU3BvdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy9odG1sL25vZGVfbW9kdWxlcy9mYWJyaWMvZGlzdHxqc2RvbSIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy9odG1sL25vZGVfbW9kdWxlcy9mYWJyaWMvZGlzdHxqc2RvbS9saWIvanNkb20vbGl2aW5nL2dlbmVyYXRlZC91dGlscyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvdmFyL3d3dy9odG1sL25vZGVfbW9kdWxlcy9mYWJyaWMvZGlzdHxqc2RvbS9saWIvanNkb20vdXRpbHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqJTdDdClzeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQge0NvbnRyb2xsZXJ9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcbmltcG9ydCAnZmFicmljJztcclxuaW1wb3J0IFNwb3QgZnJvbSBcIi4uL3NyYy9TcG90XCI7XHJcbmltcG9ydCBSb3V0aW5nIGZyb20gXCJmb3Mtcm91dGVyXCI7XHJcbmltcG9ydCBQcmVkaWN0aW9uIGZyb20gXCIuLi9zcmMvUHJlZGljdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyB0YXJnZXRzID0gWydjYW1lcmEnLCAnbnVtYmVyJywnbWVyY3VyZVVybCddXHJcbiAgICAjY2FudmFzID0gbnVsbDtcclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUgU3BvdFtdXHJcbiAgICAgKi9cclxuICAgICNzcG90cyA9IFtdO1xyXG4gICAgI3ByZWRpY3Rpb25zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMubG9hZFNwb3RzKCk7XHJcbiAgICAgICAgdGhpcy5ldmVudFN1YnNjcmliZSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ZhYnJpYy5SZWN0fSByZWN0YW5nbGVcclxuICAgICAqL1xyXG4gICAgcmVuZGVyU3BvdChyZWN0YW5nbGUpIHtcclxuICAgICAgICByZWN0YW5nbGUuY29udHJvbHMubXRyLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgIC8vIHRoaXMuZ2V0Q2FudmFzKCkuYWRkKHJlY3RhbmdsZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZmFicmljLlJlY3R9IHJlY3RhbmdsZVxyXG4gICAgICovXHJcbiAgICByZW5kZXJQcmVkaWN0aW9uKHJlY3RhbmdsZSkge1xyXG4gICAgICAgIHJlY3RhbmdsZS5ob3ZlckN1cnNvciA9ICdhdXRvJztcclxuICAgICAgICByZWN0YW5nbGUuc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2V0Q2FudmFzKCkuc2VuZFRvQmFjayhyZWN0YW5nbGUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldENhbnZhcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuI2NhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLiNjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyh0aGlzLmNhbWVyYVRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLiNjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3BvdCgpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJTcG90ID0gcGFyc2VJbnQodGhpcy5udW1iZXJUYXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgZmFicmljLlJlY3Qoe1xyXG4gICAgICAgICAgICB0b3A6IDEwMCxcclxuICAgICAgICAgICAgbGVmdDogMTAwLFxyXG4gICAgICAgICAgICB3aWR0aDogODAsXHJcbiAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAgICAgICAgIHN0cm9rZTogJ3JlZCcsXHJcbiAgICAgICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3BvdCA9IG5ldyBTcG90KG51bWJlclNwb3QsIHJlY3QpO1xyXG4gICAgICAgIHRoaXMuI3Nwb3RzLnB1c2goc3BvdCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTcG90KHJlY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTcG90cygpIHtcclxuICAgICAgICBjb25zdCBzcG90c0pzb24gPSB0aGlzLiNzcG90cy5zb3J0KChzcG90MSwgc3BvdDIpID0+IHNwb3QxLm51bWJlciAtIHNwb3QyLm51bWJlcikubWFwKHNwb3QgPT4gc3BvdC50b0pzb24oKSk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFJvdXRpbmcuZ2VuZXJhdGUoJ3Nwb3RzX2xpc3QnKSwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc3BvdHNKc29uKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmZXRjaChyZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3BvdHMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFJvdXRpbmcuZ2VuZXJhdGUoJ3Nwb3RzX3VwZGF0ZScpLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oc3BvdHNKc29uID0+IHtcclxuICAgICAgICAgICAgc3BvdHNKc29uLmZvckVhY2goc3BvdEpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IG5ldyBmYWJyaWMuUmVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBzcG90SnNvbi55LFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHNwb3RKc29uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHNwb3RKc29uLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc3BvdEpzb24uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aDogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcG90ID0gbmV3IFNwb3Qoc3BvdEpzb24ubnVtYmVyLCByZWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuI3Nwb3RzLnB1c2goc3BvdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNwb3QocmVjdClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRTdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5tZXJjdXJlVXJsVGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGV2ZW50U291cmNlID0gbmV3IEV2ZW50U291cmNlKHVybCk7XHJcblxyXG4gICAgICAgIGV2ZW50U291cmNlLm9ubWVzc2FnZSA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJlZGljdGlvbnMgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLiNwcmVkaWN0aW9ucy5tYXAocHJlZGljdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNjYW52YXMucmVtb3ZlKHByZWRpY3Rpb24udGV4dClcclxuICAgICAgICAgICAgICAgIHRoaXMuI2NhbnZhcy5yZW1vdmUocHJlZGljdGlvbi5yZWN0YW5nbGUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcmVkaWN0aW9ucyk7XHJcbiAgICAgICAgICAgIHByZWRpY3Rpb25zLm1hcChwcmVkaWN0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgZmFicmljLlJlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcHJlZGljdGlvbi55LzMsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcHJlZGljdGlvbi54LzMsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHByZWRpY3Rpb24ud2lkdGgvMyxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHByZWRpY3Rpb24uaGVpZ2h0LzMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5ldyBmYWJyaWMuVGV4dChwcmVkaWN0aW9uLmNvbmZpZGVuY2UudG9GaXhlZCgyKS50b1N0cmluZygpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcHJlZGljdGlvbi54LzMsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBwcmVkaWN0aW9uLnkvMy0xNyxcclxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiNwcmVkaWN0aW9ucy5wdXNoKG5ldyBQcmVkaWN0aW9uKHRleHQsIHJlY3QpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJlZGljdGlvbihyZWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJlZGljdGlvbih0ZXh0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJzsgXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC4oanx0KXN4PyQvXHJcbikpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVkaWN0aW9ue1xyXG4gICAgdGV4dDtcclxuICAgIHJlY3RhbmdsZTtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmYWJyaWMuVGV4dH0gdGV4dFxyXG4gICAgICogQHBhcmFtIHtmYWJyaWMuUmVjdH0gcmVjdGFuZ2xlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRleHQsIHJlY3RhbmdsZSl7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnJlY3RhbmdsZSA9IHJlY3RhbmdsZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTcG90e1xyXG4gICAgbnVtYmVyO1xyXG4gICAgcmVjdGFuZ2xlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2ludH0gbnVtYmVyXHJcbiAgICAgKiBAcGFyYW0ge2ZhYnJpYy5SZWN0fSByZWN0YW5nbGVcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobnVtYmVyLCByZWN0YW5nbGUpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgICAgIHRoaXMucmVjdGFuZ2xlID0gcmVjdGFuZ2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSnNvbigpe1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IE1hdGgucm91bmQodGhpcy5yZWN0YW5nbGUubGVmdCksXHJcbiAgICAgICAgICAgIHk6IE1hdGgucm91bmQodGhpcy5yZWN0YW5nbGUudG9wKSxcclxuICAgICAgICAgICAgd2lkdGg6IE1hdGgucm91bmQodGhpcy5yZWN0YW5nbGUuZ2V0U2NhbGVkV2lkdGgoKSksXHJcbiAgICAgICAgICAgIGhlaWdodDogTWF0aC5yb3VuZCh0aGlzLnJlY3RhbmdsZS5nZXRTY2FsZWRIZWlnaHQoKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFJvdXRpbmcgZnJvbSBcImZvcy1yb3V0ZXJcIjtpbXBvcnQgcm91dGVzIGZyb20gXCIvdmFyL3d3dy9odG1sL3Zhci9jYWNoZS9mb3NSb3V0ZXMuanNvblwiO1JvdXRpbmcuc2V0Um91dGluZ0RhdGEocm91dGVzKTsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlNwb3QiLCJSb3V0aW5nIiwiUHJlZGljdGlvbiIsImNvbnRleHQiLCJsb2FkU3BvdHMiLCJldmVudFN1YnNjcmliZSIsInJlY3RhbmdsZSIsImNvbnRyb2xzIiwibXRyIiwidmlzaWJsZSIsImhvdmVyQ3Vyc29yIiwic2VsZWN0YWJsZSIsImdldENhbnZhcyIsInNlbmRUb0JhY2siLCJmYWJyaWMiLCJDYW52YXMiLCJjYW1lcmFUYXJnZXQiLCJudW1iZXJTcG90IiwicGFyc2VJbnQiLCJudW1iZXJUYXJnZXQiLCJ2YWx1ZSIsInJlY3QiLCJSZWN0IiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb2tlIiwiZmlsbCIsInN0cm9rZVdpZHRoIiwic3BvdCIsInB1c2giLCJyZW5kZXJTcG90Iiwic3BvdHNKc29uIiwic29ydCIsInNwb3QxIiwic3BvdDIiLCJudW1iZXIiLCJtYXAiLCJ0b0pzb24iLCJyZXF1ZXN0IiwiUmVxdWVzdCIsImdlbmVyYXRlIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJmb3JFYWNoIiwic3BvdEpzb24iLCJ5IiwieCIsInVybCIsIm1lcmN1cmVVcmxUYXJnZXQiLCJldmVudFNvdXJjZSIsIkV2ZW50U291cmNlIiwib25tZXNzYWdlIiwiZXZlbnQiLCJwcmVkaWN0aW9ucyIsInBhcnNlIiwiZGF0YSIsInByZWRpY3Rpb24iLCJyZW1vdmUiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsIlRleHQiLCJjb25maWRlbmNlIiwidG9GaXhlZCIsInRvU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udFNpemUiLCJwYWRkaW5nIiwicmVuZGVyUHJlZGljdGlvbiIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiTWF0aCIsInJvdW5kIiwiZ2V0U2NhbGVkV2lkdGgiLCJnZXRTY2FsZWRIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9