"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IMGElementContentLoading;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default loading view for the {@link IMGElement} component.
 */
function IMGElementContentLoading({
  dimensions,
  children
}) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: dimensions,
    testID: "image-loading"
  }, children);
}
//# sourceMappingURL=IMGElementContentLoading.js.map