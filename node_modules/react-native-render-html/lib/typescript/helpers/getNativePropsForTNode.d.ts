import { TBlock, TPhrasing, TText } from '@native-html/transient-render-engine';
import { TextProps, ViewProps } from 'react-native';
import { TDefaultRendererProps } from '../shared-types';
/**
 * Extract React Native props for a given {@link TNode}, such as those which
 * would be passed to `Text`, `View` or `GenericPressable` by `TDefaultRenderer`.
 *
 * This helper function is peculiarly useful when one wants a custom renderer
 * which uses a different native component, for example `Animated.Text` instead
 * of default `Text`.
 *
 * @public
 *
 * @example
 *
 * ```tsx
 * import React from 'react';
 * import { Animated } from 'react-native';
 * import { CustomTextualRenderer, getNativePropsForTNode } from 'react-native-render-html';
 *
 * const AnimatedSpanRenderer: CustomTextualRenderer = (props) => {
 *   const nativeProps = getNativePropsForTNode(props);
 *   // This is equivalent to a TDefaultRenderer which `Text` is replaced
 *   // with Animated.Text
 *   return <Animated.Text {...nativeProps} />;
 * }
 * ```
 */
export default function getNativePropsForTNode<T extends TPhrasing | TText | TBlock>(props: TDefaultRendererProps<T>): T extends TBlock ? ViewProps & {
    onPress?: () => void;
} : TextProps;
