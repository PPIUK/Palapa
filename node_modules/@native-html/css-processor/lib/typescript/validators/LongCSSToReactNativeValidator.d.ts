import { CSSPropertyModel } from './types';
import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
export declare class LongCSSToReactNativeValidator<C extends CSSPropertyModel = any> extends LongCSSPropertyValidator<C> {
    normalizeRawInlineCSSValue(value: string): any;
}
