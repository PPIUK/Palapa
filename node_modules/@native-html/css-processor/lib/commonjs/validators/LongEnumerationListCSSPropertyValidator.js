"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LongEnumerationListCSSPropertyValidator = void 0;

var _LongCSSPropertyValidator = require("./LongCSSPropertyValidator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const WHITESPACE_REGEX = /\s+/;

class LongEnumerationListCSSPropertyValidator extends _LongCSSPropertyValidator.LongCSSPropertyValidator {
  constructor(params, allowedList) {
    super(params);

    _defineProperty(this, "allowedList", void 0);

    this.allowedList = allowedList;
  }

  normalizeRawInlineCSSValue(value) {
    const input = value.split(WHITESPACE_REGEX);
    const values = [];

    for (const item of input) {
      if (this.allowedList.indexOf(item) !== -1) {
        values.push(item);
      }
    }

    return values.length > 0 ? values : null;
  }

}

exports.LongEnumerationListCSSPropertyValidator = LongEnumerationListCSSPropertyValidator;
//# sourceMappingURL=LongEnumerationListCSSPropertyValidator.js.map