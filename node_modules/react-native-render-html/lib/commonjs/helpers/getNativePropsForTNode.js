"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNativePropsForTNode;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const empty = {};
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

function getNativePropsForTNode(props) {
  var _tnode$getReactNative, _ref;

  const {
    tnode,
    style,
    type,
    nativeProps: passedNativeProps,
    onPress,
    children: overridenChildren,
    propsForChildren,
    viewProps,
    textProps,
    TNodeChildrenRenderer
  } = props;
  const children = overridenChildren || (tnode.type === 'text' ? tnode.data : /*#__PURE__*/_react.default.createElement(TNodeChildrenRenderer, {
    tnode,
    propsForChildren
  }));
  const switchProp = type === 'block' ? viewProps : textProps;
  const propsFromModel = ((_tnode$getReactNative = tnode.getReactNativeProps()) === null || _tnode$getReactNative === void 0 ? void 0 : _tnode$getReactNative[type === 'block' ? 'view' : 'text']) || empty;
  const syntheticOnPress = (_ref = onPress !== null && onPress !== void 0 ? onPress : passedNativeProps === null || passedNativeProps === void 0 ? void 0 : passedNativeProps.onPress) !== null && _ref !== void 0 ? _ref : propsFromModel.onPress;
  const nativeProps = { ...(typeof syntheticOnPress === 'function' ? {
      accessibilityRole: type === 'block' ? 'button' : 'link'
    } : null),
    ...propsFromModel,
    ...passedNativeProps,
    ...switchProp,
    children,
    onPress: syntheticOnPress,
    style: [style, passedNativeProps === null || passedNativeProps === void 0 ? void 0 : passedNativeProps.style, switchProp.style],
    testID: tnode.tagName || undefined
  };
  return nativeProps;
}
//# sourceMappingURL=getNativePropsForTNode.js.map