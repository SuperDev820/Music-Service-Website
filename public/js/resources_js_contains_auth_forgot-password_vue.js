(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_contains_auth_forgot-password_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/forgot-password.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/forgot-password.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _state_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/state/helpers */ "./resources/js/state/helpers.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app.config */ "./resources/js/app.config.json");





/**
 * Forgot password component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Forgot Password",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_4__.description
    }]
  },
  data: function data() {
    return {
      email: "",
      error: null,
      tryingToReset: false,
      isResetError: false
    };
  },
  methods: (0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({}, _state_helpers__WEBPACK_IMPORTED_MODULE_3__.authMethods), {}, {
    // Try to register the user in with the email, fullname
    // and password they provided.
    tryToReset: function tryToReset() {
      var _this = this;

      this.tryingToReset = true; // Reset the authError if it existed.

      this.error = null;
      return this.resetPassword({
        email: this.email
      }) // eslint-disable-next-line no-unused-vars
      .then(function (token) {
        _this.tryingToReset = false;
        _this.isResetError = false;
      })["catch"](function (error) {
        _this.tryingToReset = false;
        _this.error = error ? error : "";
        _this.isResetError = true;
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/state/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/state/helpers.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authComputed": function() { return /* binding */ authComputed; },
/* harmony export */   "layoutComputed": function() { return /* binding */ layoutComputed; },
/* harmony export */   "authMethods": function() { return /* binding */ authMethods; },
/* harmony export */   "layoutMethods": function() { return /* binding */ layoutMethods; }
/* harmony export */ });
/* harmony import */ var E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.mjs");


var authComputed = (0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('auth', {
  currentUser: function currentUser(state) {
    return state.currentUser;
  }
})), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)('auth', ['loggedIn']));
var layoutComputed = (0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)('layout', {
  layoutType: function layoutType(state) {
    return state.layoutType;
  },
  layoutWidth: function layoutWidth(state) {
    return state.layoutWidth;
  }
}));
var authMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('auth', ['logIn', 'logOut', 'register', 'resetPassword']);
var layoutMethods = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)('layout', ['changeLayoutType', 'changeLayoutWidth']);

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/***/ (function() {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Laravel\\Lukasz\\tutorial\\node_modules\\core-js\\modules\\es.symbol.description.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/***/ (function() {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'E:\\Laravel\\Lukasz\\tutorial\\node_modules\\core-js\\modules\\es.symbol.js'");

/***/ }),

/***/ "./resources/js/assets/images/logo-sm.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/logo-sm.png ***!
  \************************************************/
/***/ (function(module) {

module.exports = "/images/logo-sm.png?a44319006679b7182083bdc1d71565f4";

/***/ }),

/***/ "./resources/js/contains/auth/forgot-password.vue":
/*!********************************************************!*\
  !*** ./resources/js/contains/auth/forgot-password.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgot_password_vue_vue_type_template_id_4fe5b100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.vue?vue&type=template&id=4fe5b100& */ "./resources/js/contains/auth/forgot-password.vue?vue&type=template&id=4fe5b100&");
/* harmony import */ var _forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.vue?vue&type=script&lang=js& */ "./resources/js/contains/auth/forgot-password.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _forgot_password_vue_vue_type_template_id_4fe5b100___WEBPACK_IMPORTED_MODULE_0__.render,
  _forgot_password_vue_vue_type_template_id_4fe5b100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contains/auth/forgot-password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contains/auth/forgot-password.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/contains/auth/forgot-password.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./forgot-password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/forgot-password.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/contains/auth/forgot-password.vue?vue&type=template&id=4fe5b100&":
/*!***************************************************************************************!*\
  !*** ./resources/js/contains/auth/forgot-password.vue?vue&type=template&id=4fe5b100& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_4fe5b100___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_4fe5b100___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgot_password_vue_vue_type_template_id_4fe5b100___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./forgot-password.vue?vue&type=template&id=4fe5b100& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/forgot-password.vue?vue&type=template&id=4fe5b100&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/forgot-password.vue?vue&type=template&id=4fe5b100&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/forgot-password.vue?vue&type=template&id=4fe5b100& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "account-pages my-5 pt-5" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8 col-lg-6 col-xl-5" }, [
          _c("div", { staticClass: "card overflow-hidden" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-body p-4" }, [
              _c(
                "div",
                { staticClass: "p-3" },
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "mt-3",
                      attrs: { variant: "danger", dismissible: "" },
                      model: {
                        value: _vm.isResetError,
                        callback: function($$v) {
                          _vm.isResetError = $$v
                        },
                        expression: "isResetError"
                      }
                    },
                    [_vm._v(_vm._s(_vm.error))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form",
                    {
                      staticClass: "form-horizontal mt-4",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.tryToReset($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "email-group",
                            label: "Email",
                            "label-for": "email"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "email",
                              type: "email",
                              placeholder: "Enter email"
                            },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mb-0" }, [
                        _c(
                          "div",
                          { staticClass: "col-12 text-right" },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "w-md",
                                attrs: { type: "submit", variant: "primary" }
                              },
                              [_vm._v("Reset")]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-5 text-center" }, [
            _c(
              "p",
              [
                _vm._v("\n            Remember It ?\n            "),
                _c(
                  "router-link",
                  {
                    staticClass: "font-weight-medium text-primary",
                    attrs: { tag: "a", to: "/login" }
                  },
                  [_vm._v("Sign In here")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0" }, [
              _vm._v(
                "\n            © " +
                  _vm._s(new Date().getFullYear()) +
                  " Veltrix. Crafted with\n            "
              ),
              _c("i", { staticClass: "mdi mdi-heart text-danger" }),
              _vm._v(" by Themesbrand\n          ")
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bg-primary" }, [
      _c("div", { staticClass: "text-primary text-center p-4" }, [
        _c("h5", { staticClass: "text-white font-size-20 p-2" }, [
          _vm._v("Reset Password")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "logo logo-admin", attrs: { href: "/" } }, [
          _c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png"),
              height: "24",
              alt: "logo"
            }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuex/dist/vuex.mjs":
/*!*****************************************!*\
  !*** ./node_modules/vuex/dist/vuex.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__; },
/* harmony export */   "Store": function() { return /* binding */ Store; },
/* harmony export */   "install": function() { return /* binding */ install; },
/* harmony export */   "version": function() { return /* binding */ version; },
/* harmony export */   "mapState": function() { return /* binding */ mapState; },
/* harmony export */   "mapMutations": function() { return /* binding */ mapMutations; },
/* harmony export */   "mapGetters": function() { return /* binding */ mapGetters; },
/* harmony export */   "mapActions": function() { return /* binding */ mapActions; },
/* harmony export */   "createNamespacedHelpers": function() { return /* binding */ createNamespacedHelpers; },
/* harmony export */   "createLogger": function() { return /* binding */ createLogger; }
/* harmony export */ });
/* harmony import */ var _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/vuex.common.js */ "./node_modules/vuex/dist/vuex.common.js");


const {
  Store,
  install,
  version,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
} = _dist_vuex_common_js__WEBPACK_IMPORTED_MODULE_0__




/***/ })

}]);