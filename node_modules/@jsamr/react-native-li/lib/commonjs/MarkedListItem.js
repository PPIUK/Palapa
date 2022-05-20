"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MarkedListItem;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component which reproduces CSS3 `display: list-item;` behavior. It
 * prepends its child with a marker box containing a marker string
 * representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
function MarkedListItem({
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
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

const styles = _reactNative.StyleSheet.create({
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