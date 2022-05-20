"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GenericPressable;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _SharedPropsProvider = require("./context/SharedPropsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function GenericPressable({
  style,
  children,
  borderless = false,
  ...otherProps
}) {
  const {
    pressableHightlightColor,
    GenericPressable: UserProvidedPressable
  } = (0, _SharedPropsProvider.useSharedProps)();

  if (UserProvidedPressable) {
    return /*#__PURE__*/_react.default.createElement(UserProvidedPressable, _extends({
      style: style,
      borderless: borderless
    }, otherProps), children);
  }

  if (_reactNative.Platform.OS === 'android') {
    // TouchableNativeFeedback does not support a
    // style prop. So we must wrap it inside a View.
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: style
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableNativeFeedback, _extends({
      useForeground: true,
      background: _reactNative.TouchableNativeFeedback.Ripple(pressableHightlightColor, borderless)
    }, otherProps), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      testID: "generic-pressable"
    }, children)));
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, _extends({
    underlayColor: pressableHightlightColor,
    style: style
  }, otherProps), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    testID: "generic-pressable"
  }, children));
}
//# sourceMappingURL=GenericPressable.js.map