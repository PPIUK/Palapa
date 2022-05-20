"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongColorCSSPropertyValidator = void 0;

var _LongForgivingCSSPropertyValidator = require("./LongForgivingCSSPropertyValidator");

const COLOR_REGEX = /^(rgb|rgba|hsl|hsla)\([\d,%. ]+\)|[#]?\w+$/;

class LongColorCSSPropertyValidator extends _LongForgivingCSSPropertyValidator.LongForgivingCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    return value.match(COLOR_REGEX) ? value : null;
  }

}

exports.LongColorCSSPropertyValidator = LongColorCSSPropertyValidator;
//# sourceMappingURL=LongColorCSSPropertyValidator.js.map