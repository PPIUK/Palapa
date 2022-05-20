"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TDefaultTextRenderer = exports.TDefaultPhrasingRenderer = exports.TDefaultBlockRenderer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SharedPropsProvider = require("./context/SharedPropsProvider");

var _useAssembledCommonProps = _interopRequireDefault(require("./hooks/useAssembledCommonProps"));

var _TChildrenRendererContext = require("./context/TChildrenRendererContext");

var _renderTextualContent = _interopRequireDefault(require("./renderTextualContent"));

var _RenderRegistryProvider = require("./context/RenderRegistryProvider");

var _renderBlockContent = _interopRequireDefault(require("./renderBlockContent"));

var _renderEmptyContent = _interopRequireDefault(require("./renderEmptyContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TDefaultBlockRenderer = _renderBlockContent.default.bind(null);

exports.TDefaultBlockRenderer = TDefaultBlockRenderer;
TDefaultBlockRenderer.displayName = 'TDefaultBlockRenderer';

const TDefaultPhrasingRenderer = _renderTextualContent.default.bind(null);

exports.TDefaultPhrasingRenderer = TDefaultPhrasingRenderer;
TDefaultPhrasingRenderer.displayName = 'TDefaultPhrasingRenderer';

const TDefaultTextRenderer = _renderTextualContent.default.bind(null);

exports.TDefaultTextRenderer = TDefaultTextRenderer;
TDefaultTextRenderer.displayName = 'TDefaultTextRenderer';

function isGhostTNode(tnode) {
  return tnode.type === 'text' && (tnode.data === '' || tnode.data === ' ') || tnode.type === 'empty';
}
/**
 * A component to render any {@link TNode}.
 */


const TNodeRenderer = /*#__PURE__*/(0, _react.memo)(function MemoizedTNodeRenderer(props) {
  const {
    tnode
  } = props;
  const sharedProps = (0, _SharedPropsProvider.useSharedProps)();
  const renderRegistry = (0, _RenderRegistryProvider.useRendererRegistry)();
  const TNodeChildrenRenderer = (0, _TChildrenRendererContext.useTNodeChildrenRenderer)();
  const tnodeProps = { ...props,
    TNodeChildrenRenderer,
    sharedProps
  };
  const renderer = tnode.type === 'block' || tnode.type === 'document' ? TDefaultBlockRenderer : tnode.type === 'text' ? TDefaultTextRenderer : tnode.type === 'phrasing' ? TDefaultPhrasingRenderer : _renderEmptyContent.default;
  const {
    assembledProps,
    Renderer
  } = (0, _useAssembledCommonProps.default)(tnodeProps, renderer);

  switch (tnode.type) {
    case 'empty':
      return (0, _renderEmptyContent.default)(assembledProps);

    case 'text':
      const InternalTextRenderer = renderRegistry.getInternalTextRenderer(props.tnode.tagName);

      if (InternalTextRenderer) {
        return /*#__PURE__*/_react.default.createElement(InternalTextRenderer, tnodeProps);
      } // If ghost line prevention is enabled and the text data is empty, render
      // nothing to avoid React Native painting a 20px height line.
      // See also https://git.io/JErwX


      if (tnodeProps.tnode.data === '' && tnodeProps.sharedProps.enableExperimentalGhostLinesPrevention) {
        return null;
      }

      break;

    case 'phrasing':
      // When a TPhrasing node is anonymous and has only one child, its
      // rendering amounts to rendering its only child.
      if (tnodeProps.sharedProps.bypassAnonymousTPhrasingNodes && tnodeProps.tnode.tagName == null && tnodeProps.tnode.children.length <= 1) {
        return /*#__PURE__*/_react.default.createElement(TNodeChildrenRenderer, {
          tnode: props.tnode
        });
      } // If ghost line prevention is enabled and the tnode is an anonymous empty
      // phrasing node, render nothing to avoid React Native painting a 20px
      // height line. See also https://git.io/JErwX


      if (tnodeProps.sharedProps.enableExperimentalGhostLinesPrevention && tnodeProps.tnode.tagName == null && tnodeProps.tnode.children.every(isGhostTNode)) {
        return null;
      }

      break;
  }

  const renderFn = tnode.type === 'block' || tnode.type === 'document' ? _renderBlockContent.default : _renderTextualContent.default;
  return Renderer === null ? renderFn(assembledProps) : /*#__PURE__*/_react.default.createElement(Renderer, assembledProps);
});
const defaultProps = {
  propsFromParent: {
    collapsedMarginTop: null
  }
}; // @ts-expect-error default props must be defined

TNodeRenderer.defaultProps = defaultProps;
var _default = TNodeRenderer;
exports.default = _default;
//# sourceMappingURL=TNodeRenderer.js.map