"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongFontSizeCSSValidator = void 0;

var _helpers = require("../helpers");

var _LongSizeCSSPropertyValidator = require("./LongSizeCSSPropertyValidator");

class LongFontSizeCSSValidator extends _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator {
  computeSize(value, unit) {
    if (unit === '%') {
      return this.computeEmSize(value / 100);
    }

    return super.computeSize(value, unit);
  }

  normalizeRawInlineCSSValue(value) {
    if ((0, _helpers.lookupRecord)(this.config.absoluteFontSizesPixelMap, value)) {
      return this.config.absoluteFontSizesPixelMap[value];
    }

    if ((0, _helpers.lookupRecord)(this.config.relativeFontSizesCoefficientMap, value)) {
      return this.computeEmSize(this.config.relativeFontSizesCoefficientMap[value]);
    }

    return super.normalizeRawInlineCSSValue(value);
  }

  normalizeNativeValue(value) {
    return this.normalizeInlineCSSValue(value);
  }

}

exports.LongFontSizeCSSValidator = LongFontSizeCSSValidator;
//# sourceMappingURL=LongFontSizeCSSValidator.js.map