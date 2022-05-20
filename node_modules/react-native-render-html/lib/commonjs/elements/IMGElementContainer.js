"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IMGElementContainer;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _GenericPressable = _interopRequireDefault(require("../GenericPressable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
/**
 * Container for the {@link IMGElement} component.
 */


function IMGElementContainer({
  style,
  onPress,
  testID,
  children,
  ...otherProps
}) {
  const containerStyle = (0, _react.useMemo)(() => {
    const {
      width,
      height,
      ...remainingStyle
    } = style;
    return [styles.container, remainingStyle];
  }, [style]);
  const Container = typeof onPress === 'function' ? _GenericPressable.default : _reactNative.View;
  return /*#__PURE__*/_react.default.createElement(Container, { ...otherProps,
    style: containerStyle,
    onPress,
    testID
  }, children);
}
//# sourceMappingURL=IMGElementContainer.js.map