"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortFlexCSSPropertyValidator = void 0;

var _ShortMergeRequest = require("../ShortMergeRequest");

var _expandCSSToRN = _interopRequireDefault(require("./expandCSSToRN"));

var _ShortCSSPropertyValidator = require("./ShortCSSPropertyValidator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Flex shorthand property in CSS and React Native differ significantly. This
 * validator must therefore expand this shorthand in a way consistent with the
 * specs for both platforms (native and CSS).
 */
class ShortFlexCSSPropertyValidator extends _ShortCSSPropertyValidator.ShortCSSPropertyValidator {
  constructor(params) {
    super({ ...params,
      propertyName: 'flex'
    });
  }

  normalizeInlineCSSValue(value) {
    return new _ShortMergeRequest.ShortMergeRequest((0, _expandCSSToRN.default)(this.propertyName, value));
  }
  /**
   * In React Native, "flex" is not a shorthand property, although it looks
   * like one. There is not always a tuple of (flexGrow, flexShrink,
   * flexBasis) that maps exactly to one single "flex" value.
   *
   * For this very reason, it is ill-advised to use "flex" shorthand property.
   * Use the longhand equivalent when that is possible.
   *
   * @param value
   */


  normalizeNativeValue(value) {
    return value;
  }

}

exports.ShortFlexCSSPropertyValidator = ShortFlexCSSPropertyValidator;
//# sourceMappingURL=ShortFlexCSSPropertyValidator.js.map