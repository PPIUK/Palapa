"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSPropertiesValidationRegistry = void 0;

var _makepropertiesValidators = _interopRequireDefault(require("./makepropertiesValidators"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeRegistry(list) {
  const registry = {};
  list.forEach(prop => {
    registry[prop] = true;
  });
  return registry;
}

class CSSPropertiesValidationRegistry {
  constructor(config) {
    _defineProperty(this, "validators", void 0);

    _defineProperty(this, "ignoredPropertiesRegistry", void 0);

    _defineProperty(this, "allowedPropertiesRegistry", void 0);

    this.validators = (0, _makepropertiesValidators.default)(config);
    this.ignoredPropertiesRegistry = makeRegistry(config.inlinePropertiesBlacklist);
    this.allowedPropertiesRegistry = config.inlinePropertiesWhitelist ? makeRegistry(config.inlinePropertiesWhitelist) : null;
  }

  isInlinePropertyAllowed(name) {
    if (this.allowedPropertiesRegistry) {
      return !!this.allowedPropertiesRegistry[name];
    }

    return !this.ignoredPropertiesRegistry[name];
  }

  shouldRegisterInlineProperty(name) {
    return this.isInlinePropertyAllowed(name) && !!this.validators[name];
  }

  getValidatorForProperty(name) {
    return this.validators[name] || null;
  }

}

exports.CSSPropertiesValidationRegistry = CSSPropertiesValidationRegistry;
//# sourceMappingURL=CSSPropertiesValidationRegistry.js.map