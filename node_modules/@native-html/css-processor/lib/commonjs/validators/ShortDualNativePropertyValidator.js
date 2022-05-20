"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortDualNativepropertyValidator = void 0;

var _ShortMergeRequest = require("../ShortMergeRequest");

var _ShortCSSPropertyValidator = require("./ShortCSSPropertyValidator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ShortDualNativepropertyValidator extends _ShortCSSPropertyValidator.ShortCSSPropertyValidator {
  constructor(params,
  /**
   * First direction, second direction.
   */
  directions) {
    super(params);

    _defineProperty(this, "directions", void 0);

    this.directions = directions;
  } // These properties are only available for native styles.


  normalizeInlineCSSValue() {
    return null;
  }

  normalizeNativeValue(value) {
    return new _ShortMergeRequest.ShortMergeRequest({
      [this.directions[0]]: value,
      [this.directions[1]]: value
    });
  }

}

exports.ShortDualNativepropertyValidator = ShortDualNativepropertyValidator;
//# sourceMappingURL=ShortDualNativePropertyValidator.js.map