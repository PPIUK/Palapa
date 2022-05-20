"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongNonPercentSizeCSSPropertyValidator = void 0;

var _LongSizeCSSPropertyValidator = require("./LongSizeCSSPropertyValidator");

class LongNonPercentSizeCSSPropertyValidator extends _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator {
  computeSize(value, unit) {
    if (unit === '%') {
      return null;
    }

    return super.computeSize(value, unit);
  }

}

exports.LongNonPercentSizeCSSPropertyValidator = LongNonPercentSizeCSSPropertyValidator;
//# sourceMappingURL=LongNonPercentSizeCSSPropertyValidator.js.map