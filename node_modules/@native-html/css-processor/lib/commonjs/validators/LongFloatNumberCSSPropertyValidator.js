"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongFloatNumberCSSPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

class LongFloatNumberCSSPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    const normalizedVal = Number(value);

    if (Number.isNaN(normalizedVal)) {
      return null;
    }

    return normalizedVal;
  }

  normalizeNativeValue(v) {
    return this.normalizeInlineCSSValue(v);
  }

}

exports.LongFloatNumberCSSPropertyValidator = LongFloatNumberCSSPropertyValidator;
//# sourceMappingURL=LongFloatNumberCSSPropertyValidator.js.map