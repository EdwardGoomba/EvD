module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: #000;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 2em;\n  padding-top: 0.8em;\n  text-decoration: none;\n  list-style: none;\n  font-size: 1.2em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: source-code-pro, sans-serif;\n  display: flex;\n  text-decoration: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 10%;\n  height: 10%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: acumin-pro, sans-serif;\n  font-size: 1.5em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 9em;\n  padding-bottom: =3em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Footer

var FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject()); // Logo Style

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3(_templateObject2());
var LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject3()); // Nav Style

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject4());
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject5());
var NavDirective = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject6());

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FooterWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, "Edward V Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLinks, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavDirective, {
    href: "https://dribbble.com/edwardgoomba"
  }, "dribbble")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLinks, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavDirective, {
    href: "https://twitter.com/EdwardGoomba"
  }, "twitter"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_NavDirective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled/NavDirective */ "./components/styled/NavDirective.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 1em;\n  padding-top: 0.8em;\n  text-decoration: none;\n  list-style: none;\n  font-size: 1.5em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: acumin-pro, sans-serif;\n  display: flex;\n  text-decoration: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: acumin-pro, sans-serif;\n  font-size: 1.5em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 2em;\n  padding-bottom: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 // Styled Components

 // Header

var HeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject()); // Logo Style

var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3(_templateObject2()); // Nav Style

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul(_templateObject3());
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject4());

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderWrap, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_NavDirective__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Edward V Design"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Nav, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavLinks, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_NavDirective__WEBPACK_IMPORTED_MODULE_3__["default"], {
    brand: true
  }, "Start your Project")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 80vw;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // Import components


 // Styled Components

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/styled/NavDirective.js":
/*!*******************************************!*\
  !*** ./components/styled/NavDirective.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var NavDirective = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a(_templateObject(), function (props) {
  return props.brand ? '#0872a1' : '#000';
});
/* harmony default export */ __webpack_exports__["default"] = (NavDirective);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_styled_NavDirective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styled/NavDirective */ "./components/styled/NavDirective.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 650px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 480px;\n  padding-top: 5em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-family: source-code-pro, monospace;\n  font-size: 1.6em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: acumin-pro, sans-serif;\n  font-size: 3em;\n  padding-top: 1.5em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-family: roboto, sans-serif;\n  font-size: 1.4em;\n  font-weight: bold;\n  color: #000;\n  text-decoration: none;\n  padding-bottom: 0.3em;\n  border-bottom: 2px solid #000;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: roboto, sans-serif;\n  font-size: 1.4em;\n  line-height: 1.8em;\n  padding-bottom: 1.6em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: acumin-pro, sans-serif;\n  font-size: 3.5em;\n  line-height: 1.3em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



 // Import components


 // Styled Components

var Hello = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject());
var Details = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h4(_templateObject2());
var Email = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject3());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2(_templateObject4());
var SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h3(_templateObject5());
var IntroContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());
var DetailsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7());

var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IntroContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hello, null, "Nice to meet you!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, null, "So your interested in working with me on a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/product"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled_NavDirective__WEBPACK_IMPORTED_MODULE_4__["default"], {
    brand: true
  }, "product design")), " or ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/system"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled_NavDirective__WEBPACK_IMPORTED_MODULE_4__["default"], {
    brand: true
  }, "design system")), " project?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), "To get started, send me an email with the following:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DetailsContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Details, null, "Your Name", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Email Address", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "What your interested in: (Product, System)", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Info about your project:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "(Web app? Mobile app? Project Stage? Timeline? Budget?)"), "Literally just copy and past that right up there into this email below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Email, {
    href: "mailto:ask@edwardvdesign.com"
  }, "ask@edwardvdesign.com"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Heading, null, "What else do I do?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubHeading, null, "I write.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/thoughts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled_NavDirective__WEBPACK_IMPORTED_MODULE_4__["default"], {
    brand: true
  }, " Check it out."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map