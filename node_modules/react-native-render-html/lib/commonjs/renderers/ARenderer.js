"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAElementProps = useAElementProps;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useNormalizedUrl = _interopRequireDefault(require("../hooks/useNormalizedUrl"));

var _DocumentMetadataProvider = require("../context/DocumentMetadataProvider");

var _RenderersPropsProvider = require("../context/RenderersPropsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useAnchorOnLinkPress(tnode, onPress) {
  const href = tnode.attributes.href;
  const normalizedHref = (0, _useNormalizedUrl.default)(href);
  const {
    baseTarget
  } = (0, _DocumentMetadataProvider.useDocumentMetadata)();
  const shouldHandleLinkPress = tnode.tagName === 'a' && typeof normalizedHref === 'string' && href.length > 0 && typeof onPress === 'function';
  return shouldHandleLinkPress ? e => onPress(e, normalizedHref, tnode.attributes, tnode.attributes.target || baseTarget) : undefined;
}

function useAElementProps(props) {
  const {
    tnode
  } = props;
  const {
    onPress
  } = (0, _RenderersPropsProvider.useRendererProps)('a');
  const syntheticAnchorOnLinkPress = useAnchorOnLinkPress(tnode, onPress);

  if (typeof syntheticAnchorOnLinkPress !== 'function') {
    return props;
  }

  return { ...props,
    onPress: syntheticAnchorOnLinkPress
  };
}

const ARenderer = props => {
  return /*#__PURE__*/_react.default.createElement(props.TDefaultRenderer, useAElementProps(props));
};

var _default = ARenderer;
exports.default = _default;
//# sourceMappingURL=ARenderer.js.map