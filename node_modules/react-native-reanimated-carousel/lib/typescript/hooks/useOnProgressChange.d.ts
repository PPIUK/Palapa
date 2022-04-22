import Animated from 'react-native-reanimated';
import type { TCarouselProps } from '../types';
export declare function useOnProgressChange(opts: {
    size: number;
    offsetX: Animated.SharedValue<number>;
    rawData: TCarouselProps['data'];
} & Pick<TCarouselProps, 'onProgressChange'>): void;
