"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./node_modules/@mui/material/CssBaseline/CssBaseline.js":
/*!***************************************************************!*\
  !*** ./node_modules/@mui/material/CssBaseline/CssBaseline.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"body\": function() { return /* binding */ body; },\n/* harmony export */   \"html\": function() { return /* binding */ html; },\n/* harmony export */   \"styles\": function() { return /* binding */ styles; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/useThemeProps */ \"./node_modules/@mui/material/styles/useThemeProps.js\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GlobalStyles */ \"./node_modules/@mui/material/GlobalStyles/index.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\nconst html = (theme, enableColorScheme) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  WebkitFontSmoothing: 'antialiased',\n  // Antialiasing.\n  MozOsxFontSmoothing: 'grayscale',\n  // Antialiasing.\n  // Change from `box-sizing: content-box` so that `width`\n  // is not affected by `padding` or `border`.\n  boxSizing: 'border-box',\n  // Fix font resize problem in iOS\n  WebkitTextSizeAdjust: '100%'\n}, enableColorScheme && {\n  colorScheme: theme.palette.mode\n});\nconst body = theme => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n  color: (theme.vars || theme).palette.text.primary\n}, theme.typography.body1, {\n  backgroundColor: (theme.vars || theme).palette.background.default,\n  '@media print': {\n    // Save printer ink.\n    backgroundColor: (theme.vars || theme).palette.common.white\n  }\n});\nconst styles = (theme, enableColorScheme = false) => {\n  var _theme$components, _theme$components$Mui;\n\n  let defaultStyles = {\n    html: html(theme, enableColorScheme),\n    '*, *::before, *::after': {\n      boxSizing: 'inherit'\n    },\n    'strong, b': {\n      fontWeight: theme.typography.fontWeightBold\n    },\n    body: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      margin: 0\n    }, body(theme), {\n      // Add support for document.body.requestFullScreen().\n      // Other elements, if background transparent, are not supported.\n      '&::backdrop': {\n        backgroundColor: (theme.vars || theme).palette.background.default\n      }\n    })\n  };\n  const themeOverrides = (_theme$components = theme.components) == null ? void 0 : (_theme$components$Mui = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components$Mui.styleOverrides;\n\n  if (themeOverrides) {\n    defaultStyles = [defaultStyles, themeOverrides];\n  }\n\n  return defaultStyles;\n};\n/**\n * Kickstart an elegant, consistent, and simple baseline to build upon.\n */\n\nfunction CssBaseline(inProps) {\n  const props = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    props: inProps,\n    name: 'MuiCssBaseline'\n  });\n  const {\n    children,\n    enableColorScheme = false\n  } = props;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      styles: theme => styles(theme, enableColorScheme)\n    }), children]\n  });\n}\n\n true ? CssBaseline.propTypes\n/* remove-proptypes */\n= {\n  // ----------------------------- Warning --------------------------------\n  // | These PropTypes are generated from the TypeScript type definitions |\n  // |     To update them edit the d.ts file and run \"yarn proptypes\"     |\n  // ----------------------------------------------------------------------\n\n  /**\n   * You can wrap a node.\n   */\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),\n\n  /**\n   * Enable `color-scheme` CSS property to use `theme.palette.mode`.\n   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme\n   * For browser support, check out https://caniuse.com/?search=color-scheme\n   * @default false\n   */\n  enableColorScheme: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)\n} : 0;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CssBaseline);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZS9Dc3NCYXNlbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDM0I7QUFDSTtBQUNpQjtBQUNUO0FBQ0s7QUFDRTtBQUMzQywyQ0FBMkMsOEVBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNNLHNCQUFzQiw4RUFBUTtBQUNyQztBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxVQUFVLDhFQUFRO0FBQ2xCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixpRUFBYTtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQkFBc0IsdURBQUssQ0FBQywyQ0FBYztBQUMxQyw0QkFBNEIsc0RBQUksQ0FBQyxxREFBWTtBQUM3QztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQWM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBYztBQUNuQyxFQUFFLEVBQUUsQ0FBTTtBQUNWLCtEQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUvQ3NzQmFzZWxpbmUuanM/ODIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXNlVGhlbWVQcm9wcyBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWVQcm9wcyc7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJy4uL0dsb2JhbFN0eWxlcyc7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGNvbnN0IGh0bWwgPSAodGhlbWUsIGVuYWJsZUNvbG9yU2NoZW1lKSA9PiBfZXh0ZW5kcyh7XG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIC8vIEFudGlhbGlhc2luZy5cbiAgTW96T3N4Rm9udFNtb290aGluZzogJ2dyYXlzY2FsZScsXG4gIC8vIEFudGlhbGlhc2luZy5cbiAgLy8gQ2hhbmdlIGZyb20gYGJveC1zaXppbmc6IGNvbnRlbnQtYm94YCBzbyB0aGF0IGB3aWR0aGBcbiAgLy8gaXMgbm90IGFmZmVjdGVkIGJ5IGBwYWRkaW5nYCBvciBgYm9yZGVyYC5cbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIC8vIEZpeCBmb250IHJlc2l6ZSBwcm9ibGVtIGluIGlPU1xuICBXZWJraXRUZXh0U2l6ZUFkanVzdDogJzEwMCUnXG59LCBlbmFibGVDb2xvclNjaGVtZSAmJiB7XG4gIGNvbG9yU2NoZW1lOiB0aGVtZS5wYWxldHRlLm1vZGVcbn0pO1xuZXhwb3J0IGNvbnN0IGJvZHkgPSB0aGVtZSA9PiBfZXh0ZW5kcyh7XG4gIGNvbG9yOiAodGhlbWUudmFycyB8fCB0aGVtZSkucGFsZXR0ZS50ZXh0LnByaW1hcnlcbn0sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTEsIHtcbiAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUudmFycyB8fCB0aGVtZSkucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQsXG4gICdAbWVkaWEgcHJpbnQnOiB7XG4gICAgLy8gU2F2ZSBwcmludGVyIGluay5cbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZS52YXJzIHx8IHRoZW1lKS5wYWxldHRlLmNvbW1vbi53aGl0ZVxuICB9XG59KTtcbmV4cG9ydCBjb25zdCBzdHlsZXMgPSAodGhlbWUsIGVuYWJsZUNvbG9yU2NoZW1lID0gZmFsc2UpID0+IHtcbiAgdmFyIF90aGVtZSRjb21wb25lbnRzLCBfdGhlbWUkY29tcG9uZW50cyRNdWk7XG5cbiAgbGV0IGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgaHRtbDogaHRtbCh0aGVtZSwgZW5hYmxlQ29sb3JTY2hlbWUpLFxuICAgICcqLCAqOjpiZWZvcmUsICo6OmFmdGVyJzoge1xuICAgICAgYm94U2l6aW5nOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgICdzdHJvbmcsIGInOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkXG4gICAgfSxcbiAgICBib2R5OiBfZXh0ZW5kcyh7XG4gICAgICBtYXJnaW46IDBcbiAgICB9LCBib2R5KHRoZW1lKSwge1xuICAgICAgLy8gQWRkIHN1cHBvcnQgZm9yIGRvY3VtZW50LmJvZHkucmVxdWVzdEZ1bGxTY3JlZW4oKS5cbiAgICAgIC8vIE90aGVyIGVsZW1lbnRzLCBpZiBiYWNrZ3JvdW5kIHRyYW5zcGFyZW50LCBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICAgICcmOjpiYWNrZHJvcCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUudmFycyB8fCB0aGVtZSkucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHRcbiAgICAgIH1cbiAgICB9KVxuICB9O1xuICBjb25zdCB0aGVtZU92ZXJyaWRlcyA9IChfdGhlbWUkY29tcG9uZW50cyA9IHRoZW1lLmNvbXBvbmVudHMpID09IG51bGwgPyB2b2lkIDAgOiAoX3RoZW1lJGNvbXBvbmVudHMkTXVpID0gX3RoZW1lJGNvbXBvbmVudHMuTXVpQ3NzQmFzZWxpbmUpID09IG51bGwgPyB2b2lkIDAgOiBfdGhlbWUkY29tcG9uZW50cyRNdWkuc3R5bGVPdmVycmlkZXM7XG5cbiAgaWYgKHRoZW1lT3ZlcnJpZGVzKSB7XG4gICAgZGVmYXVsdFN0eWxlcyA9IFtkZWZhdWx0U3R5bGVzLCB0aGVtZU92ZXJyaWRlc107XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFN0eWxlcztcbn07XG4vKipcbiAqIEtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uXG4gKi9cblxuZnVuY3Rpb24gQ3NzQmFzZWxpbmUoaW5Qcm9wcykge1xuICBjb25zdCBwcm9wcyA9IHVzZVRoZW1lUHJvcHMoe1xuICAgIHByb3BzOiBpblByb3BzLFxuICAgIG5hbWU6ICdNdWlDc3NCYXNlbGluZSdcbiAgfSk7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlbmFibGVDb2xvclNjaGVtZSA9IGZhbHNlXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fanN4cyhSZWFjdC5GcmFnbWVudCwge1xuICAgIGNoaWxkcmVuOiBbLyojX19QVVJFX18qL19qc3goR2xvYmFsU3R5bGVzLCB7XG4gICAgICBzdHlsZXM6IHRoZW1lID0+IHN0eWxlcyh0aGVtZSwgZW5hYmxlQ29sb3JTY2hlbWUpXG4gICAgfSksIGNoaWxkcmVuXVxuICB9KTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ3NzQmFzZWxpbmUucHJvcFR5cGVzXG4vKiByZW1vdmUtcHJvcHR5cGVzICovXG49IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gd3JhcCBhIG5vZGUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEVuYWJsZSBgY29sb3Itc2NoZW1lYCBDU1MgcHJvcGVydHkgdG8gdXNlIGB0aGVtZS5wYWxldHRlLm1vZGVgLlxuICAgKiBGb3IgbW9yZSBkZXRhaWxzLCBjaGVjayBvdXQgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NvbG9yLXNjaGVtZVxuICAgKiBGb3IgYnJvd3NlciBzdXBwb3J0LCBjaGVjayBvdXQgaHR0cHM6Ly9jYW5pdXNlLmNvbS8/c2VhcmNoPWNvbG9yLXNjaGVtZVxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgZW5hYmxlQ29sb3JTY2hlbWU6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgQ3NzQmFzZWxpbmU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mui/material/CssBaseline/CssBaseline.js\n");

/***/ }),

/***/ "./node_modules/@mui/material/CssBaseline/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/material/CssBaseline/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");


/***/ }),

/***/ "./Layout/index.tsx":
/*!**************************!*\
  !*** ./Layout/index.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\nvar Layout = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                maxWidth: \"xl\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\Layout\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9MYXlvdXQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDRztBQUNtQjtBQUNJO0FBQ1Y7QUFNMUMsSUFBTUssTUFBTSxHQUEyQixnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFRO0lBQ2hELHFCQUNFOzswQkFDRSw4REFBQ0wsa0RBQUk7O2tDQUNILDhEQUFDTSxPQUFLO2tDQUFDLE1BQUk7Ozs7OzZCQUFRO2tDQUNuQiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzZCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsQzswQkFDUCw4REFBQ1QsMERBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNELGlFQUFXOzs7O3FCQUFHOzBCQUNmLDhEQUFDRCwrREFBUztnQkFBQ1ksUUFBUSxFQUFDLElBQUk7MEJBQUVSLFFBQVE7Ozs7O3FCQUFhOztvQkFDOUMsQ0FDSDtDQUNIO0FBYktELEtBQUFBLE1BQU07QUFlWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0xheW91dC9pbmRleC50c3g/NzM4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZDPElMYXlvdXRQcm9wcz4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J3hsJz57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiQ29udGFpbmVyIiwiQ3NzQmFzZWxpbmUiLCJIZWFkZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYXhXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layout/index.tsx\n");

/***/ })

});