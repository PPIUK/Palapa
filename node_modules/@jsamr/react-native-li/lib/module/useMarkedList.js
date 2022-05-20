import React, { useMemo } from 'react';
import { I18nManager } from 'react-native';
import MarkerBox from './MarkerBox';

const defaultRenderMarker = props => /*#__PURE__*/React.createElement(MarkerBox, props);

const defaultComputeMarkerBoxWidth = (maxNumOfCodepoints, fontSize) => maxNumOfCodepoints * fontSize * 0.6;

const DEFAULT_FONT_SIZE = 14;
/**
 * A hook to reuse MarkedList logic to render custom lists components in
 * combination with {@link MarkedListItem}.
 *
 * @public
 */

export default function useMarkedList({
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
  const maxNumOfCodepoints = useMemo(() => counterRenderer.maxMarkerLenInRange(startIndex, startIndex + length - 1), [counterRenderer, length, startIndex]);
  const syntheticRtlLineReversed = !I18nManager.isRTL && rtlLineReversed;
  const markerTextWidth = useMemo(() => {
    var _markerTextStyle$font;

    return dynamicMarkerBoxWidth && computeMarkerBoxWidth(maxNumOfCodepoints, (_markerTextStyle$font = markerTextStyle === null || markerTextStyle === void 0 ? void 0 : markerTextStyle.fontSize) !== null && _markerTextStyle$font !== void 0 ? _markerTextStyle$font : DEFAULT_FONT_SIZE);
  }, [computeMarkerBoxWidth, markerTextStyle === null || markerTextStyle === void 0 ? void 0 : markerTextStyle.fontSize, maxNumOfCodepoints, dynamicMarkerBoxWidth]);
  const renderer = useMemo(() => rtlMarkerReversed ? counterRenderer.withRtl(rtlMarkerReversed === true ? undefined : rtlMarkerReversed) : counterRenderer, [counterRenderer, rtlMarkerReversed]);
  const syntheticMarkerTextStyle = useMemo(() => ({
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