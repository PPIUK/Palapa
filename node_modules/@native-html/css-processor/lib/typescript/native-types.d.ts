import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { CSSLongNativeBlockPropKey, CSSLongNativeTextPropKey, NativeTextStyleKey, CSSShortPropsKey, CSSLongNativeUntranslatableBlockPropKey } from './property-types';
export declare type ExtendedNativeViewStyleKeys = keyof ViewStyle | keyof ImageStyle;
export declare type NativeDirectionalStyleKeys = Extract<ExtendedNativeViewStyleKeys, 'borderBottomEndRadius' | 'borderBottomStartRadius' | 'borderTopEndRadius' | 'borderTopStartRadius' | 'borderEndColor' | 'borderEndWidth' | 'borderStartColor' | 'borderStartWidth' | 'marginEnd' | 'marginStart' | 'paddingEnd' | 'paddingStart' | 'start' | 'end'>;
export declare type ExtraNativeShortViewStyleKeys = Extract<ExtendedNativeViewStyleKeys, 'marginHorizontal' | 'marginVertical' | 'paddingHorizontal' | 'paddingVertical'>;
export declare type ExtraNativeShortStyle = Pick<TextStyle & ViewStyle, ExtraNativeShortViewStyleKeys | NativeShortKeys>;
export declare type ExtraNativeUntranslatedLongStyles = Pick<ViewStyle, CSSLongNativeUntranslatableBlockPropKey>;
/**
 * Extraneous React Native ViewStyle keys.
 */
export declare type ExtraNativeLongViewStyleKeys = Exclude<Exclude<ExtendedNativeViewStyleKeys, CSSShortPropsKey>, CSSLongNativeBlockPropKey | NativeDirectionalStyleKeys | ExtraNativeShortViewStyleKeys>;
/**
 * Native Short keys.
 */
export declare type NativeShortKeys = Extract<CSSShortPropsKey, NativeTextStyleKey | keyof ViewStyle>;
/**
 * Extraneous longhand React Native TextStyle keys.
 */
export declare type ExtraNativeTextStyleKeys = Exclude<Exclude<NativeTextStyleKey, CSSShortPropsKey>, CSSLongNativeTextPropKey>;
export declare type ExtraNativeTextStyle = Partial<Pick<TextStyle, ExtraNativeTextStyleKeys>>;
export declare type ExtraNativeViewStyle = Partial<Pick<ViewStyle & ImageStyle, ExtraNativeLongViewStyleKeys | ExtraNativeShortViewStyleKeys>>;
