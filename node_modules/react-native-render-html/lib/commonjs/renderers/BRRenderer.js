"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emptyProps = {
  testID: 'br'
};
const isWeb = _reactNative.Platform.OS === 'web';

function renderEmptyLineBreak(tnode) {
  const lineHeight = tnode.styles.nativeTextFlow.lineHeight || tnode.styles.nativeTextFlow.fontSize * 1.4;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      height: lineHeight
    }
  });
}

const BRRenderer = function BRRenderer({
  renderIndex,
  renderLength,
  sharedProps,
  tnode
}) {
  // If it is the last child and BR collapsing is enabled, render an empty
  // string to prevent inserting an undesired space to follow HTML specs,
  // unless the platform is web and it is also the first child.
  //
  // Note that we are taking advantage of the Ghost Line oddity in React
  // Native, where an empty <Text /> element displays a line, since a
  // line break opening **and** closing an inline formatting context
  // should be printed as a one line-height item.
  const isFirst = renderIndex === 0;
  const isLast = renderIndex === renderLength - 1;
  const isLonelyBreak = isFirst && isLast;
  const shouldCollapse = sharedProps.enableExperimentalBRCollapsing && (isFirst ? isLast && !isWeb : isLast);
  return isLonelyBreak && shouldCollapse ? renderEmptyLineBreak(tnode) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, emptyProps, shouldCollapse ? '' : '\n');
};

BRRenderer.isNativeInternalTextRenderer = true;
var _default = BRRenderer;
exports.default = _default;
//# sourceMappingURL=BRRenderer.js.map