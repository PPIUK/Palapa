"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makepropertiesValidators;

var _LongFontFamilyPropertyValidator = require("./validators/LongFontFamilyPropertyValidator");

var _LongFloatNumberCSSPropertyValidator = require("./validators/LongFloatNumberCSSPropertyValidator");

var _LongBorderWidthCSSPropertyValidator = require("./validators/LongBorderWidthCSSPropertyValidator");

var _LongFontSizeCSSValidator = require("./validators/LongFontSizeCSSValidator");

var _LongSizeCSSPropertyValidator = require("./validators/LongSizeCSSPropertyValidator");

var _LongAspectRatioPropertyValidator = require("./validators/LongAspectRatioPropertyValidator");

var _LongEnumerationListCSSPropertyValidator = require("./validators/LongEnumerationListCSSPropertyValidator");

var _LongBorderStyleCSSPropertyValidator = require("./validators/LongBorderStyleCSSPropertyValidator");

var _LongEnumerationCSSPropertyValidator = require("./validators/LongEnumerationCSSPropertyValidator");

var _LongColorCSSPropertyValidator = require("./validators/LongColorCSSPropertyValidator");

var _ShortFontCSSValidator = require("./validators/ShortFontCSSValidator");

var _ShortCSSToReactNativeValidator = require("./validators/ShortCSSToReactNativeValidator");

var _ShortFlexCSSPropertyValidator = require("./validators/ShortFlexCSSPropertyValidator");

var _LongCSSToReactNativeValidator = require("./validators/LongCSSToReactNativeValidator");

var _ShortCardinalCSSPropertyValidator = require("./validators/ShortCardinalCSSPropertyValidator");

var _ShortDualNativePropertyValidator = require("./validators/ShortDualNativePropertyValidator");

var _LongForgivingCSSPropertyValidator = require("./validators/LongForgivingCSSPropertyValidator");

var _LongNonPercentSizeCSSPropertyValidator = require("./validators/LongNonPercentSizeCSSPropertyValidator");

const nativeTranslatableBlockFlowModel = {
  inheritable: true,
  native: true,
  translatable: true,
  display: 'block'
};
const nativeTranslatableBlockRetainModel = {
  inheritable: false,
  native: true,
  translatable: true,
  display: 'block'
};
const nativeUntranslatableBlockRetainModel = {
  inheritable: false,
  native: true,
  translatable: false,
  display: 'block'
};
const nativeTranslatableTextFlowModel = {
  inheritable: true,
  native: true,
  translatable: true,
  display: 'text'
};
const nativeTranslatableTextRetainModel = {
  inheritable: false,
  native: true,
  translatable: true,
  display: 'text'
};
const webTextFlowModel = {
  inheritable: true,
  native: false,
  translatable: false,
  display: 'text'
};
const webBlockRetainModel = {
  inheritable: false,
  native: false,
  translatable: false,
  display: 'block'
};

function makepropertiesValidators(config) {
  return {
    background: new _ShortCSSToReactNativeValidator.ShortCSSToReactNativeValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'background'
    }),
    border: new _ShortCSSToReactNativeValidator.ShortCSSToReactNativeValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'border'
    }),
    borderRadius: new _ShortCardinalCSSPropertyValidator.ShortCardinalCSSpropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'borderRadius'
    }, {
      top: 'borderTopLeftRadius',
      right: 'borderTopRightRadius',
      bottom: 'borderBottomRightRadius',
      left: 'borderBottomLeftRadius'
    }),
    borderColor: new _ShortCardinalCSSPropertyValidator.ShortCardinalCSSpropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'borderColor'
    }, {
      top: 'borderTopColor',
      right: 'borderRightColor',
      bottom: 'borderBottomColor',
      left: 'borderLeftColor'
    }),
    borderStyle: new _LongBorderStyleCSSPropertyValidator.LongBorderStyleCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'borderStyle'
    }, ['solid', 'dotted', 'dashed']),
    borderWidth: new _ShortCardinalCSSPropertyValidator.ShortCardinalCSSpropertyValidator({
      config,
      propertyName: 'borderWidth',
      model: nativeTranslatableBlockRetainModel
    }, {
      top: 'borderTopWidth',
      right: 'borderRightWidth',
      bottom: 'borderBottomWidth',
      left: 'borderLeftWidth'
    }),
    flex: new _ShortFlexCSSPropertyValidator.ShortFlexCSSPropertyValidator({
      config,
      propertyName: 'flex',
      model: nativeTranslatableBlockRetainModel
    }),
    flexFlow: new _ShortCSSToReactNativeValidator.ShortCSSToReactNativeValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'flexFlow'
    }),
    font: new _ShortFontCSSValidator.ShortFontCSSValidator({
      config,
      model: nativeTranslatableTextFlowModel,
      propertyName: 'font'
    }),
    margin: new _ShortCardinalCSSPropertyValidator.ShortCardinalCSSpropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'margin'
    }, {
      top: 'marginTop',
      right: 'marginRight',
      bottom: 'marginBottom',
      left: 'marginLeft'
    }),
    objectFit: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: webBlockRetainModel,
      propertyName: 'objectFit'
    }, ['fill', 'contain', 'cover', 'none', 'scale-down']),
    padding: new _ShortCardinalCSSPropertyValidator.ShortCardinalCSSpropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'padding'
    }, {
      top: 'paddingTop',
      right: 'paddingRight',
      bottom: 'paddingBottom',
      left: 'paddingLeft'
    }),
    marginHorizontal: new _ShortDualNativePropertyValidator.ShortDualNativepropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'marginHorizontal'
    }, ['marginLeft', 'marginRight']),
    marginVertical: new _ShortDualNativePropertyValidator.ShortDualNativepropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'marginVertical'
    }, ['marginTop', 'marginBottom']),
    paddingHorizontal: new _ShortDualNativePropertyValidator.ShortDualNativepropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'paddingHorizontal'
    }, ['paddingLeft', 'paddingRight']),
    paddingVertical: new _ShortDualNativePropertyValidator.ShortDualNativepropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'paddingVertical'
    }, ['paddingTop', 'paddingBottom']),
    textDecoration: new _ShortCSSToReactNativeValidator.ShortCSSToReactNativeValidator({
      config,
      model: nativeTranslatableTextRetainModel,
      propertyName: 'textDecoration'
    }),
    textDecorationColor: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'textDecorationColor',
      model: nativeTranslatableTextRetainModel
    }),
    textDecorationLine: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableTextRetainModel,
      propertyName: 'textDecorationLine'
    }, ['none', 'underline', 'line-through', 'underline line-through'] // 'overline' not supported by RN
    ),
    textDecorationStyle: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableTextRetainModel,
      propertyName: 'textDecorationStyle'
    }, ['solid', 'double', 'dotted', 'dashed'] // 'wavy' unsupported
    ),
    color: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'color',
      model: nativeTranslatableTextFlowModel
    }),
    fontFamily: new _LongFontFamilyPropertyValidator.LongFontFamilyPropertyValidator({
      config,
      propertyName: 'fontFamily',
      model: nativeTranslatableTextFlowModel
    }),
    fontSize: new _LongFontSizeCSSValidator.LongFontSizeCSSValidator({
      config,
      propertyName: 'fontSize',
      model: nativeTranslatableTextFlowModel
    }),
    fontStyle: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableTextFlowModel,
      propertyName: 'fontStyle'
    }, ['normal', 'italic'] // 'oblique' not supported
    ),
    fontVariant: new _LongEnumerationListCSSPropertyValidator.LongEnumerationListCSSPropertyValidator({
      config,
      model: nativeTranslatableTextFlowModel,
      propertyName: 'fontVariant'
    }, ['small-caps', 'oldstyle-nums', 'lining-nums', 'tabular-nums', 'proportional-nums']),
    fontWeight: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableTextFlowModel,
      propertyName: 'fontWeight'
    }, ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900']),
    letterSpacing: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'letterSpacing',
      model: nativeTranslatableTextFlowModel
    }),
    // TODO handle unitless heights
    lineHeight: new _LongNonPercentSizeCSSPropertyValidator.LongNonPercentSizeCSSPropertyValidator({
      config,
      propertyName: 'lineHeight',
      model: nativeTranslatableTextFlowModel
    }),
    textAlign: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableTextFlowModel,
      propertyName: 'textAlign'
    }, ['auto', 'left', 'right', 'center', 'justify']),
    textTransform: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableTextFlowModel,
      propertyName: 'textTransform'
    }, ['none', 'capitalize', 'uppercase', 'lowercase']),
    whiteSpace: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: webTextFlowModel,
      propertyName: 'whiteSpace'
    }, ['normal', 'pre']),
    listStyleType: new _LongForgivingCSSPropertyValidator.LongForgivingCSSPropertyValidator({
      config,
      model: webTextFlowModel,
      propertyName: 'listStyleType'
    }),
    userSelect: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: webTextFlowModel,
      propertyName: 'userSelect'
    }, ['auto', 'text', 'none', 'contain', 'all']),
    alignContent: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'alignContent'
    }, ['flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around']),
    alignItems: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'alignItems'
    }, ['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    alignSelf: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'alignSelf'
    }, ['auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    aspectRatio: new _LongAspectRatioPropertyValidator.LongAspectRatioPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'aspectRatio'
    }),
    bottom: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'bottom',
      model: nativeTranslatableBlockRetainModel
    }),
    display: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'display'
    }, ['flex', 'none']),
    flexBasis: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'flexBasis',
      model: nativeTranslatableBlockRetainModel
    }),
    flexDirection: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'flexDirection'
    }, ['row', 'column', 'row-reverse', 'column-reverse']),
    flexGrow: new _LongFloatNumberCSSPropertyValidator.LongFloatNumberCSSPropertyValidator({
      config,
      propertyName: 'flexGrow',
      model: nativeTranslatableBlockRetainModel
    }),
    flexShrink: new _LongFloatNumberCSSPropertyValidator.LongFloatNumberCSSPropertyValidator({
      config,
      propertyName: 'flexShrink',
      model: nativeTranslatableBlockRetainModel
    }),
    flexWrap: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'flexWrap'
    }, ['wrap', 'nowrap', 'wrap-reverse']),
    justifyContent: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'justifyContent'
    }, ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
    left: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'left',
      model: nativeTranslatableBlockRetainModel
    }),
    position: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeUntranslatableBlockRetainModel,
      propertyName: 'position'
    }, ['absolute', 'relative']),
    right: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'right',
      model: nativeTranslatableBlockRetainModel
    }),
    top: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'top'
    }),
    backfaceVisibility: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockRetainModel,
      propertyName: 'backfaceVisibility'
    }, ['visible', 'hidden']),
    backgroundColor: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'backgroundColor',
      model: nativeTranslatableBlockRetainModel
    }),
    borderBottomColor: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'borderBottomColor',
      model: nativeTranslatableBlockRetainModel
    }),
    borderBottomLeftRadius: new _LongNonPercentSizeCSSPropertyValidator.LongNonPercentSizeCSSPropertyValidator({
      config,
      propertyName: 'borderBottomLeftRadius',
      model: nativeTranslatableBlockRetainModel
    }),
    borderBottomRightRadius: new _LongNonPercentSizeCSSPropertyValidator.LongNonPercentSizeCSSPropertyValidator({
      config,
      propertyName: 'borderBottomRightRadius',
      model: nativeTranslatableBlockRetainModel
    }),
    borderBottomWidth: new _LongBorderWidthCSSPropertyValidator.LongBorderWidthCSSPropertyValidator({
      config,
      propertyName: 'borderBottomWidth',
      model: nativeTranslatableBlockRetainModel
    }),
    borderLeftColor: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'borderLeftColor',
      model: nativeTranslatableBlockRetainModel
    }),
    borderLeftWidth: new _LongBorderWidthCSSPropertyValidator.LongBorderWidthCSSPropertyValidator({
      config,
      propertyName: 'borderLeftWidth',
      model: nativeTranslatableBlockRetainModel
    }),
    borderRightColor: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'borderRightColor',
      model: nativeTranslatableBlockRetainModel
    }),
    borderRightWidth: new _LongBorderWidthCSSPropertyValidator.LongBorderWidthCSSPropertyValidator({
      config,
      propertyName: 'borderRightWidth',
      model: nativeTranslatableBlockRetainModel
    }),
    borderTopColor: new _LongColorCSSPropertyValidator.LongColorCSSPropertyValidator({
      config,
      propertyName: 'borderTopColor',
      model: nativeTranslatableBlockRetainModel
    }),
    borderTopLeftRadius: new _LongNonPercentSizeCSSPropertyValidator.LongNonPercentSizeCSSPropertyValidator({
      config,
      propertyName: 'borderTopLeftRadius',
      model: nativeTranslatableBlockRetainModel
    }),
    borderTopRightRadius: new _LongNonPercentSizeCSSPropertyValidator.LongNonPercentSizeCSSPropertyValidator({
      config,
      propertyName: 'borderTopRightRadius',
      model: nativeTranslatableBlockRetainModel
    }),
    borderTopWidth: new _LongBorderWidthCSSPropertyValidator.LongBorderWidthCSSPropertyValidator({
      config,
      propertyName: 'borderTopWidth',
      model: nativeTranslatableBlockRetainModel
    }),
    height: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'height',
      model: nativeTranslatableBlockRetainModel
    }),
    marginBottom: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'marginBottom',
      model: nativeTranslatableBlockRetainModel
    }),
    marginLeft: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'marginLeft',
      model: nativeTranslatableBlockRetainModel
    }),
    marginRight: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'marginRight',
      model: nativeTranslatableBlockRetainModel
    }),
    marginTop: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'marginTop',
      model: nativeTranslatableBlockRetainModel
    }),
    maxHeight: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'maxHeight',
      model: nativeTranslatableBlockRetainModel
    }),
    maxWidth: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'maxWidth',
      model: nativeTranslatableBlockRetainModel
    }),
    minHeight: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'minHeight',
      model: nativeTranslatableBlockRetainModel
    }),
    minWidth: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'minWidth',
      model: nativeTranslatableBlockRetainModel
    }),
    opacity: new _LongFloatNumberCSSPropertyValidator.LongFloatNumberCSSPropertyValidator({
      config,
      propertyName: 'opacity',
      model: nativeTranslatableBlockRetainModel
    }),
    paddingBottom: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'paddingBottom',
      model: nativeTranslatableBlockRetainModel
    }),
    paddingLeft: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'paddingLeft',
      model: nativeTranslatableBlockRetainModel
    }),
    paddingRight: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'paddingRight',
      model: nativeTranslatableBlockRetainModel
    }),
    paddingTop: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'paddingTop',
      model: nativeTranslatableBlockRetainModel
    }),
    transform: new _LongCSSToReactNativeValidator.LongCSSToReactNativeValidator({
      config,
      propertyName: 'transform',
      model: nativeTranslatableBlockRetainModel
    }),
    width: new _LongSizeCSSPropertyValidator.LongSizeCSSPropertyValidator({
      config,
      propertyName: 'width',
      model: nativeTranslatableBlockRetainModel
    }),
    zIndex: new _LongFloatNumberCSSPropertyValidator.LongFloatNumberCSSPropertyValidator({
      config,
      propertyName: 'zIndex',
      model: nativeTranslatableBlockRetainModel
    }),
    direction: new _LongEnumerationCSSPropertyValidator.LongEnumerationCSSPropertyValidator({
      config,
      model: nativeTranslatableBlockFlowModel,
      propertyName: 'direction'
    }, ['auto', 'ltr', 'rtl'])
  };
}
//# sourceMappingURL=makepropertiesValidators.js.map