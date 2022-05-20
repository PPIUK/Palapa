"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongEnumerationCSSPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LongEnumerationCSSPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  constructor(params, allowedList) {
    super(params);

    _defineProperty(this, "allowedList", void 0);

    this.allowedList = allowedList;
  }

  normalizeRawInlineCSSValue(v) {
    if (this.allowedList.indexOf(v) !== -1) {
      return v;
    }

    return null;
  }

  normalizeNativeValue(v) {
    return this.normalizeInlineCSSValue(v);
  }

}

exports.LongEnumerationCSSPropertyValidator = LongEnumerationCSSPropertyValidator;
//# sourceMappingURL=LongEnumerationCSSPropertyValidator.js.map