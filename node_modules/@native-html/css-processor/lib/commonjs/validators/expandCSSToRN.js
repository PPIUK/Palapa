"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandCSSToRN;

var _cssToReactNative = require("css-to-react-native");

function expandCSSToRN(propertyName, value) {
  try {
    return (0, _cssToReactNative.getStylesForProperty)(propertyName, value);
  } catch (e) {// Ignore this rule if parsing failed
  }

  return null;
}
//# sourceMappingURL=expandCSSToRN.js.map