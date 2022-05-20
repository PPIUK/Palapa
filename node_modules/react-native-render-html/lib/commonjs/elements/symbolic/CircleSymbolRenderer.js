"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CircleSymbolRenderer;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useSymbolicMarkerRendererStyles = _interopRequireDefault(require("./useSymbolicMarkerRendererStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CircleSymbolRenderer(props) {
  const {
    prefixSize,
    prefixStyle
  } = (0, _useSymbolicMarkerRendererStyles.default)(props);
  const style = {
    borderColor: props.color,
    borderWidth: prefixSize / 10,
    borderRadius: prefixSize,
    ...prefixStyle
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  });
}
//# sourceMappingURL=CircleSymbolRenderer.js.map