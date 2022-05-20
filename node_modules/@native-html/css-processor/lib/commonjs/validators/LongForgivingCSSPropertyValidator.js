"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongForgivingCSSPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

class LongForgivingCSSPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    return value;
  }

}

exports.LongForgivingCSSPropertyValidator = LongForgivingCSSPropertyValidator;
//# sourceMappingURL=LongForgivingCSSPropertyValidator.js.map