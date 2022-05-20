"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RenderHTMLConfigProvider;
exports.renderHTMLConfigPropTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RenderersPropsProvider = _interopRequireDefault(require("./context/RenderersPropsProvider"));

var _SharedPropsProvider = _interopRequireDefault(require("./context/SharedPropsProvider"));

var _TChildrenRendererContext = _interopRequireDefault(require("./context/TChildrenRendererContext"));

var _TNodeChildrenRenderer = _interopRequireDefault(require("./TNodeChildrenRenderer"));

var _TChildrenRenderer = _interopRequireDefault(require("./TChildrenRenderer"));

var _sourceLoaderContext = _interopRequireWildcard(require("./context/sourceLoaderContext"));

var _RenderRegistryProvider = _interopRequireDefault(require("./context/RenderRegistryProvider"));

var _TRenderEngineProvider = require("./TRenderEngineProvider");

var _useProfiler = _interopRequireDefault(require("./hooks/useProfiler"));

var _ListStyleSpecsProvider = _interopRequireDefault(require("./context/ListStyleSpecsProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const childrenRendererContext = {
  TChildrenRenderer: _TChildrenRenderer.default,
  TNodeChildrenRenderer: _TNodeChildrenRenderer.default
};
const renderHTMLConfigPropTypes = {
  bypassAnonymousTPhrasingNodes: _propTypes.default.bool,
  defaultTextProps: _propTypes.default.object,
  defaultViewProps: _propTypes.default.object,
  enableExperimentalBRCollapsing: _propTypes.default.bool,
  enableExperimentalGhostLinesPrevention: _propTypes.default.bool,
  enableExperimentalMarginCollapsing: _propTypes.default.bool,
  remoteErrorView: _propTypes.default.func,
  remoteLoadingView: _propTypes.default.func,
  debug: _propTypes.default.bool,
  computeEmbeddedMaxWidth: _propTypes.default.func,
  renderersProps: _propTypes.default.object,
  WebView: _propTypes.default.any,
  GenericPressable: _propTypes.default.any,
  defaultWebViewProps: _propTypes.default.object,
  pressableHightlightColor: _propTypes.default.string,
  customListStyleSpecs: _propTypes.default.object,
  renderers: _propTypes.default.object,
  provideEmbeddedHeaders: _propTypes.default.func
};
/**
 * A component to provide configuration for {@link RenderHTMLSource}
 * descendants, to be used in conjunction with {@link TRenderEngineProvider}.
 */

exports.renderHTMLConfigPropTypes = renderHTMLConfigPropTypes;

function RenderHTMLConfigProvider(props) {
  const {
    remoteErrorView,
    remoteLoadingView,
    renderersProps,
    children,
    renderers,
    ...sharedProps
  } = props;
  const engine = (0, _TRenderEngineProvider.useAmbientTRenderEngine)();
  const profile = (0, _useProfiler.default)({
    prop: 'remoteErrorView or remoteLoadingView'
  });
  const sourceLoaderConfig = (0, _react.useMemo)(() => {
    typeof __DEV__ === 'boolean' && __DEV__ && profile();
    return {
      remoteErrorView: remoteErrorView || _sourceLoaderContext.defaultRenderError,
      remoteLoadingView: remoteLoadingView || _sourceLoaderContext.defaultRenderLoading
    };
  }, [remoteErrorView, remoteLoadingView, profile]);
  return /*#__PURE__*/_react.default.createElement(_RenderRegistryProvider.default, {
    renderers: renderers,
    elementModels: engine.getHTMLElementsModels()
  }, /*#__PURE__*/_react.default.createElement(_SharedPropsProvider.default, sharedProps, /*#__PURE__*/_react.default.createElement(_ListStyleSpecsProvider.default, null, /*#__PURE__*/_react.default.createElement(_RenderersPropsProvider.default, {
    renderersProps: renderersProps
  }, /*#__PURE__*/_react.default.createElement(_TChildrenRendererContext.default.Provider, {
    value: childrenRendererContext
  }, /*#__PURE__*/_react.default.createElement(_sourceLoaderContext.default.Provider, {
    value: sourceLoaderConfig
  }, children))))));
}
/**
 * @ignore
 */


RenderHTMLConfigProvider.propTypes = renderHTMLConfigPropTypes;
//# sourceMappingURL=RenderHTMLConfigProvider.js.map