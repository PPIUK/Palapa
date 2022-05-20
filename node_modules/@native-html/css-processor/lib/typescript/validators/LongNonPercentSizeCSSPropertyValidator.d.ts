import { CSSLengthUnit } from '../config';
import { LongSizeCSSPropertyValidator } from './LongSizeCSSPropertyValidator';
import { CSSPropertyModel } from './types';
export declare class LongNonPercentSizeCSSPropertyValidator<C extends CSSPropertyModel> extends LongSizeCSSPropertyValidator<C> {
    protected computeSize(value: number, unit: CSSLengthUnit): string | number | null;
}
