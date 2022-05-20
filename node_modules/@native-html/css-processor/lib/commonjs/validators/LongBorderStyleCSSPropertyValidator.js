"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongBorderStyleCSSPropertyValidator = void 0;

var _LongEnumerationCSSPropertyValidator = require("./LongEnumerationCSSPropertyValidator");

const WHITESPACE_REGEX = /\s+/;

class LongBorderStyleCSSPropertyValidator extends _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    const normalizedVal = this.pickFirst(value);
    return normalizedVal ? super.normalizeRawInlineCSSValue(normalizedVal) : null;
  }

  normalizeNativeValue(value) {
    return this.pickFirst(value);
  }

  pickFirst(value) {
    const values = value.split(WHITESPACE_REGEX);
    return values[0] || null;
  }

}

exports.LongBorderStyleCSSPropertyValidator = LongBorderStyleCSSPropertyValidator;
//# sourceMappingURL=LongBorderStyleCSSPropertyValidator.js.map