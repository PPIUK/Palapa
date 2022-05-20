"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMarkedList;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _MarkerBox = _interopRequireDefault(require("./MarkerBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultRenderMarker = props => /*#__PURE__*/_react.default.createElement(_MarkerBox.default, props);

const defaultComputeMarkerBoxWidth = (maxNumOfCodepoints, fontSize) => maxNumOfCodepoints * fontSize * 0.6;

const DEFAULT_FONT_SIZE = 14;
/**
 * A hook to reuse MarkedList logic to render custom lists components in
 * combination with {@link MarkedListItem}.
 *
 * @public
 */

function useMarkedList({
  counterRenderer,
  startIndex = 1,
  lineStyle,
  rtlLineReversed = false,
  rtlMarkerReversed = false,
  markerTextStyle,
  markerBoxStyle,
  dynamicMarkerBoxWidth = true,
  length = 0,
  renderMarker = defaultRenderMarker,
  enableMarkerClipping = false,
  computeMarkerBoxWidth = defaultComputeMarkerBoxWidth
}) {
  const maxNumOfCodepoints = (0, _react.useMemo)(() => counterRenderer.maxMarkerLenInRange(startIndex, startIndex + length - 1), [counterRenderer, length, startIndex]);
  const syntheticRtlLineReversed = !_reactNative.I18nManager.isRTL && rtlLineReversed;
  const markerTextWidth = (0, _react.useMemo)(() => {
    var _markerTextStyle$font;

    return dynamicMarkerBoxWidth && computeMarkerBoxWidth(maxNumOfCodepoints, (_markerTextStyle$font = markerTextStyle === null || markerTextStyle === void 0 ? void 0 : markerTextStyle.fontSize) !== null && _markerTextStyle$font !== void 0 ? _markerTextStyle$font : DEFAULT_FONT_SIZE);
  }, [computeMarkerBoxWidth, markerTextStyle === null || markerTextStyle === void 0 ? void 0 : markerTextStyle.fontSize, maxNumOfCodepoints, dynamicMarkerBoxWidth]);
  const renderer = (0, _react.useMemo)(() => rtlMarkerReversed ? counterRenderer.withRtl(rtlMarkerReversed === true ? undefined : rtlMarkerReversed) : counterRenderer, [counterRenderer, rtlMarkerReversed]);
  const syntheticMarkerTextStyle = (0, _react.useMemo)(() => ({
    flexGrow: 0,
    flexShrink: 0,
    fontSize: DEFAULT_FONT_SIZE,
    textAlign: syntheticRtlLineReversed ? 'left' : 'right',
    alignSelf: syntheticRtlLineReversed ? 'flex-start' : 'flex-end',
    ...markerTextStyle
  }), [markerTextStyle, syntheticRtlLineReversed]);
  return {
    maxNumOfCodepoints,
    rtlMarkerReversed,
    markerTextWidth,
    renderMarker,
    startIndex,
    rtlLineReversed: syntheticRtlLineReversed,
    markerTextStyle: syntheticMarkerTextStyle,
    markerBoxStyle: markerBoxStyle,
    counterRenderer: renderer,
    style: lineStyle,
    enableMarkerClipping
  };
}
//# sourceMappingURL=useMarkedList.js.map