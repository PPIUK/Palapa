import { CSSLengthUnit } from '../config';
import { LongSizeCSSPropertyValidator } from './LongSizeCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongFontSizeCSSValidator<C extends CSSPropertyModel> extends LongSizeCSSPropertyValidator<C> {
    protected computeSize(value: number, unit: CSSLengthUnit): string | number | null;
    normalizeRawInlineCSSValue(value: string): string | number | null;
    normalizeNativeValue(value: string | number): string | number | null;
}
