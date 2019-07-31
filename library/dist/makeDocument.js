"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs2/core-js/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.DefaultNextDocument = exports["default"] = void 0;

var _document = _interopRequireDefault(require("next/document"));

var _extendsDocument = _interopRequireDefault(require("./extendsDocument"));

var makeNextDocument = function makeNextDocument(applyBootstrap) {
  var DocumentComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _document["default"];
  return (0, _extendsDocument["default"])(applyBootstrap)(DocumentComponent);
};

var _default = makeNextDocument;
exports["default"] = _default;
var DefaultNextDocument = makeNextDocument();
exports.DefaultNextDocument = DefaultNextDocument;