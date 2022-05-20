"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSNativeParseRun = void 0;

var _CSSParseRun = require("./CSSParseRun");

var _helpers = require("./helpers");

var _ShortMergeRequest = require("./ShortMergeRequest");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const nativeDirectionalStyleKeys = {
  borderBottomEndRadius: 'block',
  borderBottomStartRadius: 'block',
  borderEndColor: 'block',
  borderEndWidth: 'block',
  borderStartColor: 'block',
  borderStartWidth: 'block',
  borderTopEndRadius: 'block',
  borderTopStartRadius: 'block',
  end: 'block',
  marginEnd: 'block',
  marginStart: 'block',
  paddingEnd: 'block',
  paddingStart: 'block',
  start: 'block'
};
const extraLongViewStyles = {
  elevation: 'block',
  overflow: 'block',
  overlayColor: 'block',
  resizeMode: 'block',
  rotation: 'block',
  scaleX: 'block',
  scaleY: 'block',
  shadowColor: 'block',
  shadowOffset: 'block',
  shadowOpacity: 'block',
  shadowRadius: 'block',
  testID: 'block',
  tintColor: 'block',
  transformMatrix: 'block',
  translateX: 'block',
  translateY: 'block'
};
const extraTextStyles = {
  includeFontPadding: 'text',
  textAlignVertical: 'text',
  textShadowColor: 'text',
  textShadowOffset: 'text',
  textShadowRadius: 'text',
  writingDirection: 'text'
};
const extraStylesRegistry = { ...extraTextStyles,
  ...extraLongViewStyles
};

class CSSNativeParseRun extends _CSSParseRun.CSSParseRun {
  constructor(declaration, registry) {
    super(registry);

    _defineProperty(this, "declaration", void 0);

    this.declaration = declaration;
  }

  fillProp(key, value) {
    const validator = this.validationMap.getValidatorForProperty(key);

    if (validator) {
      const normalizedValue = validator.normalizeNativeValue(value);

      if (normalizedValue instanceof _ShortMergeRequest.ShortMergeRequest) {
        normalizedValue.forEach(([innerKey, innerValue]) => {
          this.fillProp(innerKey, innerValue);
        });
      } else {
        // assume longhand merge
        this.processedProps.withProperty(key, normalizedValue, validator);
      }
    } else if ((0, _helpers.lookupRecord)(extraStylesRegistry, key)) {
      this.processedProps.withProperty(key, value, {
        compatCategory: 'native',
        displayCategory: extraStylesRegistry[key],
        propagationCategory: 'retain'
      });
    } else if ((0, _helpers.lookupRecord)(nativeDirectionalStyleKeys, key)) {
      console.warn(`Native style property "${key}" is a directional style property. These are not yet supported.`);
    } else {
      console.warn(`Native style property "${key}" is not supported and has been ignored.`);
    }
  }

  fillProcessedProps() {
    const declaration = this.declaration;

    for (const key of Object.keys(declaration)) {
      this.fillProp(key, this.declaration[key]);
    }
  }

}

exports.CSSNativeParseRun = CSSNativeParseRun;
//# sourceMappingURL=CSSNativeParseRun.js.map