"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongSizeCSSPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

class LongSizeCSSPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  computeSize(value, unit) {
    switch (unit) {
      case '%':
        return `${value}%`;

      case 'px':
        return value;

      case 'cm':
      case 'in':
      case 'mm':
      case 'pc':
      case 'pt':
        return value * this.config.absoluteLengthUnitsMultiplicators[unit];

      case 'em':
        return this.computeEmSize(value);

      case 'ex':
        // This is an approximation.
        return this.computeEmSize(value * 0.63);

      case 'rem':
        return this.config.rootFontSize * value;
    }

    return null;
  }

  computeEmSize(value) {
    return this.config.rootFontSize * value;
  }

  splitValueAndUnit(value) {
    const match = /^(\d*\.?\d*)\s*(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)$/g.exec(value);

    if (match === null) {
      return null;
    }

    return [Number(match[1]), match[2]];
  }

  normalizeRawInlineCSSValue(value) {
    if (value === '0') {
      return 0;
    }

    if (value === 'auto') {
      return value;
    }

    const split = this.splitValueAndUnit(value);

    if (split) {
      return this.computeSize(split[0], split[1]);
    }

    return null;
  }

  normalizeNativeValue(value) {
    return this.normalizeInlineCSSValue(value);
  }

}

exports.LongSizeCSSPropertyValidator = LongSizeCSSPropertyValidator;
//# sourceMappingURL=LongSizeCSSPropertyValidator.js.map