import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * A component which reproduces CSS3 `display: list-item;` behavior. It
 * prepends its child with a marker box containing a marker string
 * representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
export default function MarkedListItem({
  counterRenderer,
  index,
  startIndex,
  rtlLineReversed,
  rtlMarkerReversed,
  markerTextStyle,
  markerBoxStyle,
  maxNumOfCodepoints,
  markerTextWidth,
  style,
  renderMarker,
  enableMarkerClipping,
  children
}) {
  return /*#__PURE__*/React.createElement(View, {
    testID: "marked-list-item",
    style: [rtlLineReversed ? styles.lineRtl : styles.lineLtr, style],
    key: index
  }, renderMarker({
    counterRenderer,
    rtlMarkerReversed: typeof rtlMarkerReversed === 'boolean' ? rtlMarkerReversed : true,
    counterIndex: index + startIndex,
    maxNumOfCodepoints,
    style: markerBoxStyle,
    markerTextStyle,
    markerTextWidth,
    enableMarkerClipping
  }), children);
}
const styles = StyleSheet.create({
  lineLtr: {
    flexWrap: 'nowrap',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  lineRtl: {
    flexWrap: 'nowrap',
    alignSelf: 'stretch',
    flexDirection: 'row-reverse'
  }
});
//# sourceMappingURL=MarkedListItem.js.map