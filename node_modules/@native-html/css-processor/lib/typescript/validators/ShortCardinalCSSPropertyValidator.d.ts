import { ShortMergeRequest } from '../ShortMergeRequest';
import { ShortCSSPropertyValidator } from './ShortCSSPropertyValidator';
import { CSSPropertyModel, ShortCSSPropertyValidatorParams } from './types';
export declare type Directions = {
    top: string;
    bottom: string;
    left: string;
    right: string;
};
export declare class ShortCardinalCSSpropertyValidator<C extends CSSPropertyModel = any> extends ShortCSSPropertyValidator<C> {
    directions: Readonly<Directions>;
    constructor(params: ShortCSSPropertyValidatorParams<C>, 
    /**
     * Top, Right, Bottom, Left
     */
    directions: Readonly<Directions>);
    normalizeInlineCSSValue(value: string | number): ShortMergeRequest | null;
    normalizeNativeValue(value: string | number): ShortMergeRequest | null;
}
