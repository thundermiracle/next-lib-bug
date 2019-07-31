"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultNextDocument = exports["default"] = void 0;

var _document = _interopRequireDefault(require("next/document"));

var _extendsMui = _interopRequireDefault(require("./extendsMui"));

var _defaultTheme = _interopRequireDefault(require("./defaultTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import compose from '../util/compose';

/**
 * Making _document from next/document.
 * Including material-ui.
 * @param {MUITheme} theme
 */
var makeNextDocument = function makeNextDocument(theme) {
  return (0, _extendsMui["default"])(theme || _defaultTheme["default"])(_document["default"]);
};

var _default = makeNextDocument;
exports["default"] = _default;
var DefaultNextDocument = makeNextDocument();
exports.DefaultNextDocument = DefaultNextDocument;