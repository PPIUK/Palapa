"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortFontCSSValidator = void 0;

var _ShortCSSToReactNativeValidator = require("./ShortCSSToReactNativeValidator");

var _normalizeFontName = _interopRequireDefault(require("./normalizeFontName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WHITESPACE_REGEX = /\s+/;

class ShortFontCSSValidator extends _ShortCSSToReactNativeValidator.ShortCSSToReactNativeValidator {
  normalizeInlineCSSValue(value) {
    // A 'font' declaration may end with a list of multiple font families.
    // We must check support for this list before processing.
    const resp = value.split(',');
    let fontFamily = null;

    if (resp.length === 1) {
      return super.normalizeInlineCSSValue(resp[0]);
    }

    const base = resp.splice(0, 1)[0];

    for (const font of resp) {
      const normalizedFont = (0, _normalizeFontName.default)(font);
      const isFontSupported = this.config.isFontSupported(normalizedFont);

      if (isFontSupported) {
        fontFamily = typeof isFontSupported === 'string' ? isFontSupported : normalizedFont;
        break;
      }
    }

    return super.normalizeInlineCSSValue(base.split(WHITESPACE_REGEX).slice(0, -1).join(' ') + ' ' + (fontFamily || 'system'));
  }

}

exports.ShortFontCSSValidator = ShortFontCSSValidator;
//# sourceMappingURL=ShortFontCSSValidator.js.map