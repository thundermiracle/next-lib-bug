"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _document = require("next/document");

var _ServerStyleSheets = _interopRequireDefault(require("@material-ui/styles/ServerStyleSheets"));

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));

var _server = _interopRequireDefault(require("styled-jsx/server"));

var _getDisplayName = _interopRequireDefault(require("./getDisplayName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Enable material-ui in nextjs._document.
 * DocumentComponent: next/document.
 * @param {MUITheme} theme
 * @param {next/document} DocumentComponent
 */
var extendsWithMui = function extendsWithMui(themeInput) {
  return function (DocumentComponent) {
    // wrap de
    var theme = (0, _createMuiTheme["default"])(themeInput);

    var ExtendsWithMui =
    /*#__PURE__*/
    function (_DocumentComponent) {
      _inherits(ExtendsWithMui, _DocumentComponent);

      function ExtendsWithMui() {
        _classCallCheck(this, ExtendsWithMui);

        return _possibleConstructorReturn(this, _getPrototypeOf(ExtendsWithMui).apply(this, arguments));
      }

      _createClass(ExtendsWithMui, [{
        key: "render",
        value: function render() {
          return _react["default"].createElement("html", {
            lang: "en"
          }, _react["default"].createElement(_document.Head, null, _react["default"].createElement("meta", {
            charSet: "utf-8"
          }), _react["default"].createElement("meta", {
            name: "viewport",
            content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          }), _react["default"].createElement("meta", {
            name: "theme-color",
            content: theme.palette.primary.main
          }), _react["default"].createElement("link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          })), _react["default"].createElement("body", null, _react["default"].createElement(_document.Main, null), _react["default"].createElement(_document.NextScript, null)));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(ctx) {
            var sheets, originalRenderPage, superProps;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Resolution order
                    //
                    // On the server:
                    // 1. app.getInitialProps
                    // 2. page.getInitialProps
                    // 3. document.getInitialProps
                    // 4. app.render
                    // 5. page.render
                    // 6. document.render
                    //
                    // On the server with error:
                    // 1. document.getInitialProps
                    // 2. app.render
                    // 3. page.render
                    // 4. document.render
                    //
                    // On the client
                    // 1. app.getInitialProps
                    // 2. page.getInitialProps
                    // 3. app.render
                    // 4. page.render
                    // inject theme by hoc
                    sheets = new _ServerStyleSheets["default"]();
                    originalRenderPage = ctx.renderPage;

                    ctx.renderPage = function () {
                      return originalRenderPage({
                        // wrap Jss context
                        enhanceApp: function enhanceApp(App) {
                          return function (props) {
                            return sheets.collect(_react["default"].createElement(App, props));
                          };
                        }
                      });
                    }; // get props after override the renderPage to get jss props


                    _context.next = 5;
                    return _get(_getPrototypeOf(ExtendsWithMui), "getInitialProps", this).call(this, ctx);

                  case 5:
                    superProps = _context.sent;
                    // push to head instead of override styles
                    superProps.head.push(_react["default"].createElement(_react["default"].Fragment, {
                      key: "jss-server-side"
                    }, sheets.getStyleElement(), (0, _server["default"])() || null));
                    return _context.abrupt("return", _objectSpread({}, superProps));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return ExtendsWithMui;
    }(DocumentComponent);

    _defineProperty(ExtendsWithMui, "displayName", "extendsWithMui(".concat((0, _getDisplayName["default"])(DocumentComponent), ")"));

    return ExtendsWithMui;
  };
};

var _default = extendsWithMui;
exports["default"] = _default;
module.exports = exports.default;