"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IMGElementContentAlt;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = _reactNative.StyleSheet.create({
  altBox: {
    borderWidth: _reactNative.StyleSheet.hairlineWidth,
    overflow: 'hidden',
    justifyContent: 'center'
  },
  altText: {
    textAlign: 'center',
    fontStyle: 'italic'
  }
});
/**
 * Alt view for the {@link IMGElement} component.
 */


function IMGElementContentAlt({
  dimensions,
  alt,
  altColor,
  testID,
  children
}) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.altBox, dimensions, {
      borderColor: altColor
    }],
    accessibilityRole: "image",
    accessibilityLabel: alt,
    testID: testID
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [styles.altText, {
      color: altColor
    }]
  }, alt), children);
}
//# sourceMappingURL=IMGElementContentAlt.js.map