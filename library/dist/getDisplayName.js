"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getDisplayName(WrappedComponent) {
  if (typeof WrappedComponent === 'string') {
    return WrappedComponent;
  }

  if (!WrappedComponent) {
    return null;
  }

  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

var _default = getDisplayName;
exports["default"] = _default;
module.exports = exports.default;