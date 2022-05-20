"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongCSSToReactNativeValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

var _expandCSSToRN = _interopRequireDefault(require("./expandCSSToRN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LongCSSToReactNativeValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    const expanded = (0, _expandCSSToRN.default)(this.propertyName, value);

    if (expanded) {
      return expanded[this.propertyName];
    }

    return null;
  }

}

exports.LongCSSToReactNativeValidator = LongCSSToReactNativeValidator;
//# sourceMappingURL=LongCSSToReactNativeValidator.js.map