webpackHotUpdate_N_E("pages/index",{

/***/ "./components/grid-item.js":
/*!*********************************!*\
  !*** ./components/grid-item.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/api */ \"./lib/api.js\");\n\n\nvar _jsxFileName = \"/home/nyambayar/apps/example/blog/components/grid-item.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar GirdItem = function GirdItem(_ref) {\n  var post = _ref.post;\n  moment__WEBPACK_IMPORTED_MODULE_3___default.a.locale(\"mn\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    className: \"fj-card\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card-body-wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Header, {\n        className: \"d-flex flex-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: Object(lib_api__WEBPACK_IMPORTED_MODULE_4__[\"urlFor\"])(post.publisher.picture).height(50).url(),\n          className: \"rounded-circle mr-3\",\n          height: 50,\n          width: 50\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n            className: \"font-weight-bold mb-1\",\n            children: post.publisher.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n            className: \"card-date\",\n            children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.date).format(\"lll\")\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\".concat(post.slug),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"view overlay\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Img, {\n              src: Object(lib_api__WEBPACK_IMPORTED_MODULE_4__[\"urlFor\"])(post.image).height(300).url(),\n              alt: \"Card image cap\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Body, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Title, {\n              className: \"card-main-title\",\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Text, {\n              children: post.subtitle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = GirdItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GirdItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"GirdItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ncmlkLWl0ZW0uanM/YzE0ZiJdLCJuYW1lcyI6WyJHaXJkSXRlbSIsInBvc3QiLCJtb21lbnQiLCJsb2NhbGUiLCJ1cmxGb3IiLCJwdWJsaXNoZXIiLCJwaWN0dXJlIiwiaGVpZ2h0IiwidXJsIiwidGl0bGUiLCJkYXRlIiwiZm9ybWF0Iiwic2x1ZyIsImltYWdlIiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3QkMsK0NBQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQ7QUFFQSxzQkFDRSxxRUFBQyxvREFBRDtBQUFNLGFBQVMsV0FBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0UscUVBQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQWEsaUJBQVMsRUFBQyxpQkFBdkI7QUFBQSxnQ0FDRTtBQUNFLGFBQUcsRUFBRUMsc0RBQU0sQ0FBQ0gsSUFBSSxDQUFDSSxTQUFMLENBQWVDLE9BQWhCLENBQU4sQ0FBK0JDLE1BQS9CLENBQXNDLEVBQXRDLEVBQTBDQyxHQUExQyxFQURQO0FBRUUsbUJBQVMsRUFBQyxxQkFGWjtBQUdFLGdCQUFNLEVBQUUsRUFIVjtBQUlFLGVBQUssRUFBRTtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFBLGtDQUNFLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFZLHFCQUFTLEVBQUMsdUJBQXRCO0FBQUEsc0JBQ0dQLElBQUksQ0FBQ0ksU0FBTCxDQUFlSTtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcscUJBQVMsRUFBQyxXQUFyQjtBQUFBLHNCQUNHUCw2Q0FBTSxDQUFDRCxJQUFJLENBQUNTLElBQU4sQ0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsS0FBekI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWtCRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksYUFBTVYsSUFBSSxDQUFDVyxJQUFYLENBQVY7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsbUNBQ0UscUVBQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQ0UsaUJBQUcsRUFBRVIsc0RBQU0sQ0FBQ0gsSUFBSSxDQUFDWSxLQUFOLENBQU4sQ0FBbUJOLE1BQW5CLENBQTBCLEdBQTFCLEVBQStCQyxHQUEvQixFQURQO0FBRUUsaUJBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsb0NBQ0UscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksdUJBQVMsRUFBQyxpQkFBdEI7QUFBQSx3QkFBeUNQLElBQUksQ0FBQ1E7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLHdCQUFZUixJQUFJLENBQUNhO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUNELENBeENEOztLQUFNZCxRO0FBeUNTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ3JpZC1pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgdXJsRm9yIH0gZnJvbSBcImxpYi9hcGlcIjtcblxuY29uc3QgR2lyZEl0ZW0gPSAoeyBwb3N0IH0pID0+IHtcbiAgbW9tZW50LmxvY2FsZShcIm1uXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtgZmotY2FyZGB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHktd3JhcHBlclwiPlxuICAgICAgICA8Q2FyZC5IZWFkZXIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5wdWJsaXNoZXIucGljdHVyZSkuaGVpZ2h0KDUwKS51cmwoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtY2lyY2xlIG1yLTNcIlxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG1iLTFcIj5cbiAgICAgICAgICAgICAge3Bvc3QucHVibGlzaGVyLnRpdGxlfVxuICAgICAgICAgICAgPC9DYXJkLlRpdGxlPlxuICAgICAgICAgICAgPENhcmQuVGV4dCBjbGFzc05hbWU9XCJjYXJkLWRhdGVcIj5cbiAgICAgICAgICAgICAge21vbWVudChwb3N0LmRhdGUpLmZvcm1hdChcImxsbFwiKX1cbiAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmQuSGVhZGVyPlxuXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXcgb3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8Q2FyZC5JbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihwb3N0LmltYWdlKS5oZWlnaHQoMzAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgIDxDYXJkLlRpdGxlIGNsYXNzTmFtZT1cImNhcmQtbWFpbi10aXRsZVwiPntwb3N0LnRpdGxlfTwvQ2FyZC5UaXRsZT5cbiAgICAgICAgICAgICAgPENhcmQuVGV4dD57cG9zdC5zdWJ0aXRsZX08L0NhcmQuVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9DYXJkPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdpcmRJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/grid-item.js\n");

/***/ })

})