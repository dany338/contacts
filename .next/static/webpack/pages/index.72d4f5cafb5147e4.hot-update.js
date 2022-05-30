"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/Buttons.tsx":
/*!***************************************!*\
  !*** ./components/Header/Buttons.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/index.js\");\n/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tooltip */ \"./node_modules/@mui/material/Tooltip/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar Buttons = function(param) {\n    var pages = param.pages, isLogged = param.isLogged, close = param.close, handleOpenUserMenu = param.handleOpenUserMenu, handleCloseUserMenu = param.handleCloseUserMenu, anchorElUser = param.anchorElUser, classPath = param.classPath;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        sx: {\n            flexGrow: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Open settings\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    onClick: handleOpenUserMenu,\n                    sx: {\n                        p: 0\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        alt: \"Contact\",\n                        src: \"/assets/img/trabajador.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    mt: \"45px\"\n                },\n                id: \"menu-appbar\",\n                anchorEl: anchorElUser,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"right\"\n                },\n                keepMounted: true,\n                transformOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"right\"\n                },\n                open: Boolean(anchorElUser),\n                onClose: handleCloseUserMenu,\n                children: pages.filter(function(item) {\n                    return item.isLogged === isLogged;\n                }).map(function(page, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: page.route,\n                        className: classPath(page.route),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            onClick: close,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                textAlign: \"center\",\n                                children: page.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    }, \"buttons-\".concat(index), false, {\n                        fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\academia-moviles-projects\\\\contacts\\\\components\\\\Header\\\\Buttons.tsx\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, _this);\n};\n_c = Buttons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Buttons);\nvar _c;\n$RefreshReg$(_c, \"Buttons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9CdXR0b25zLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ087QUFDYztBQUNBO0FBQ1o7QUFDSTtBQUNFO0FBQ0U7QUFhOUMsSUFBTVMsT0FBTyxHQUE0QjtRQUFHQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxrQkFBa0IsU0FBbEJBLGtCQUFrQixFQUFFQyxtQkFBbUIsU0FBbkJBLG1CQUFtQixFQUFFQyxZQUFZLFNBQVpBLFlBQVksRUFBRUMsU0FBUyxTQUFUQSxTQUFTO3lCQUNsSSw4REFBQ2QseURBQUc7UUFBQ2UsRUFBRSxFQUFFO1lBQUVDLFFBQVEsRUFBRSxDQUFDO1NBQUU7OzBCQUN0Qiw4REFBQ1gsNkRBQU87Z0JBQUNZLEtBQUssRUFBQyxlQUFlOzBCQUM1Qiw0RUFBQ2hCLGdFQUFVO29CQUFDaUIsT0FBTyxFQUFFUCxrQkFBa0I7b0JBQUVJLEVBQUUsRUFBRTt3QkFBRUksQ0FBQyxFQUFFLENBQUM7cUJBQUU7OEJBQ25ELDRFQUFDZiw0REFBTTt3QkFBQ2dCLEdBQUcsRUFBQyxTQUFTO3dCQUFDQyxHQUFHLEVBQUMsNEJBQTRCOzs7Ozs2QkFBRzs7Ozs7eUJBQzlDOzs7OztxQkFDTDswQkFDViw4REFBQ2xCLDBEQUFJO2dCQUNIWSxFQUFFLEVBQUU7b0JBQUVPLEVBQUUsRUFBRSxNQUFNO2lCQUFFO2dCQUNsQkMsRUFBRSxFQUFDLGFBQWE7Z0JBQ2hCQyxRQUFRLEVBQUVYLFlBQVk7Z0JBQ3RCWSxZQUFZLEVBQUU7b0JBQ1pDLFFBQVEsRUFBRSxLQUFLO29CQUNmQyxVQUFVLEVBQUUsT0FBTztpQkFDcEI7Z0JBQ0RDLFdBQVc7Z0JBQ1hDLGVBQWUsRUFBRTtvQkFDZkgsUUFBUSxFQUFFLEtBQUs7b0JBQ2ZDLFVBQVUsRUFBRSxPQUFPO2lCQUNwQjtnQkFDREcsSUFBSSxFQUFFQyxPQUFPLENBQUNsQixZQUFZLENBQUM7Z0JBQzNCbUIsT0FBTyxFQUFFcEIsbUJBQW1COzBCQUUzQkosS0FBSyxDQUFDeUIsTUFBTSxDQUFDLFNBQUNDLElBQVM7MkJBQUtBLElBQUksQ0FBQ3pCLFFBQVEsS0FBS0EsUUFBUTtpQkFBQSxDQUFDLENBQUMwQixHQUFHLENBQUMsU0FBQ0MsSUFBUyxFQUFFQyxLQUFVO3lDQUNqRiw4REFBQ3RDLGtEQUFJO3dCQUFDdUMsSUFBSSxFQUFFRixJQUFJLENBQUNHLEtBQUs7d0JBQTJCQyxTQUFTLEVBQUUxQixTQUFTLENBQUNzQixJQUFJLENBQUNHLEtBQUssQ0FBQztrQ0FDL0UsNEVBQUNqQyw4REFBUTs0QkFBQ1ksT0FBTyxFQUFFUixLQUFLO3NDQUN0Qiw0RUFBQ1IsZ0VBQVU7Z0NBQUN1QyxTQUFTLEVBQUMsUUFBUTswQ0FBRUwsSUFBSSxDQUFDTSxJQUFJOzs7OztxQ0FBYzs7Ozs7aUNBQzlDO3VCQUhnQixVQUFTLENBQVEsT0FBTkwsS0FBSyxDQUFFOzs7OzZCQUl4QztpQkFDUixDQUFDOzs7OztxQkFDRzs7Ozs7O2FBQ0g7Q0FDUDtBQWhDSzlCLEtBQUFBLE9BQU87QUFrQ2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci9CdXR0b25zLnRzeD8xYzEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCBDb3dvcmtlciBmcm9tICcuLi8uLi9hc3NldHMvaW1nL3RyYWJhamFkb3IucG5nJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbnNQcm9wcyB7XHJcbiAgcGFnZXM6IGFueTtcclxuICBpc0xvZ2dlZDogYm9vbGVhbjtcclxuICBjbG9zZTogKGU6IGFueSkgPT4gdm9pZDtcclxuICBoYW5kbGVPcGVuVXNlck1lbnU6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZDtcclxuICBoYW5kbGVDbG9zZVVzZXJNZW51OiAoKSA9PiB2b2lkO1xyXG4gIGFuY2hvckVsVXNlcjogbnVsbCB8IEhUTUxFbGVtZW50O1xyXG4gIGNsYXNzUGF0aDogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25zOiBSZWFjdC5GQzxJQnV0dG9uc1Byb3BzPiA9ICh7IHBhZ2VzLCBpc0xvZ2dlZCwgY2xvc2UsIGhhbmRsZU9wZW5Vc2VyTWVudSwgaGFuZGxlQ2xvc2VVc2VyTWVudSwgYW5jaG9yRWxVc2VyLCBjbGFzc1BhdGggfSkgPT4gKFxyXG4gIDxCb3ggc3g9e3sgZmxleEdyb3c6IDAgfX0+XHJcbiAgICA8VG9vbHRpcCB0aXRsZT1cIk9wZW4gc2V0dGluZ3NcIj5cclxuICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlblVzZXJNZW51fSBzeD17eyBwOiAwIH19PlxyXG4gICAgICAgIDxBdmF0YXIgYWx0PVwiQ29udGFjdFwiIHNyYz0nL2Fzc2V0cy9pbWcvdHJhYmFqYWRvci5wbmcnIC8+XHJcbiAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDwvVG9vbHRpcD5cclxuICAgIDxNZW51XHJcbiAgICAgIHN4PXt7IG10OiAnNDVweCcgfX1cclxuICAgICAgaWQ9XCJtZW51LWFwcGJhclwiXHJcbiAgICAgIGFuY2hvckVsPXthbmNob3JFbFVzZXJ9XHJcbiAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICB9fVxyXG4gICAgICBrZWVwTW91bnRlZFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgfX1cclxuICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbFVzZXIpfVxyXG4gICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVzZXJNZW51fVxyXG4gICAgPlxyXG4gICAgICB7cGFnZXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaXNMb2dnZWQgPT09IGlzTG9nZ2VkKS5tYXAoKHBhZ2U6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3BhZ2Uucm91dGV9IGtleT17YGJ1dHRvbnMtJHtpbmRleH1gfSBjbGFzc05hbWU9e2NsYXNzUGF0aChwYWdlLnJvdXRlKX0+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17Y2xvc2V9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB0ZXh0QWxpZ249XCJjZW50ZXJcIj57cGFnZS5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApKX1cclxuICAgIDwvTWVudT5cclxuICA8L0JveD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJCb3giLCJJY29uQnV0dG9uIiwiVHlwb2dyYXBoeSIsIk1lbnUiLCJBdmF0YXIiLCJUb29sdGlwIiwiTWVudUl0ZW0iLCJCdXR0b25zIiwicGFnZXMiLCJpc0xvZ2dlZCIsImNsb3NlIiwiaGFuZGxlT3BlblVzZXJNZW51IiwiaGFuZGxlQ2xvc2VVc2VyTWVudSIsImFuY2hvckVsVXNlciIsImNsYXNzUGF0aCIsInN4IiwiZmxleEdyb3ciLCJ0aXRsZSIsIm9uQ2xpY2siLCJwIiwiYWx0Iiwic3JjIiwibXQiLCJpZCIsImFuY2hvckVsIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwia2VlcE1vdW50ZWQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJvcGVuIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwicGFnZSIsImluZGV4IiwiaHJlZiIsInJvdXRlIiwiY2xhc3NOYW1lIiwidGV4dEFsaWduIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/Buttons.tsx\n");

/***/ })

});