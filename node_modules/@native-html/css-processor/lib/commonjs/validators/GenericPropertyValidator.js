"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenericCSSPropertyValidator = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GenericCSSPropertyValidator {
  constructor({
    model,
    config,
    propertyName
  }, isShorthand) {
    _defineProperty(this, "model", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "compatCategory", void 0);

    _defineProperty(this, "propagationCategory", void 0);

    _defineProperty(this, "displayCategory", void 0);

    _defineProperty(this, "propertyName", void 0);

    _defineProperty(this, "_isShorthand", void 0);

    this.model = model;
    this.config = config;
    this.compatCategory = model.translatable ? 'native' : 'web';
    this.propagationCategory = model.inheritable ? 'flow' : 'retain';
    this.displayCategory = model.display;
    this.propertyName = propertyName;
    this._isShorthand = isShorthand;
  }
  /**
   * Normalize value from inline styles
   *
   * @param value
   */


  isShorthand() {
    return this._isShorthand;
  }

}

exports.GenericCSSPropertyValidator = GenericCSSPropertyValidator;
//# sourceMappingURL=GenericPropertyValidator.js.map