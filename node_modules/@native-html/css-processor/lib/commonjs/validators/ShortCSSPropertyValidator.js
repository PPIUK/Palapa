"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortCSSPropertyValidator = void 0;

var _GenericPropertyValidator = require("./GenericPropertyValidator");

class ShortCSSPropertyValidator extends _GenericPropertyValidator.GenericCSSPropertyValidator {
  constructor(params) {
    super(params, true);
  }
  /**
   * Expand a CSS shorthand property to its longhand equivalent.
   *
   * @param value
   */


}

exports.ShortCSSPropertyValidator = ShortCSSPropertyValidator;
//# sourceMappingURL=ShortCSSPropertyValidator.js.map