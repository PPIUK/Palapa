import { CSSLengthUnit } from '../config';
import { LongCSSPropertyValidator } from './LongCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongSizeCSSPropertyValidator<C extends CSSPropertyModel> extends LongCSSPropertyValidator<C, number | string> {
    protected computeSize(value: number, unit: CSSLengthUnit): number | string | null;
    protected computeEmSize(value: number): number;
    protected splitValueAndUnit(value: string): [number, CSSLengthUnit] | null;
    normalizeRawInlineCSSValue(value: string): string | number | null;
    normalizeNativeValue(value: string | number): string | number | null;
}
