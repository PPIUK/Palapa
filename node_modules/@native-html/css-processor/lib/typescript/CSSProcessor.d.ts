import { CSSProcessorConfig } from './config';
import { CSSProcessedProps } from './CSSProcessedProps';
import { CSSPropertiesValidationRegistry } from './CSSPropertiesValidationRegistry';
import { ExtraNativeShortStyle, ExtraNativeTextStyle, ExtraNativeUntranslatedLongStyles, ExtraNativeViewStyle } from './native-types';
import { WebBlockRetainProperties, WebTextFlowProperties } from './processor-types';
/**
 * All those styles that result from processing inline styles.
 */
export declare type CSSFlattenProcessedTypes = CSSProcessedProps['native']['text']['flow'] & CSSProcessedProps['native']['block']['flow'] & CSSProcessedProps['native']['text']['retain'] & CSSProcessedProps['native']['block']['retain'];
/**
 * These properties can be set to any of the supoprted CSS sizes, including em,
 * rem units and special values such as large, larger for `fontSize`, thin,
 * medium for `borderWidth`, before passed to {@link CSSProcessor.compileStyleDeclaration}.
 */
export declare type MixedSizeCSSPropertiesKeys = 'fontSize' | 'borderWidth' | 'letterSpacing' | 'bottom' | 'left' | 'top' | 'right' | 'width' | 'height' | 'flexBasis' | 'borderRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius' | 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderWidth' | 'borderBottomWidth' | 'borderLeftWidth' | 'borderRightWidth' | 'marginBottom' | 'marginLeft' | 'marginRight' | 'marginTop' | 'margin' | 'marginHorizontal' | 'marginVertical' | 'maxWidth' | 'maxHeight' | 'minWidth' | 'minHeight' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingHorizontal' | 'paddingVertical';
/**
 * A Style object that can contain mixins of a subset of ViewStyle, TextStyle,
 * and special style entries such as "whiteSpace", "listStyleType".
 *
 * @remarks Also note that special lengths,
 * such as "em", "rem" units, and special values, such as "%" for fontSize, and
 * keyword values ('larger', 'smaller' for fontSize, 'thick', 'thin', 'medium'
 * for border*Width) will be handled as per CSS specifications on units.
 * Another special use case is fontFamily, which can be a list of font names as
 * per the CSS standard. The translated font will be selected with
 * {@link CSSProcessorConfig.isFontSupported}.
 */
export declare type MixedStyleDeclaration = Omit<CSSFlattenProcessedTypes, MixedSizeCSSPropertiesKeys> & WebTextFlowProperties & WebBlockRetainProperties & ExtraNativeTextStyle & ExtraNativeViewStyle & ExtraNativeShortStyle & ExtraNativeUntranslatedLongStyles & {
    [k in MixedSizeCSSPropertiesKeys]?: number | string;
};
export declare class CSSProcessor {
    readonly registry: CSSPropertiesValidationRegistry;
    constructor(userConfig?: Partial<CSSProcessorConfig>);
    /**
     *
     * Incoming style declaration:
     * - For native styles: any RN compatible style declaration + special units
     *   (font-size: medium) + relative units (smaller, larger, em, rem and perhaps vw)
     *
     * @param declaration
     */
    compileStyleDeclaration(declaration: MixedStyleDeclaration): CSSProcessedProps;
    compileInlineCSS(inlineCSS: string): CSSProcessedProps;
}
