"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortCSSToReactNativeValidator = void 0;

var _ShortCSSPropertyValidator = require("./ShortCSSPropertyValidator");

var _expandCSSToRN = _interopRequireDefault(require("./expandCSSToRN"));

var _ShortMergeRequest = require("../ShortMergeRequest");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ShortCSSToReactNativeValidator extends _ShortCSSPropertyValidator.ShortCSSPropertyValidator {
  normalizeInlineCSSValue(value) {
    return new _ShortMergeRequest.ShortMergeRequest((0, _expandCSSToRN.default)(this.propertyName, value));
  }
  /**
   * Not supported on Native.
   * @param value
   */


  normalizeNativeValue() {
    return null;
  }

}

exports.ShortCSSToReactNativeValidator = ShortCSSToReactNativeValidator;
//# sourceMappingURL=ShortCSSToReactNativeValidator.js.map