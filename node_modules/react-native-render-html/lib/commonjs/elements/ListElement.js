"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkerBoxStyle = getMarkerBoxStyle;
exports.default = ListElement;

var _reactNative = require("react-native");

var _react = _interopRequireDefault(require("react"));

var _reactNativeLi = require("@jsamr/react-native-li");

var _TChildrenRendererContext = require("../context/TChildrenRendererContext");

var _constants = require("../constants");

var _pick = _interopRequireDefault(require("ramda/src/pick"));

var _ListStyleSpecsProvider = require("../context/ListStyleSpecsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getStartIndex(tnode) {
  const parsedIndex = tnode.attributes.start ? Number(tnode.attributes.start) : Number.NaN;
  return Number.isNaN(parsedIndex) ? 1 : parsedIndex;
}

const pickMarkerTextStyles = (0, _pick.default)(['fontStyle', 'fontSize', 'fontWeight', 'fontFamily', 'fontVariant', 'color', 'lineHeight']);

function extractMarkerTextStyle(tnode) {
  return Object.assign({
    lineHeight: 14 * 1.3,
    fontSize: 14,
    color: _constants.DEFAULT_TEXT_COLOR
  }, pickMarkerTextStyles(tnode.styles.nativeTextFlow));
}

function getMarkerBoxStyle(markerWidth, paddingValue) {
  const markerBoxWidth = typeof markerWidth === 'number' ? typeof paddingValue === 'number' ? Math.max(paddingValue, markerWidth) : markerWidth : paddingValue;
  return {
    width: markerBoxWidth
  };
}

const listStyleTypeFallbackRecord = {
  ol: 'decimal',
  ul: 'disc'
};

function ListElement({
  tnode,
  TDefaultRenderer,
  listType,
  style,
  getFallbackListStyleTypeFromNestLevel,
  markerBoxStyle,
  markerTextStyle: providedMarkerTextStyle,
  enableExperimentalRtl = false,
  enableRemoveTopMarginIfNested = true,
  enableRemoveBottomMarginIfNested = true,
  enableDynamicMarkerBoxWidth = false,
  ...props
}) {
  var _tnode$parent, _tnode$parent2, _tnode$parent3, _style$fixedPaddingRu;

  const listStyleSpecs = (0, _ListStyleSpecsProvider.useListStyleSpecs)();
  const markers = tnode.markers;
  const nestLevel = listType === 'ol' ? markers.olNestLevel : markers.ulNestLevel;
  const TChildrenRenderer = (0, _TChildrenRendererContext.useTChildrenRenderer)();
  const rtl = enableExperimentalRtl && (style.direction === 'rtl' || markers.direction === 'rtl');
  const removeTopMarginStyle = enableRemoveTopMarginIfNested && ((_tnode$parent = tnode.parent) === null || _tnode$parent === void 0 ? void 0 : _tnode$parent.tagName) === 'li' && tnode.nodeIndex === 0 ? styles.zeroMarginTop : null;
  const removeBottomMarginStyle = enableRemoveBottomMarginIfNested && ((_tnode$parent2 = tnode.parent) === null || _tnode$parent2 === void 0 ? void 0 : _tnode$parent2.tagName) === 'li' && tnode.nodeIndex === ((_tnode$parent3 = tnode.parent) === null || _tnode$parent3 === void 0 ? void 0 : _tnode$parent3.children.length) - 1 ? styles.zeroMarginBottom : null;
  const ownListType = tnode.styles.webTextFlow.listStyleType;
  const selectedListType = getFallbackListStyleTypeFromNestLevel(nestLevel) || ownListType || listStyleTypeFallbackRecord[listType];
  const listStyleType = ownListType || selectedListType;

  if (typeof __DEV__ === 'boolean' && __DEV__ && !(listStyleType in listStyleSpecs)) {
    if (listStyleType.match(/^("|')/)) {
      console.warn("This library doesn't support strings for list-style-type CSS properties.");
    } else {
      console.warn(`list-style-type "${listStyleType}" is not handled by react-native-render-html. ` + 'You can easily provide support for this style via "customListStyleSpecs" prop.');
    }
  }

  const spec = listStyleType in listStyleSpecs ? listStyleSpecs[listStyleType] : listStyleSpecs[selectedListType];
  const counterRenderer = spec.counterStyleRenderer;
  const startIndex = getStartIndex(tnode);
  const markerTextStyle = typeof providedMarkerTextStyle === 'object' && providedMarkerTextStyle ? { ...extractMarkerTextStyle(tnode),
    ...providedMarkerTextStyle
  } : extractMarkerTextStyle(tnode);
  const itemProps = (0, _reactNativeLi.useMarkedList)({
    counterRenderer,
    startIndex,
    markerTextStyle,
    markerBoxStyle,
    rtlLineReversed: rtl,
    rtlMarkerReversed: rtl,
    length: tnode.children.length,
    dynamicMarkerBoxWidth: enableDynamicMarkerBoxWidth,
    renderMarker: spec.renderMarker
  });
  const markerWidth = itemProps.markerTextWidth;
  const fixedPaddingRule = rtl ? 'paddingRight' : 'paddingLeft'; // Fallback to padding-left value on RTL mode

  const paddingValue = (_style$fixedPaddingRu = style[fixedPaddingRule]) !== null && _style$fixedPaddingRu !== void 0 ? _style$fixedPaddingRu : style.paddingLeft;
  const markerBoxWidthStyle = getMarkerBoxStyle(markerWidth, paddingValue);

  const renderChild = ({
    childElement,
    key,
    index
  }) => /*#__PURE__*/_react.default.createElement(_reactNativeLi.MarkedListItem, _extends({
    key: key,
    index: index
  }, itemProps, {
    markerBoxStyle: [itemProps.markerBoxStyle, markerBoxWidthStyle],
    markerTextStyle: itemProps.markerTextStyle,
    enableMarkerClipping: true,
    style: itemProps.style
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.shrink
  }, childElement));

  const dynamicPaddingStyle = {
    position: 'relative',
    [fixedPaddingRule]: 0
  };
  return /*#__PURE__*/_react.default.createElement(TDefaultRenderer, _extends({
    tnode: tnode,
    style: [style, removeTopMarginStyle, removeBottomMarginStyle, dynamicPaddingStyle]
  }, props), /*#__PURE__*/_react.default.createElement(TChildrenRenderer, {
    tchildren: tnode.children,
    renderChild: renderChild
  }));
}

const styles = _reactNative.StyleSheet.create({
  zeroMarginTop: {
    marginTop: 0
  },
  zeroMarginBottom: {
    marginBottom: 0
  },
  shrink: {
    flexShrink: 1
  }
});
//# sourceMappingURL=ListElement.js.map