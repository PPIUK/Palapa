import { ShortMergeRequest } from '../ShortMergeRequest';
import { ShortCSSPropertyValidator } from './ShortCSSPropertyValidator';
import { CSSPropertyModel, ShortCSSPropertyValidatorParams } from './types';
export declare class ShortDualNativepropertyValidator<C extends CSSPropertyModel = any> extends ShortCSSPropertyValidator<C> {
    directions: [string, string];
    constructor(params: ShortCSSPropertyValidatorParams<C>, 
    /**
     * First direction, second direction.
     */
    directions: [string, string]);
    normalizeInlineCSSValue(): null;
    normalizeNativeValue(value: string | number): ShortMergeRequest;
}
