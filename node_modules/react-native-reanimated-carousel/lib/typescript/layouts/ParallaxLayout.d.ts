import React from 'react';
import Animated from 'react-native-reanimated';
import type { ComputedDirectionTypes } from 'src/types';
import type { IVisibleRanges } from '../hooks/useVisibleRanges';
import type { ILayoutConfig } from './parallax';
export declare const ParallaxLayout: React.FC<ComputedDirectionTypes<{
    loop?: boolean;
    handlerOffsetX: Animated.SharedValue<number>;
    index: number;
    data: unknown[];
    visibleRanges: IVisibleRanges;
} & ILayoutConfig>>;
