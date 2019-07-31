"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _document = require("next/document");

var makeDocument = function makeDocument() {
  var applyBootStrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return function (DocumentComponent) {
    var withMakeDocument =
    /*#__PURE__*/
    function (_DocumentComponent) {
      (0, _inherits2["default"])(withMakeDocument, _DocumentComponent);

      function withMakeDocument() {
        (0, _classCallCheck2["default"])(this, withMakeDocument);
        return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(withMakeDocument).apply(this, arguments));
      }

      (0, _createClass2["default"])(withMakeDocument, [{
        key: "render",
        value: function render() {
          return _react["default"].createElement(_document.Html, null, _react["default"].createElement(_document.Head, null, applyBootStrap && _react["default"].createElement("link", {
            rel: "stylesheet",
            href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
            integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
            crossOrigin: "anonymous"
          })), _react["default"].createElement("body", null, _react["default"].createElement(_document.Main, null), _react["default"].createElement(_document.NextScript, null)));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(ctx) {
            var initialProps;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return (0, _get2["default"])((0, _getPrototypeOf2["default"])(withMakeDocument), "getInitialProps", this).call(this, ctx);

                  case 2:
                    initialProps = _context.sent;
                    return _context.abrupt("return", (0, _objectSpread2["default"])({}, initialProps));

                  case 4:
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
      return withMakeDocument;
    }(DocumentComponent);

    return withMakeDocument;
  };
};

var _default = makeDocument;
exports["default"] = _default;