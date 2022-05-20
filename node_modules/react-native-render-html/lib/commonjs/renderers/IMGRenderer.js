"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIMGElementProps = useIMGElementProps;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IMGElement = _interopRequireDefault(require("../elements/IMGElement"));

var _SharedPropsProvider = require("../context/SharedPropsProvider");

var _reactNative = require("react-native");

var _useNormalizedUrl = _interopRequireDefault(require("../hooks/useNormalizedUrl"));

var _RenderersPropsProvider = require("../context/RenderersPropsProvider");

var _useContentWidth = _interopRequireDefault(require("../hooks/useContentWidth"));

var _getNativePropsForTNode = _interopRequireDefault(require("../helpers/getNativePropsForTNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * A hook to produce props consumable by {@link IMGElement} component
 * from custom renderer props.
 */
function useIMGElementProps(props) {
  const {
    tnode
  } = props;
  const contentWidth = (0, _useContentWidth.default)();
  const {
    initialDimensions,
    enableExperimentalPercentWidth
  } = (0, _RenderersPropsProvider.useRendererProps)('img');
  const computeImagesMaxWidth = (0, _SharedPropsProvider.useComputeMaxWidthForTag)('img');
  const src = tnode.attributes.src || '';
  const source = {
    uri: (0, _useNormalizedUrl.default)(src)
  };
  const {
    style: rawStyle,
    ...containerProps
  } = (0, _getNativePropsForTNode.default)(props);
  const style = (0, _react.useMemo)(() => rawStyle ? _reactNative.StyleSheet.flatten(rawStyle) : {}, [rawStyle]);
  return {
    contentWidth,
    containerProps,
    enableExperimentalPercentWidth,
    initialDimensions,
    source,
    style,
    testID: 'img',
    computeMaxWidth: computeImagesMaxWidth,
    alt: tnode.attributes.alt,
    altColor: tnode.styles.nativeTextFlow.color,
    width: tnode.attributes.width,
    height: tnode.attributes.height,
    objectFit: tnode.styles.webBlockRet.objectFit
  };
}

const IMGRenderer = props => {
  return /*#__PURE__*/_react.default.createElement(_IMGElement.default, useIMGElementProps(props));
};

var _default = IMGRenderer;
exports.default = _default;
//# sourceMappingURL=IMGRenderer.js.map