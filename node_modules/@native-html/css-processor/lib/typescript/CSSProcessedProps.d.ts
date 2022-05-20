import { CSSProperties } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { MixedStyleDeclaration } from './CSSProcessor';
import { CSSPropertyCompatCategory, CSSDisplayRegistry, WebTextFlowProperties, CSSPropertySpecs } from './processor-types';
import { CSSLongNativeTranslatableBlockFlowedPropKey, CSSLongNativeTranslatableBlockRetainedPropKey, CSSLongNativeTranslatableTextFlowedPropKey, CSSLongNativeTranslatableTextRetainedPropKey, CSSLongNativeUntranslatableBlockFlowedPropKey, CSSLongNativeUntranslatableBlockPropKey, CSSLongWebTextRetainedPropKey } from './property-types';
/**
 * An object representing categorized style props. Props are categorized
 * depending on their inheritability (flow, retain), target (block, text)
 * and (react) native support (native, web).
 */
export declare class CSSProcessedProps implements Record<CSSPropertyCompatCategory, CSSDisplayRegistry> {
    readonly native: {
        text: {
            flow: Partial<Pick<TextStyle, CSSLongNativeTranslatableTextFlowedPropKey>>;
            retain: Partial<Pick<TextStyle, CSSLongNativeTranslatableTextRetainedPropKey>>;
        };
        block: {
            flow: Partial<Pick<ViewStyle, CSSLongNativeTranslatableBlockFlowedPropKey>>;
            retain: Partial<Pick<ViewStyle, CSSLongNativeTranslatableBlockRetainedPropKey>>;
        };
    };
    readonly web: {
        text: {
            flow: Partial<WebTextFlowProperties> & CSSProperties;
            retain: Partial<Record<CSSLongWebTextRetainedPropKey, any>> & CSSProperties;
        };
        block: {
            flow: Partial<Pick<ViewStyle, CSSLongNativeUntranslatableBlockFlowedPropKey>> & CSSProperties;
            retain: Partial<Pick<ViewStyle, CSSLongNativeUntranslatableBlockPropKey>> & CSSProperties;
        };
    };
    constructor();
    private newCompatCategory;
    withProperty<K extends keyof MixedStyleDeclaration>(propertyName: K, propertyValue: MixedStyleDeclaration[K], { compatCategory, displayCategory, propagationCategory }: CSSPropertySpecs): this;
    /**
     * Create a new processed prop object by merging the 'overriders' parameters
     * into this object.
     *
     * @param overriders - The processed props which will be merged into this
     * processed prop. Rightmost props will override leftmost props.
     */
    merge(...overriders: Array<CSSProcessedProps | null>): CSSProcessedProps;
    static new(): CSSProcessedProps;
}
