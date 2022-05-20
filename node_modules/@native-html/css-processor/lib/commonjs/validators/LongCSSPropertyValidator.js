"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongCSSPropertyValidator = void 0;

var _GenericPropertyValidator = require("./GenericPropertyValidator");

class LongCSSPropertyValidator extends _GenericPropertyValidator.GenericCSSPropertyValidator {
  constructor(params) {
    super(params, false);
  }
  /**
   * Normalize a rule value from inline CSS styles.
   *
   * @param value - The CSS property value to test.
   * @returns The normalized value, or null if normalization failed.
   */


  normalizeInlineCSSValue(value) {
    if (typeof value !== 'string') {
      return value;
    }

    return this.normalizeRawInlineCSSValue(value);
  }

  /**
   * Normalize a mixed value from a @{link MixedStyleDeclaration}.
   *
   * @param value
   */
  normalizeNativeValue(value) {
    return value;
  }

}

exports.LongCSSPropertyValidator = LongCSSPropertyValidator;
//# sourceMappingURL=LongCSSPropertyValidator.js.map