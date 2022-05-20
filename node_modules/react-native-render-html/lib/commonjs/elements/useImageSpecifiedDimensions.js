"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useImageSpecifiedDimensions;

var _react = require("react");

var _getDimensionsWithAspectRatio = _interopRequireDefault(require("./getDimensionsWithAspectRatio"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeSize(dimension, options) {
  const containerDimension = options.containerDimension || null;
  const enablePercentWidth = options.enablePercentWidth || false;

  if (dimension === null || dimension === undefined || Number.isNaN(dimension)) {
    return null;
  }

  if (typeof dimension === 'number') {
    return dimension;
  }

  if (dimension.search('%') !== -1 && enablePercentWidth && typeof containerDimension === 'number') {
    return parseFloat(dimension) * containerDimension / 100;
  } else if (dimension.trim().match(/^[\d.]+$/)) {
    return parseFloat(dimension);
  }

  return null;
}
/**
 * Extract specified dimensions from props.
 */


function deriveSpecifiedDimensionsFromProps({
  width,
  height,
  contentWidth,
  flatStyle,
  enableExperimentalPercentWidth: enablePercentWidth
}) {
  const normalizeOptionsWidth = {
    enablePercentWidth,
    containerDimension: contentWidth
  };
  const normalizeOptionsHeight = {
    enablePercentWidth: false
  };
  const widthProp = normalizeSize(width, normalizeOptionsWidth);
  const heightProp = normalizeSize(height, normalizeOptionsHeight);
  const styleWidth = normalizeSize(flatStyle.width, normalizeOptionsWidth);
  const styleHeight = normalizeSize(flatStyle.height, normalizeOptionsHeight);
  return (0, _getDimensionsWithAspectRatio.default)(styleWidth !== null && styleWidth !== void 0 ? styleWidth : widthProp, styleHeight !== null && styleHeight !== void 0 ? styleHeight : heightProp, flatStyle.aspectRatio);
}

function useImageSpecifiedDimensions(props) {
  const {
    contentWidth,
    enableExperimentalPercentWidth,
    style,
    width,
    height
  } = props;
  const flatStyle = (0, _react.useMemo)(() => _reactNative.StyleSheet.flatten(style) || {}, [style]);
  const specifiedDimensions = (0, _react.useMemo)(() => deriveSpecifiedDimensionsFromProps({
    contentWidth,
    enableExperimentalPercentWidth,
    width,
    height,
    flatStyle
  }), [contentWidth, enableExperimentalPercentWidth, flatStyle, height, width]);
  return {
    flatStyle,
    specifiedDimensions
  };
}
//# sourceMappingURL=useImageSpecifiedDimensions.js.map