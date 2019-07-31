"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pink2 = _interopRequireDefault(require("@material-ui/core/colors/pink"));

var _blue2 = _interopRequireDefault(require("@material-ui/core/colors/blue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  palette: {
    primary: _blue2["default"],
    secondary: _pink2["default"]
  },
  typography: {
    useNextVariants: true
  }
};
exports["default"] = _default;
module.exports = exports.default;