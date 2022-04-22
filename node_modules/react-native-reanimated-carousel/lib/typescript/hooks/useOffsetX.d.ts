import Animated from 'react-native-reanimated';
import type { IVisibleRanges } from './useVisibleRanges';
export interface IOpts {
    index: number;
    size: number;
    handlerOffsetX: Animated.SharedValue<number>;
    data: unknown[];
    type?: 'positive' | 'negative';
    viewCount?: number;
    loop?: boolean;
}
export declare const useOffsetX: (opts: IOpts, visibleRanges: IVisibleRanges) => Readonly<Animated.SharedValue<number>>;
