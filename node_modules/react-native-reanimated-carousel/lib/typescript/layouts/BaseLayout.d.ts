import React from 'react';
import type { ViewStyle } from 'react-native';
import Animated, { AnimatedStyleProp } from 'react-native-reanimated';
import type { IVisibleRanges } from '../hooks/useVisibleRanges';
export declare type TAnimationStyle = (value: number) => AnimatedStyleProp<ViewStyle>;
export declare const BaseLayout: React.FC<{
    index: number;
    handlerOffsetX: Animated.SharedValue<number>;
    visibleRanges: IVisibleRanges;
    animationStyle: TAnimationStyle;
    children: (ctx: {
        animationValue: Animated.SharedValue<number>;
    }) => React.ReactElement;
}>;
