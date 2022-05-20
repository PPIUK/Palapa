"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _GenericPressable = _interopRequireDefault(require("./GenericPressable"));

var _getNativePropsForTNode = _interopRequireDefault(require("./helpers/getNativePropsForTNode"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderBlockContent(props) {
  const nativeProps = (0, _getNativePropsForTNode.default)(props);
  return /*#__PURE__*/_react.default.createElement(typeof nativeProps.onPress === 'function' ? _GenericPressable.default : _reactNative.View, nativeProps);
}

var _default = renderBlockContent;
exports.default = _default;
//# sourceMappingURL=renderBlockContent.js.map