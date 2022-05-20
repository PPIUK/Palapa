"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DisclosureOpenSymbolRenderer;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _useSymbolicMarkerRendererStyles = _interopRequireDefault(require("./useSymbolicMarkerRendererStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DisclosureOpenSymbolRenderer(props) {
  const {
    prefixStyle: {
      top
    },
    prefixSize
  } = (0, _useSymbolicMarkerRendererStyles.default)(props, 1);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      top,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderTopWidth: prefixSize,
      borderTopColor: props.color,
      borderLeftWidth: prefixSize / 2,
      borderLeftColor: 'transparent',
      borderRightWidth: prefixSize / 2,
      borderRightColor: 'transparent'
    }
  });
}
//# sourceMappingURL=DisclosureOpenSymbolRenderer.js.map