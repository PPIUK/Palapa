import { CSSProcessorConfig } from '../config';
import { CSSPropertyModel, CSSPropertyValidatorParams } from './types';
import { CSSPropertyCompatCategory, CSSPropertyDisplayCategory, CSSPropertyPropagationCategory, CSSPropertySpecs } from '../processor-types';
import { ShortMergeRequest } from '../ShortMergeRequest';
export declare abstract class GenericCSSPropertyValidator<C extends CSSPropertyModel = any, N = any> implements CSSPropertySpecs {
    protected readonly model: C;
    protected readonly config: CSSProcessorConfig;
    readonly compatCategory: CSSPropertyCompatCategory;
    readonly propagationCategory: CSSPropertyPropagationCategory;
    readonly displayCategory: CSSPropertyDisplayCategory;
    readonly propertyName: string;
    private readonly _isShorthand;
    constructor({ model, config, propertyName }: CSSPropertyValidatorParams<C>, isShorthand: boolean);
    /**
     * Normalize value from inline styles
     *
     * @param value
     */
    abstract normalizeInlineCSSValue(value: string | N): ShortMergeRequest | N | null;
    /**
     * Normalize value from native styles.
     *
     * @param value
     */
    abstract normalizeNativeValue(value: N): ShortMergeRequest | N | null;
    isShorthand(): boolean;
}
