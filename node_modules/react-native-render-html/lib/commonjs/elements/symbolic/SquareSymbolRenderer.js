"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SquareSymbolRenderer;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useSymbolicMarkerRendererStyles = _interopRequireDefault(require("./useSymbolicMarkerRendererStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SquareSymbolRenderer(props) {
  const {
    prefixStyle
  } = (0, _useSymbolicMarkerRendererStyles.default)(props, 1.2);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: props.color,
      ...prefixStyle
    }
  });
}
//# sourceMappingURL=SquareSymbolRenderer.js.map