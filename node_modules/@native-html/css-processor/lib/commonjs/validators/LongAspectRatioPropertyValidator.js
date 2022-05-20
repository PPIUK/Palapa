"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongAspectRatioPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

const ASPECT_RATIO_REGEX = /^(\d+)\/(\d+)$/;

class LongAspectRatioPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    const match = ASPECT_RATIO_REGEX.exec(value);

    if (match) {
      const ratio = Number(match[1]) / Number(match[2]);
      return Number.isFinite(ratio) ? ratio : null;
    }

    const fallback = Number(value);
    return Number.isNaN(fallback) ? null : fallback;
  }

  normalizeNativeValue(value) {
    return typeof value !== 'string' ? value : this.normalizeRawInlineCSSValue(value);
  }

}

exports.LongAspectRatioPropertyValidator = LongAspectRatioPropertyValidator;
//# sourceMappingURL=LongAspectRatioPropertyValidator.js.map