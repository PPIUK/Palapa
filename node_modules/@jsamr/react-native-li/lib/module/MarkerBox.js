function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { Text, View } from 'react-native';
const markerClipConfig = {
  numberOfLines: 1,
  ellipsizeMode: 'clip'
};
/**
 * Default component to render the list marker.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#marker-pseudo | CSS Lists and Counters Module Level 3, Markers}
 *
 * @public
 */

export default function MarkerBox({
  style,
  counterRenderer,
  counterIndex,
  markerTextStyle,
  markerTextWidth,
  enableMarkerClipping
}) {
  const markerStyle = typeof markerTextWidth === 'number' ? [markerTextStyle, {
    width: markerTextWidth
  }] : markerTextStyle;
  return /*#__PURE__*/React.createElement(View, {
    style: style
  }, /*#__PURE__*/React.createElement(Text, _extends({}, enableMarkerClipping ? markerClipConfig : null, {
    testID: "marker-box",
    style: markerStyle
  }), counterRenderer.renderMarker(counterIndex)));
}
//# sourceMappingURL=MarkerBox.js.map