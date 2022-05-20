"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongFontFamilyPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

var _normalizeFontName = _interopRequireDefault(require("./normalizeFontName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SEPARATOR_REGEX = /,\s*/;

class LongFontFamilyPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  normalizeRawInlineCSSValue(value) {
    const values = value.split(SEPARATOR_REGEX);

    for (const font of values) {
      const normalizedFont = (0, _normalizeFontName.default)(font);
      const isFontSupported = normalizedFont.length && this.config.isFontSupported(normalizedFont);

      if (isFontSupported) {
        return typeof isFontSupported === 'string' ? isFontSupported : normalizedFont;
      }
    }

    return null;
  }

  normalizeNativeValue(value) {
    return this.normalizeInlineCSSValue(value);
  }

}

exports.LongFontFamilyPropertyValidator = LongFontFamilyPropertyValidator;
//# sourceMappingURL=LongFontFamilyPropertyValidator.js.map