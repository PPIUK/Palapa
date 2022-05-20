import { CSSProcessorConfig } from './config';
import { LongFontFamilyPropertyValidator } from './validators/LongFontFamilyPropertyValidator';
import { LongFloatNumberCSSPropertyValidator } from './validators/LongFloatNumberCSSPropertyValidator';
import { LongBorderWidthCSSPropertyValidator } from './validators/LongBorderWidthCSSPropertyValidator';
import { LongFontSizeCSSValidator } from './validators/LongFontSizeCSSValidator';
import { LongSizeCSSPropertyValidator } from './validators/LongSizeCSSPropertyValidator';
import { LongAspectRatioPropertyValidator } from './validators/LongAspectRatioPropertyValidator';
import { LongEnumerationListCSSPropertyValidator } from './validators/LongEnumerationListCSSPropertyValidator';
import { LongBorderStyleCSSPropertyValidator } from './validators/LongBorderStyleCSSPropertyValidator';
import { LongEnumerationCSSPropertyValidator } from './validators/LongEnumerationCSSPropertyValidator';
import { LongColorCSSPropertyValidator } from './validators/LongColorCSSPropertyValidator';
import { ShortFontCSSValidator } from './validators/ShortFontCSSValidator';
import { ShortCSSToReactNativeValidator } from './validators/ShortCSSToReactNativeValidator';
import { ShortFlexCSSPropertyValidator } from './validators/ShortFlexCSSPropertyValidator';
import { LongCSSToReactNativeValidator } from './validators/LongCSSToReactNativeValidator';
import { ShortCardinalCSSpropertyValidator } from './validators/ShortCardinalCSSPropertyValidator';
import { ShortDualNativepropertyValidator } from './validators/ShortDualNativePropertyValidator';
import { LongForgivingCSSPropertyValidator } from './validators/LongForgivingCSSPropertyValidator';
import { LongNonPercentSizeCSSPropertyValidator } from './validators/LongNonPercentSizeCSSPropertyValidator';
export declare type ValidatorsType = ReturnType<typeof makepropertiesValidators>;
export default function makepropertiesValidators(config: CSSProcessorConfig): {
    background: ShortCSSToReactNativeValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    border: ShortCSSToReactNativeValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderRadius: ShortCardinalCSSpropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderColor: ShortCardinalCSSpropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderStyle: LongBorderStyleCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderWidth: ShortCardinalCSSpropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    flex: ShortFlexCSSPropertyValidator;
    flexFlow: ShortCSSToReactNativeValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    font: ShortFontCSSValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    margin: ShortCardinalCSSpropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    objectFit: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: false;
        readonly translatable: false;
        readonly display: "block";
    }>;
    padding: ShortCardinalCSSpropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    marginHorizontal: ShortDualNativepropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    marginVertical: ShortDualNativepropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    paddingHorizontal: ShortDualNativepropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    paddingVertical: ShortDualNativepropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    textDecoration: ShortCSSToReactNativeValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    textDecorationColor: LongColorCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    textDecorationLine: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    textDecorationStyle: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    color: LongColorCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    fontFamily: LongFontFamilyPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    fontSize: LongFontSizeCSSValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    fontStyle: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    fontVariant: LongEnumerationListCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    fontWeight: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    letterSpacing: LongSizeCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    lineHeight: LongNonPercentSizeCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    textAlign: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    textTransform: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "text";
    }>;
    whiteSpace: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: false;
        readonly translatable: false;
        readonly display: "text";
    }>;
    listStyleType: LongForgivingCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: false;
        readonly translatable: false;
        readonly display: "text";
    }>;
    userSelect: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: false;
        readonly translatable: false;
        readonly display: "text";
    }>;
    alignContent: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    alignItems: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    alignSelf: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    aspectRatio: LongAspectRatioPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    bottom: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    display: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    flexBasis: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    flexDirection: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    flexGrow: LongFloatNumberCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    flexShrink: LongFloatNumberCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    flexWrap: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    justifyContent: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    left: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    position: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: false;
        readonly display: "block";
    }>;
    right: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    top: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    backfaceVisibility: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    backgroundColor: LongColorCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderBottomColor: LongColorCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderBottomLeftRadius: LongNonPercentSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderBottomRightRadius: LongNonPercentSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderBottomWidth: LongBorderWidthCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderLeftColor: LongColorCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderLeftWidth: LongBorderWidthCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderRightColor: LongColorCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderRightWidth: LongBorderWidthCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderTopColor: LongColorCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderTopLeftRadius: LongNonPercentSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderTopRightRadius: LongNonPercentSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    borderTopWidth: LongBorderWidthCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    height: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    marginBottom: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    marginLeft: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    marginRight: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    marginTop: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    maxHeight: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    maxWidth: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    minHeight: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    minWidth: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    opacity: LongFloatNumberCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    paddingBottom: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    paddingLeft: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    paddingRight: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    paddingTop: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    transform: LongCSSToReactNativeValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    width: LongSizeCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    zIndex: LongFloatNumberCSSPropertyValidator<{
        readonly inheritable: false;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
    direction: LongEnumerationCSSPropertyValidator<{
        readonly inheritable: true;
        readonly native: true;
        readonly translatable: true;
        readonly display: "block";
    }>;
};
