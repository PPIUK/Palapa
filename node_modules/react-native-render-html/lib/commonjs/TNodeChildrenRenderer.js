"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTNodeChildrenProps = useTNodeChildrenProps;
exports.default = void 0;

var _SharedPropsProvider = require("./context/SharedPropsProvider");

var _TChildrenRenderer = require("./TChildrenRenderer");

var _renderChildren = _interopRequireDefault(require("./renderChildren"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isCollapsible(tnode) {
  return tnode.type === 'block' || tnode.type === 'phrasing';
}
/**
 * A hook especially useful when one need to tamper with children in a custom
 * renderer. Should be used with {@link TChildrenRenderer}.
 *
 * @example
 * For example, a custom renderer which inserts ads in an article:
 *
 * ```tsx
 * function ArticleRenderer(props) {
 *   const { tnode, TDefaultRenderer, ...defaultRendererProps } = props;
 *   const tchildrenProps = useTNodeChildrenProps(props);
 *   const firstChildrenChunk = tnode.children.slice(0, 2);
 *   const secondChildrenChunk = tnode.children.slice(2, 4);
 *   const thirdChildrenChunk = tnode.children.slice(4, 5);
 *   return (
 *     <TDefaultRenderer tnode={tnode} {...defaultRendererProps}>
 *       <TChildrenRenderer {...tchildrenProps} tchildren={firstChildrenChunk} />
 *       {firstChildrenChunk.length === 2 ? <AdComponent /> : null}
 *       <TChildrenRenderer {...tchildrenProps} tchildren={secondChildrenChunk} />
 *       {secondChildrenChunk.length === 2 ? <AdComponent /> : null}
 *       <TChildrenRenderer {...tchildrenProps} tchildren={thirdChildrenChunk} />
 *     </TDefaultRenderer>
 *   );
 * };
 * ```
 */


function useTNodeChildrenProps({
  tnode,
  propsForChildren,
  disableMarginCollapsing = false,
  renderChild
}) {
  const {
    enableExperimentalMarginCollapsing
  } = (0, _SharedPropsProvider.useSharedProps)();
  const shouldCollapseChildren = enableExperimentalMarginCollapsing && !disableMarginCollapsing && isCollapsible(tnode);
  return {
    propsForChildren,
    disableMarginCollapsing: !shouldCollapseChildren,
    tchildren: tnode.children,
    renderChild
  };
}
/**
 * A component to render all children of a {@link TNode}.
 */


function TNodeChildrenRenderer(props) {
  if (props.tnode.type === 'text') {
    // see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20544
    return props.tnode.data;
  } // A tnode type will never change. We can safely
  // ignore the non-conditional rule of hooks.
  // eslint-disable-next-line react-hooks/rules-of-hooks


  return (0, _renderChildren.default)(useTNodeChildrenProps(props));
}
/**
 * @ignore
 */


TNodeChildrenRenderer.defaultProps = _TChildrenRenderer.tchildrenRendererDefaultProps;
var _default = TNodeChildrenRenderer;
exports.default = _default;
//# sourceMappingURL=TNodeChildrenRenderer.js.map