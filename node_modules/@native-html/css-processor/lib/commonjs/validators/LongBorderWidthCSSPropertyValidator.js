"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongBorderWidthCSSPropertyValidator = void 0;

var _helpers = require("../helpers");

var _LongNonPercentSizeCSSPropertyValidator = require("./LongNonPercentSizeCSSPropertyValidator");

class LongBorderWidthCSSPropertyValidator extends _LongNonPercentSizeCSSPropertyValidator.LongNonPercentSizeCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    if ((0, _helpers.lookupRecord)(this.config.absoluteBorderWidthsPixelMap, value)) {
      return this.config.absoluteBorderWidthsPixelMap[value];
    }

    return super.normalizeRawInlineCSSValue(value);
  }

  normalizeNativeValue(value) {
    return this.normalizeInlineCSSValue(value);
  }

}

exports.LongBorderWidthCSSPropertyValidator = LongBorderWidthCSSPropertyValidator;
//# sourceMappingURL=LongBorderWidthCSSPropertyValidator.js.map