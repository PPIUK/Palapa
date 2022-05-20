"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRendererRegistry = useRendererRegistry;
exports.useRendererConfig = useRendererConfig;
exports.useInternalTextRenderer = useInternalTextRenderer;
exports.default = RenderRegistryProvider;
exports.RenderRegistryContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useProfiler = _interopRequireDefault(require("../hooks/useProfiler"));

var _RenderRegistry = _interopRequireDefault(require("../render/RenderRegistry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RenderRegistryContext = /*#__PURE__*/_react.default.createContext(null);

exports.RenderRegistryContext = RenderRegistryContext;

function useRendererRegistry() {
  return _react.default.useContext(RenderRegistryContext);
}

function useRendererConfig(tnode) {
  return _react.default.useContext(RenderRegistryContext).getRendererConfigForTNode(tnode);
}

function useInternalTextRenderer(tnode) {
  return _react.default.useContext(RenderRegistryContext).getInternalTextRenderer(tnode.tagName);
}

function RenderRegistryProvider({
  children,
  elementModels,
  renderers
}) {
  const profile = (0, _useProfiler.default)({
    prop: 'renderers'
  });
  const registry = (0, _react.useMemo)(() => {
    typeof __DEV__ === 'boolean' && __DEV__ && profile();
    return new _RenderRegistry.default(renderers, elementModels);
  }, [renderers, elementModels, profile]);
  return /*#__PURE__*/_react.default.createElement(RenderRegistryContext.Provider, {
    value: registry
  }, children);
}
//# sourceMappingURL=RenderRegistryProvider.js.map