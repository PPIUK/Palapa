"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emptyProps = {};

const WBRRenderer = function WordBreakRenderer() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, emptyProps, '\u200b');
};

WBRRenderer.isNativeInternalTextRenderer = true;
var _default = WBRRenderer;
exports.default = _default;
//# sourceMappingURL=WBRRenderer.js.map