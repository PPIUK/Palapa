"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useAssembledCommonProps;

var _mergeCollapsedMargins = _interopRequireDefault(require("../helpers/mergeCollapsedMargins"));

var _RenderRegistryProvider = require("../context/RenderRegistryProvider");

var _SharedPropsProvider = require("../context/SharedPropsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @internal
 */
function useAssembledCommonProps({
  tnode,
  propsFromParent,
  sharedProps,
  renderIndex,
  renderLength,
  TNodeChildrenRenderer
}, TDefault) {
  const {
    Default,
    Custom
  } = (0, _RenderRegistryProvider.useRendererConfig)(tnode);
  const containerProps = (0, _SharedPropsProvider.useDefaultContainerProps)();
  const assembledProps = {
    tnode,
    propsFromParent,
    sharedProps,
    TDefaultRenderer: TDefault,
    TNodeChildrenRenderer,
    style: (0, _mergeCollapsedMargins.default)(propsFromParent === null || propsFromParent === void 0 ? void 0 : propsFromParent.collapsedMarginTop, tnode.getNativeStyles()),
    type: tnode.type === 'text' || tnode.type === 'phrasing' ? 'text' : 'block',
    propsForChildren: tnode.tagName ? {} : propsFromParent,
    InternalRenderer: Default || TDefault,
    renderIndex,
    renderLength,
    ...containerProps
  };
  return {
    assembledProps,
    Renderer: Custom || Default || null
  };
}
//# sourceMappingURL=useAssembledCommonProps.js.map