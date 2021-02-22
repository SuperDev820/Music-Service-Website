(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_contains_auth_login_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/login.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app.config */ "./resources/js/app.config.json");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.mjs");





/**
 * Login component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Login",
    meta: [{
      name: "description",
      content: _app_config__WEBPACK_IMPORTED_MODULE_3__.description
    }]
  },
  components: {},
  data: function data() {
    return {
      email: "",
      password: "",
      authError: null,
      tryingToLogIn: false,
      isAuthError: false
    };
  },
  methods: (0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)((0,E_Laravel_Lukasz_tutorial_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.default)({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['login'])), {}, {
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn: function tryToLogIn() {
      var _this = this;

      this.tryingToLogIn = true; // Reset the authError if it existed.

      this.authError = null;
      return this.login({
        email: this.email,
        password: this.password
      }).then(function (res) {
        _this.$router.push({
          name: "home"
        });

        _this.tryingToLogIn = false;
        _this.isAuthError = false;
      })["catch"](function (error) {
        _this.tryingToLogIn = false;
        _this.authError = error ? error : "";
        _this.isAuthError = true;
      });
    }
  })
});

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

/***/ "./resources/js/contains/auth/login.vue":
/*!**********************************************!*\
  !*** ./resources/js/contains/auth/login.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6daccc24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6daccc24& */ "./resources/js/contains/auth/login.vue?vue&type=template&id=6daccc24&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/contains/auth/login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _login_vue_vue_type_template_id_6daccc24___WEBPACK_IMPORTED_MODULE_0__.render,
  _login_vue_vue_type_template_id_6daccc24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contains/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contains/auth/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/contains/auth/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/contains/auth/login.vue?vue&type=template&id=6daccc24&":
/*!*****************************************************************************!*\
  !*** ./resources/js/contains/auth/login.vue?vue&type=template&id=6daccc24& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6daccc24___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6daccc24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6daccc24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./login.vue?vue&type=template&id=6daccc24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/login.vue?vue&type=template&id=6daccc24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/login.vue?vue&type=template&id=6daccc24&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contains/auth/login.vue?vue&type=template&id=6daccc24& ***!
  \********************************************************************************************************************************************************************************************************************/
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
                        value: _vm.isAuthError,
                        callback: function($$v) {
                          _vm.isAuthError = $$v
                        },
                        expression: "isAuthError"
                      }
                    },
                    [_vm._v(_vm._s(_vm.authError))]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form",
                    {
                      staticClass: "form-horizontal mt-4",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.tryToLogIn($event)
                        }
                      }
                    },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "input-group-1",
                            label: "Email",
                            "label-for": "input-1"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "input-1",
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
                      _c(
                        "b-form-group",
                        {
                          staticClass: "mb-3",
                          attrs: {
                            id: "input-group-2",
                            label: "Password",
                            "label-for": "input-2"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "input-2",
                              type: "password",
                              placeholder: "Enter password"
                            },
                            model: {
                              value: _vm.password,
                              callback: function($$v) {
                                _vm.password = $$v
                              },
                              expression: "password"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-6" },
                          [
                            _c(
                              "b-form-checkbox",
                              {
                                attrs: {
                                  id: "checkbox-1",
                                  name: "checkbox-1",
                                  value: "accepted",
                                  "unchecked-value": "not_accepted"
                                }
                              },
                              [_vm._v("Remember me")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-sm-6 text-right" },
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "w-md",
                                attrs: { type: "submit", variant: "primary" }
                              },
                              [_vm._v("Log In")]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mt-2 mb-0 row" }, [
                        _c(
                          "div",
                          { staticClass: "col-12 mt-4" },
                          [
                            _c(
                              "router-link",
                              { attrs: { tag: "a", to: "/forgot-password" } },
                              [
                                _c("i", { staticClass: "mdi mdi-lock" }),
                                _vm._v(
                                  " Forgot your password?\n                    "
                                )
                              ]
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
                _vm._v("\n            Don't have an account ?\n            "),
                _c(
                  "router-link",
                  {
                    staticClass: "font-weight-medium text-primary",
                    attrs: { tag: "a", to: "/register" }
                  },
                  [_vm._v("Signup now")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "mb-0" }, [
              _vm._v(
                "\n            ©\n            " +
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
        _c("h5", { staticClass: "text-white font-size-20" }, [
          _vm._v("Welcome Back !")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-white-50" }, [
          _vm._v("Sign in to continue to Veltrix.")
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