"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRenderError = defaultRenderError;
exports.defaultRenderLoading = defaultRenderLoading;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = _reactNative.StyleSheet.create({
  alignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorText: {
    fontStyle: 'italic',
    fontSize: 16
  }
});

function defaultRenderError(source) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    testID: "loader-error",
    style: styles.alignCenter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.errorText
  }, "Failed to load HTML from ", source.uri));
}

function defaultRenderLoading() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    testID: "loader-loading",
    style: styles.alignCenter
  }, /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, null));
}

const sourceLoaderContext = /*#__PURE__*/_react.default.createContext({
  remoteErrorView: defaultRenderError,
  remoteLoadingView: defaultRenderLoading
});

var _default = sourceLoaderContext;
exports.default = _default;
//# sourceMappingURL=sourceLoaderContext.js.map