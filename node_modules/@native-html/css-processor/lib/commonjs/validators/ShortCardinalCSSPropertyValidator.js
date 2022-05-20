"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortCardinalCSSpropertyValidator = void 0;

var _ShortMergeRequest = require("../ShortMergeRequest");

var _ShortCSSPropertyValidator = require("./ShortCSSPropertyValidator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const WHITESPACE_REGEX = /\s+/;

class ShortCardinalCSSpropertyValidator extends _ShortCSSPropertyValidator.ShortCSSPropertyValidator {
  constructor(params,
  /**
   * Top, Right, Bottom, Left
   */
  directions) {
    super(params);

    _defineProperty(this, "directions", void 0);

    this.directions = directions;
  }

  normalizeInlineCSSValue(value) {
    if (typeof value === 'number') {
      return new _ShortMergeRequest.ShortMergeRequest({
        [this.directions.top]: value,
        [this.directions.right]: value,
        [this.directions.bottom]: value,
        [this.directions.left]: value
      });
    }

    const values = value.split(WHITESPACE_REGEX);

    if (values.length === 4) {
      return new _ShortMergeRequest.ShortMergeRequest({
        [this.directions.top]: values[0],
        [this.directions.right]: values[1],
        [this.directions.bottom]: values[2],
        [this.directions.left]: values[3]
      });
    }

    if (values.length === 3) {
      return new _ShortMergeRequest.ShortMergeRequest({
        [this.directions.top]: values[0],
        [this.directions.right]: values[1],
        [this.directions.bottom]: values[2],
        [this.directions.left]: values[1]
      });
    }

    if (values.length === 2) {
      return new _ShortMergeRequest.ShortMergeRequest({
        [this.directions.top]: values[0],
        [this.directions.right]: values[1],
        [this.directions.bottom]: values[0],
        [this.directions.left]: values[1]
      });
    }

    if (values.length === 1) {
      return new _ShortMergeRequest.ShortMergeRequest({
        [this.directions.top]: values[0],
        [this.directions.right]: values[0],
        [this.directions.bottom]: values[0],
        [this.directions.left]: values[0]
      });
    }

    return null;
  }

  normalizeNativeValue(value) {
    return this.normalizeInlineCSSValue(value);
  }

}

exports.ShortCardinalCSSpropertyValidator = ShortCardinalCSSpropertyValidator;
//# sourceMappingURL=ShortCardinalCSSPropertyValidator.js.map