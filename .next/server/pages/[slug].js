module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/higlight-code.js":
/*!*************************************!*\
  !*** ./components/higlight-code.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ \"highlight.js\");\n/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/nyambayar/apps/example/blog/components/higlight-code.js\";\n\n\n\nconst HighlightCore = ({\n  children,\n  language\n}) => {\n  const codeRef = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    highlight_js__WEBPACK_IMPORTED_MODULE_1___default.a.highlightBlock(codeRef.current);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n    className: language,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n      ref: codeRef,\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HighlightCore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hpZ2xpZ2h0LWNvZGUuanM/NzZiMCJdLCJuYW1lcyI6WyJIaWdobGlnaHRDb3JlIiwiY2hpbGRyZW4iLCJsYW5ndWFnZSIsImNvZGVSZWYiLCJjcmVhdGVSZWYiLCJ1c2VFZmZlY3QiLCJobGpzIiwiaGlnaGxpZ2h0QmxvY2siLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQTRCO0FBQ2hELFFBQU1DLE9BQU8sZ0JBQUdDLHVEQUFTLEVBQXpCO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyx1REFBSSxDQUFDQyxjQUFMLENBQW9CSixPQUFPLENBQUNLLE9BQTVCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFTixRQUFoQjtBQUFBLDJCQUNFO0FBQU0sU0FBRyxFQUFFQyxPQUFYO0FBQUEsZ0JBQXFCRjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBS0QsQ0FaRDs7QUFjZUQsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hpZ2xpZ2h0LWNvZGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGxqcyBmcm9tIFwiaGlnaGxpZ2h0LmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIaWdobGlnaHRDb3JlID0gKHsgY2hpbGRyZW4sIGxhbmd1YWdlIH0pID0+IHtcbiAgY29uc3QgY29kZVJlZiA9IGNyZWF0ZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGxqcy5oaWdobGlnaHRCbG9jayhjb2RlUmVmLmN1cnJlbnQpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8cHJlIGNsYXNzTmFtZT17bGFuZ3VhZ2V9PlxuICAgICAgPGNvZGUgcmVmPXtjb2RlUmVmfT57Y2hpbGRyZW59PC9jb2RlPlxuICAgIDwvcHJlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0Q29yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/higlight-code.js\n");

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_my_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/my-navbar */ \"./components/my-navbar.js\");\n\nvar _jsxFileName = \"/home/nyambayar/apps/example/blog/components/layout.js\";\n\n\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_my_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"blog-detail-page\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: `page-wrapper`,\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: \"page-footer\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          children: \"\\u043D\\u04AF\\u04AF\\u0440\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, undefined), \" | \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          children: \"\\u0441\\u0443\\u0440\\u0433\\u0430\\u043B\\u0442\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined), \" | \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"#\",\n          children: \"\\u0444\\u044D\\u0439\\u0441\\u0431\\u04AF\\u04AF\\u043A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQy9CLHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFHLGNBQWpCO0FBQUEsa0JBQWlDQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU1FO0FBQVEsZUFBUyxFQUFDLGFBQWxCO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUcsS0FGSCxlQUdFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsRUFJRyxLQUpILGVBS0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBa0JELENBbkJEOztBQXFCZUQscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5pbXBvcnQgTXlOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvbXktbmF2YmFyXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE15TmF2YmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctZGV0YWlsLXBhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwYWdlLXdyYXBwZXJgfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwYWdlLWZvb3RlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0L3Sr9Kv0YA8L2E+XG4gICAgICAgICAge1wiIHwgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj7RgdGD0YDQs9Cw0LvRgjwvYT5cbiAgICAgICAgICB7XCIgfCBcIn1cbiAgICAgICAgICA8YSBocmVmPVwiI1wiPtGE0Y3QudGB0LHSr9Kv0Lo8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./components/my-navbar.js":
/*!*********************************!*\
  !*** ./components/my-navbar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/nyambayar/apps/example/blog/components/my-navbar.js\";\n\n\nconst MyNavbar = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    className: \"fj-navbar fj-nav-base\",\n    bg: \"transparent\",\n    expand: \"lg\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n      className: \"fj-navbar-brand\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"1234 \\u0411\\u041B\\u041E\\u0413\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n      \"aria-controls\": \"basic-navbar-nav\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n      id: \"basic-navbar-nav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n        className: \"ml-auto\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          className: \"fj-navbar-item fj-navbar-link\",\n          href: \"/\",\n          children: \"\\u041D\\u04AE\\u04AE\\u0420\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyNavbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL215LW5hdmJhci5qcz9kMDJmIl0sIm5hbWVzIjpbIk15TmF2YmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsc0JBQ0UscUVBQUMsc0RBQUQ7QUFBUSxhQUFTLEVBQUMsdUJBQWxCO0FBQTBDLE1BQUUsRUFBQyxhQUE3QztBQUEyRCxVQUFNLEVBQUMsSUFBbEU7QUFBQSw0QkFDRSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxlQUFTLEVBQUMsaUJBQXhCO0FBQUEsNkJBQ0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxzREFBRCxDQUFRLE1BQVI7QUFBZSx1QkFBYztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0UscUVBQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLFFBQUUsRUFBQyxrQkFBcEI7QUFBQSw2QkFDRSxxRUFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLCtCQUNFLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLG1CQUFTLEVBQUMsK0JBQXBCO0FBQW9ELGNBQUksRUFBQyxHQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FoQkQ7O0FBaUJlQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbXktbmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmNvbnN0IE15TmF2YmFyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwiZmotbmF2YmFyIGZqLW5hdi1iYXNlXCIgYmc9XCJ0cmFuc3BhcmVudFwiIGV4cGFuZD1cImxnXCI+XG4gICAgICA8TmF2YmFyLkJyYW5kIGNsYXNzTmFtZT1cImZqLW5hdmJhci1icmFuZFwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiPjEyMzQg0JHQm9Ce0JM8L2E+XG4gICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxuICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJmai1uYXZiYXItaXRlbSBmai1uYXZiYXItbGlua1wiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICDQndKu0q7QoFxuICAgICAgICAgIDwvTmF2Lkxpbms+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/my-navbar.js\n");

/***/ }),

/***/ "./components/post-header.js":
/*!***********************************!*\
  !*** ./components/post-header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/api */ \"./lib/api.js\");\n\nvar _jsxFileName = \"/home/nyambayar/apps/example/blog/components/post-header.js\";\n\n\n\nconst PostHeader = ({\n  post\n}) => {\n  moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale(\"mn\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"blog-detail-header\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"lead mb-0\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: post.publisher.picture,\n        className: \"rounded-circle mr-3\",\n        height: \"50px\",\n        width: \"50px\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined), post.publisher.title, \", \", moment__WEBPACK_IMPORTED_MODULE_1___default()(post.date).format(\"lll\")]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      className: \"font-weight-bold blog-detail-header-title mb-0\",\n      children: post.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      className: \"blog-detail-header-subtitle mb-3\",\n      children: post.subtitle\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      className: \"img-fluid rounded\",\n      src: Object(lib_api__WEBPACK_IMPORTED_MODULE_2__[\"urlFor\"])(post.cover_image).height(800).url(),\n      alt: post.cover_image.alt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"code-filename\",\n      style: {\n        textAlign: \"center\"\n      },\n      children: post.cover_image.alt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostHeader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyLmpzPzU1NmMiXSwibmFtZXMiOlsiUG9zdEhlYWRlciIsInBvc3QiLCJtb21lbnQiLCJsb2NhbGUiLCJwdWJsaXNoZXIiLCJwaWN0dXJlIiwidGl0bGUiLCJkYXRlIiwiZm9ybWF0Iiwic3VidGl0bGUiLCJ1cmxGb3IiLCJjb3Zlcl9pbWFnZSIsImhlaWdodCIsInVybCIsImFsdCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQy9CQywrQ0FBTSxDQUFDQyxNQUFQLENBQWMsSUFBZDtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUMsV0FBYjtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFRixJQUFJLENBQUNHLFNBQUwsQ0FBZUMsT0FEdEI7QUFFRSxpQkFBUyxFQUFDLHFCQUZaO0FBR0UsY0FBTSxFQUFDLE1BSFQ7QUFJRSxhQUFLLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBT0dKLElBQUksQ0FBQ0csU0FBTCxDQUFlRSxLQVBsQixRQU8yQkosNkNBQU0sQ0FBQ0QsSUFBSSxDQUFDTSxJQUFOLENBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLEtBQXpCLENBUDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVdFO0FBQUksZUFBUyxFQUFDLGdEQUFkO0FBQUEsZ0JBQ0dQLElBQUksQ0FBQ0s7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGVBZUU7QUFBSSxlQUFTLEVBQUMsa0NBQWQ7QUFBQSxnQkFBa0RMLElBQUksQ0FBQ1E7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixlQWlCRTtBQUNFLGVBQVMsRUFBQyxtQkFEWjtBQUVFLFNBQUcsRUFBRUMsc0RBQU0sQ0FBQ1QsSUFBSSxDQUFDVSxXQUFOLENBQU4sQ0FBeUJDLE1BQXpCLENBQWdDLEdBQWhDLEVBQXFDQyxHQUFyQyxFQUZQO0FBR0UsU0FBRyxFQUFFWixJQUFJLENBQUNVLFdBQUwsQ0FBaUJHO0FBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBc0JFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUF0QztBQUFBLGdCQUNHZCxJQUFJLENBQUNVLFdBQUwsQ0FBaUJHO0FBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNEJELENBOUJEOztBQWdDZWQseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3QtaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwibGliL2FwaVwiO1xuXG5jb25zdCBQb3N0SGVhZGVyID0gKHsgcG9zdCB9KSA9PiB7XG4gIG1vbWVudC5sb2NhbGUoXCJtblwiKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctZGV0YWlsLWhlYWRlclwiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBtYi0wXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Bvc3QucHVibGlzaGVyLnBpY3R1cmV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgbXItM1wiXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgLz5cbiAgICAgICAge3Bvc3QucHVibGlzaGVyLnRpdGxlfSwge21vbWVudChwb3N0LmRhdGUpLmZvcm1hdChcImxsbFwiKX1cbiAgICAgIDwvcD5cblxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYmxvZy1kZXRhaWwtaGVhZGVyLXRpdGxlIG1iLTBcIj5cbiAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICA8L2gxPlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvZy1kZXRhaWwtaGVhZGVyLXN1YnRpdGxlIG1iLTNcIj57cG9zdC5zdWJ0aXRsZX08L2gyPlxuXG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkXCJcbiAgICAgICAgc3JjPXt1cmxGb3IocG9zdC5jb3Zlcl9pbWFnZSkuaGVpZ2h0KDgwMCkudXJsKCl9XG4gICAgICAgIGFsdD17cG9zdC5jb3Zlcl9pbWFnZS5hbHR9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWZpbGVuYW1lXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICB7cG9zdC5jb3Zlcl9pbWFnZS5hbHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/post-header.js\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: urlFor, getAllPosts, getPostBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlFor\", function() { return urlFor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPosts\", function() { return getAllPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostBySlug\", function() { return getPostBySlug; });\n/* harmony import */ var lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/sanity */ \"./lib/sanity.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(lib_sanity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconst urlFor = source => {\n  return builder.image(source);\n};\nconst getAllPosts = async () => {\n  const posts = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(`*[_type==\"post\"]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}`);\n  return posts;\n};\nconst getPostBySlug = async slug => {\n  const post = await lib_sanity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetch(`*[_type==\"post\" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , cover_image, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`, {\n    slug\n  });\n  return post;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvYXBpLmpzP2FhODUiXSwibmFtZXMiOlsiYnVpbGRlciIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiZ2V0QWxsUG9zdHMiLCJwb3N0cyIsImZldGNoIiwiZ2V0UG9zdEJ5U2x1ZyIsInNsdWciLCJwb3N0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxPQUFPLEdBQUdDLHdEQUFlLENBQUNDLGtEQUFELENBQS9CO0FBRU8sTUFBTUMsTUFBTSxHQUFJQyxNQUFELElBQVk7QUFDaEMsU0FBT0osT0FBTyxDQUFDSyxLQUFSLENBQWNELE1BQWQsQ0FBUDtBQUNELENBRk07QUFJQSxNQUFNRSxXQUFXLEdBQUcsWUFBWTtBQUNyQyxRQUFNQyxLQUFLLEdBQUcsTUFBTUwsa0RBQU0sQ0FBQ00sS0FBUCxDQUNqQiwyS0FEaUIsQ0FBcEI7QUFHQSxTQUFPRCxLQUFQO0FBQ0QsQ0FMTTtBQU9BLE1BQU1FLGFBQWEsR0FBRyxNQUFPQyxJQUFQLElBQWdCO0FBQzNDLFFBQU1DLElBQUksR0FBRyxNQUFNVCxrREFBTSxDQUFDTSxLQUFQLENBQ2hCLGtOQURnQixFQUVqQjtBQUFFRTtBQUFGLEdBRmlCLENBQW5CO0FBSUEsU0FBT0MsSUFBUDtBQUNELENBTk0iLCJmaWxlIjoiLi9saWIvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tIFwibGliL3Nhbml0eVwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xuXG5leHBvcnQgY29uc3QgdXJsRm9yID0gKHNvdXJjZSkgPT4ge1xuICByZXR1cm4gYnVpbGRlci5pbWFnZShzb3VyY2UpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBgKltfdHlwZT09XCJwb3N0XCJde19jcmVhdGVkQXQsIHRpdGxlLCBzdWJ0aXRsZSwgZGF0ZSwgJ2ltYWdlJzogY292ZXJfaW1hZ2UuYXNzZXQtPnVybCwgJ3NsdWcnOnNsdWcuY3VycmVudCwgJ3B1Ymxpc2hlcic6cHVibGlzaGVyLT57dGl0bGUsICdwaWN0dXJlJzogcGljdHVyZS5hc3NldC0+dXJsIH19YFxuICApO1xuICByZXR1cm4gcG9zdHM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdEJ5U2x1ZyA9IGFzeW5jIChzbHVnKSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYCpbX3R5cGU9PVwicG9zdFwiICYmIHNsdWcuY3VycmVudD09JHNsdWdde19jcmVhdGVkQXQsIHRpdGxlLCBzdWJ0aXRsZSwgZGF0ZSwgY29udGVudFtdey4uLiwnYXNzZXQnOiBhc3NldC0+fSAsIGNvdmVyX2ltYWdlLCAnc2x1Zyc6c2x1Zy5jdXJyZW50LCAncHVibGlzaGVyJzpwdWJsaXNoZXItPnt0aXRsZSwgJ3BpY3R1cmUnOiBwaWN0dXJlLmFzc2V0LT51cmwsICB9fWAsXG4gICAgeyBzbHVnIH1cbiAgKTtcbiAgcmV0dXJuIHBvc3Q7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sanityClient = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n\nconst client = sanityClient({\n  projectId: \"mdku8th6\",\n  dataset: \"production\",\n  useCdn: process.NODE_ENV === \"production\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2FuaXR5LmpzP2RkYjEiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicmVxdWlyZSIsImNsaWVudCIsInByb2plY3RJZCIsInByb2Nlc3MiLCJkYXRhc2V0IiwidXNlQ2RuIiwiTk9ERV9FTlYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsWUFBWSxHQUFHQyxtQkFBTyxDQUFDLHNDQUFELENBQTVCOztBQUVBLE1BQU1DLE1BQU0sR0FBR0YsWUFBWSxDQUFDO0FBQzFCRyxXQUFTLEVBQUVDLFVBRGU7QUFFMUJDLFNBQU8sRUFBRUQsWUFGaUI7QUFHMUJFLFFBQU0sRUFBRUYsT0FBTyxDQUFDRyxRQUFSLEtBQXFCO0FBSEgsQ0FBRCxDQUEzQjtBQU1lTCxxRUFBZiIsImZpbGUiOiIuL2xpYi9zYW5pdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzYW5pdHlDbGllbnQgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7XG5cbmNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0pFQ1RfSUQsXG4gIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VULFxuICB1c2VDZG46IHByb2Nlc3MuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/sanity.js\n");

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout */ \"./components/layout.js\");\n/* harmony import */ var lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/api */ \"./lib/api.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"@sanity/block-content-to-react\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_higlight_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/higlight-code */ \"./components/higlight-code.js\");\n/* harmony import */ var components_post_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/post-header */ \"./components/post-header.js\");\n\nvar _jsxFileName = \"/home/nyambayar/apps/example/blog/pages/[slug].js\";\n\n\n\n\n\n\n\nconst serializers = {\n  types: {\n    code: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_higlight_code__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      language: props.node.language,\n      children: [props.node.code, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"code-filename\",\n        children: props.node.filename\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined),\n    image: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: `blog-image blog-image-${props.node.position}`,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: Object(lib_api__WEBPACK_IMPORTED_MODULE_3__[\"urlFor\"])(props.node).height(400).url()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"code-filename\",\n        style: {\n          textAlign: \"center\"\n        },\n        children: props.node.alt\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  post\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        md: \"12\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(components_post_header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          post: post\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_4___default.a, {\n          blocks: post.content,\n          serializers: serializers,\n          imageOptions: {\n            w: 320,\n            h: 240,\n            fit: \"max\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n});\nconst getStaticProps = async ({\n  params\n}) => {\n  const post = await Object(lib_api__WEBPACK_IMPORTED_MODULE_3__[\"getPostBySlug\"])(params.slug);\n  return {\n    props: {\n      post: post[0]\n    }\n  };\n};\nconst getStaticPaths = async () => {\n  const posts = await Object(lib_api__WEBPACK_IMPORTED_MODULE_3__[\"getAllPosts\"])();\n  return {\n    paths: posts.map(post => ({\n      params: {\n        slug: post.slug\n      }\n    })),\n    fallback: false\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bc2x1Z10uanM/NDYyYiJdLCJuYW1lcyI6WyJzZXJpYWxpemVycyIsInR5cGVzIiwiY29kZSIsInByb3BzIiwibm9kZSIsImxhbmd1YWdlIiwiZmlsZW5hbWUiLCJpbWFnZSIsInBvc2l0aW9uIiwidXJsRm9yIiwiaGVpZ2h0IiwidXJsIiwidGV4dEFsaWduIiwiYWx0IiwicG9zdCIsImNvbnRlbnQiLCJ3IiwiaCIsImZpdCIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwiZ2V0UG9zdEJ5U2x1ZyIsInNsdWciLCJnZXRTdGF0aWNQYXRocyIsInBvc3RzIiwiZ2V0QWxsUG9zdHMiLCJwYXRocyIsIm1hcCIsImZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBRztBQUNsQkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBR0MsS0FBRCxpQkFDSixxRUFBQyxnRUFBRDtBQUFjLGNBQVEsRUFBRUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQW5DO0FBQUEsaUJBQ0dGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRixJQURkLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxrQkFBZ0NDLEtBQUssQ0FBQ0MsSUFBTixDQUFXRTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRztBQU9MQyxTQUFLLEVBQUdKLEtBQUQsaUJBQ0w7QUFBSyxlQUFTLEVBQUcseUJBQXdCQSxLQUFLLENBQUNDLElBQU4sQ0FBV0ksUUFBUyxFQUE3RDtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQyxzREFBTSxDQUFDTixLQUFLLENBQUNDLElBQVAsQ0FBTixDQUFtQk0sTUFBbkIsQ0FBMEIsR0FBMUIsRUFBK0JDLEdBQS9CO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQStCLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFO0FBQWIsU0FBdEM7QUFBQSxrQkFDR1QsS0FBSyxDQUFDQyxJQUFOLENBQVdTO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRztBQURXLENBQXBCO0FBbUJlLGdFQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQzNCLHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsMkJBQ0UscUVBQUMsbURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxtREFBRDtBQUFLLFVBQUUsRUFBQyxJQUFSO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLDhEQUFEO0FBQVksY0FBSSxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixlQUlFLHFFQUFDLHFFQUFEO0FBQ0UsZ0JBQU0sRUFBRUEsSUFBSSxDQUFDQyxPQURmO0FBRUUscUJBQVcsRUFBRWYsV0FGZjtBQUdFLHNCQUFZLEVBQUU7QUFBRWdCLGFBQUMsRUFBRSxHQUFMO0FBQVVDLGFBQUMsRUFBRSxHQUFiO0FBQWtCQyxlQUFHLEVBQUU7QUFBdkI7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBakJEO0FBbUJPLE1BQU1DLGNBQWMsR0FBRyxPQUFPO0FBQUVDO0FBQUYsQ0FBUCxLQUFzQjtBQUNsRCxRQUFNTixJQUFJLEdBQUcsTUFBTU8sNkRBQWEsQ0FBQ0QsTUFBTSxDQUFDRSxJQUFSLENBQWhDO0FBQ0EsU0FBTztBQUNMbkIsU0FBSyxFQUFFO0FBQ0xXLFVBQUksRUFBRUEsSUFBSSxDQUFDLENBQUQ7QUFETDtBQURGLEdBQVA7QUFLRCxDQVBNO0FBU0EsTUFBTVMsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLDJEQUFXLEVBQS9CO0FBQ0EsU0FBTztBQUNMQyxTQUFLLEVBQUVGLEtBQUssQ0FBQ0csR0FBTixDQUFXYixJQUFELEtBQVc7QUFDMUJNLFlBQU0sRUFBRTtBQUNORSxZQUFJLEVBQUVSLElBQUksQ0FBQ1E7QUFETDtBQURrQixLQUFYLENBQVYsQ0FERjtBQU1MTSxZQUFRLEVBQUU7QUFOTCxHQUFQO0FBUUQsQ0FWTSIsImZpbGUiOiIuL3BhZ2VzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcImxpYi9hcGlcIjtcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuaW1wb3J0IEhpZ2xpZ2h0Q29kZSBmcm9tIFwiY29tcG9uZW50cy9oaWdsaWdodC1jb2RlXCI7XG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tIFwibGliL2FwaVwiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvcG9zdC1oZWFkZXJcIjtcblxuY29uc3Qgc2VyaWFsaXplcnMgPSB7XG4gIHR5cGVzOiB7XG4gICAgY29kZTogKHByb3BzKSA9PiAoXG4gICAgICA8SGlnbGlnaHRDb2RlIGxhbmd1YWdlPXtwcm9wcy5ub2RlLmxhbmd1YWdlfT5cbiAgICAgICAge3Byb3BzLm5vZGUuY29kZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWZpbGVuYW1lXCI+e3Byb3BzLm5vZGUuZmlsZW5hbWV9PC9kaXY+XG4gICAgICA8L0hpZ2xpZ2h0Q29kZT5cbiAgICApLFxuICAgIGltYWdlOiAocHJvcHMpID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmxvZy1pbWFnZSBibG9nLWltYWdlLSR7cHJvcHMubm9kZS5wb3NpdGlvbn1gfT5cbiAgICAgICAgPGltZyBzcmM9e3VybEZvcihwcm9wcy5ub2RlKS5oZWlnaHQoNDAwKS51cmwoKX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWZpbGVuYW1lXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICAgIHtwcm9wcy5ub2RlLmFsdH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbWQ9XCIxMlwiPlxuICAgICAgICAgIDxwcmU+ey8qSlNPTi5zdHJpbmdpZnkocG9zdCwgbnVsbCwgMikqL308L3ByZT5cbiAgICAgICAgICA8UG9zdEhlYWRlciBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxCbG9ja0NvbnRlbnRcbiAgICAgICAgICAgIGJsb2Nrcz17cG9zdC5jb250ZW50fVxuICAgICAgICAgICAgc2VyaWFsaXplcnM9e3NlcmlhbGl6ZXJzfVxuICAgICAgICAgICAgaW1hZ2VPcHRpb25zPXt7IHc6IDMyMCwgaDogMjQwLCBmaXQ6IFwibWF4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0OiBwb3N0WzBdLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKChwb3N0KSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcbiAgICAgIH0sXG4gICAgfSkpLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[slug].js\n");

/***/ }),

/***/ "@sanity/block-content-to-react":
/*!*************************************************!*\
  !*** external "@sanity/block-content-to-react" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/block-content-to-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIj9mYWQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/block-content-to-react\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiPzNmYTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/client\n");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sanity/image-url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2ltYWdlLXVybFwiPzhlZmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHNhbml0eS9pbWFnZS11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2ltYWdlLXVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sanity/image-url\n");

/***/ }),

/***/ "highlight.js":
/*!*******************************!*\
  !*** external "highlight.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"highlight.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdobGlnaHQuanNcIj9iZGUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImhpZ2hsaWdodC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///highlight.js\n");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIj9iZDc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1vbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///moment\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });