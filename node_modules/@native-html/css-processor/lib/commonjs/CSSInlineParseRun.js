"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSInlineParseRun = void 0;

var _cssToReactNative = require("css-to-react-native");

var _CSSParseRun = require("./CSSParseRun");

var _ShortMergeRequest = require("./ShortMergeRequest");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CSSInlineParseRun extends _CSSParseRun.CSSParseRun {
  constructor(inlineCSS, registry) {
    super(registry);

    _defineProperty(this, "rules", void 0);

    this.rules = this.parseInlineCSS(inlineCSS);
    this.normalizeProp = this.normalizeProp.bind(this);
    this.reduceProps = this.reduceProps.bind(this);
  }

  parseInlineCSS(inlineCSS) {
    return inlineCSS.split(';').map(prop => prop.split(':')).reduce((acc, prop) => {
      if (prop.length === 2) {
        return [...acc, [prop[0].trim(), prop[1].trim()]];
      }

      return acc;
    }, []);
  }

  normalizeProp(rule, strict = false) {
    const rawName = rule[0];
    const rawValue = rule[1];
    const camelCaseName = (0, _cssToReactNative.getPropertyName)(rawName);

    if (!this.validationMap.shouldRegisterInlineProperty(camelCaseName)) {
      return null;
    }

    const validator = this.validationMap.getValidatorForProperty(camelCaseName);
    const normalizedValue = validator.normalizeInlineCSSValue(rawValue);

    if (normalizedValue === null) {
      if (strict) {
        throw new TypeError();
      }

      return null;
    }

    return [camelCaseName, normalizedValue];
  }

  reduceProps(reg, rule) {
    if (!rule) {
      return reg;
    }

    const [camelCaseName, normalizedValue] = rule;

    if (normalizedValue instanceof _ShortMergeRequest.ShortMergeRequest) {
      try {
        return normalizedValue.map(r => this.normalizeProp(r, true)).reduce(this.reduceProps, reg);
      } catch (e) {
        return reg;
      }
    }

    return { ...reg,
      [camelCaseName]: normalizedValue
    };
  }

  fillProcessedProps() {
    const rawTransformed = this.rules.map(r => this.normalizeProp(r)).reduce(this.reduceProps, {});
    Object.keys(rawTransformed).forEach(camelCaseName => {
      const value = rawTransformed[camelCaseName];
      const validator = this.validationMap.getValidatorForProperty(camelCaseName);
      const normalizedValue = validator.normalizeInlineCSSValue(value);
      this.processedProps.withProperty(camelCaseName, normalizedValue, validator);
    });
  }

}

exports.CSSInlineParseRun = CSSInlineParseRun;
//# sourceMappingURL=CSSInlineParseRun.js.map