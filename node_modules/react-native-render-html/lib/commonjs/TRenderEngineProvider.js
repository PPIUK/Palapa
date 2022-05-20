"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAmbientTRenderEngine = useAmbientTRenderEngine;
exports.default = TRenderEngineProvider;
exports.defaultTRenderEngineProviderProps = exports.defaultFallbackFonts = exports.tRenderEngineProviderPropTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useTRenderEngine = _interopRequireDefault(require("./hooks/useTRenderEngine"));

var _defaultSystemFonts = _interopRequireDefault(require("./defaultSystemFonts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultTRenderEngine = {};

const TRenderEngineContext = /*#__PURE__*/_react.default.createContext(defaultTRenderEngine);

const tRenderEngineProviderPropTypes = {
  customHTMLElementModels: _propTypes.default.object.isRequired,
  enableCSSInlineProcessing: _propTypes.default.bool,
  enableUserAgentStyles: _propTypes.default.bool,
  idsStyles: _propTypes.default.object,
  ignoredDomTags: _propTypes.default.array,
  ignoreDomNode: _propTypes.default.func,
  domVisitors: _propTypes.default.object,
  ignoredStyles: _propTypes.default.array.isRequired,
  allowedStyles: _propTypes.default.array,
  htmlParserOptions: _propTypes.default.object,
  tagsStyles: _propTypes.default.object,
  classesStyles: _propTypes.default.object,
  emSize: _propTypes.default.number.isRequired,
  baseStyle: _propTypes.default.object,
  systemFonts: _propTypes.default.arrayOf(_propTypes.default.string),
  fallbackFonts: _propTypes.default.shape({
    serif: _propTypes.default.string,
    'sans-serif': _propTypes.default.string,
    monospace: _propTypes.default.string
  }),
  setMarkersForTNode: _propTypes.default.func,
  dangerouslyDisableHoisting: _propTypes.default.bool,
  dangerouslyDisableWhitespaceCollapsing: _propTypes.default.bool,
  selectDomRoot: _propTypes.default.func
};
/**
 * Default fallback font for special keys such as 'sans-serif', 'monospace',
 * 'serif', based on current platform.
 */

exports.tRenderEngineProviderPropTypes = tRenderEngineProviderPropTypes;
const defaultFallbackFonts = {
  'sans-serif': _reactNative.Platform.select({
    ios: 'system',
    default: 'sans-serif'
  }),
  monospace: _reactNative.Platform.select({
    ios: 'Menlo',
    default: 'monospace'
  }),
  serif: _reactNative.Platform.select({
    ios: 'Times New Roman',
    default: 'serif'
  })
};
exports.defaultFallbackFonts = defaultFallbackFonts;
const defaultTRenderEngineProviderProps = {
  htmlParserOptions: {
    decodeEntities: true
  },
  emSize: 14,
  ignoredDomTags: [],
  ignoredStyles: [],
  baseStyle: {
    fontSize: 14
  },
  tagsStyles: {},
  classesStyles: {},
  enableUserAgentStyles: true,
  enableCSSInlineProcessing: true,
  customHTMLElementModels: {},
  fallbackFonts: defaultFallbackFonts,
  systemFonts: _defaultSystemFonts.default
};
/**
 * Use the ambient transient render engine.
 *
 * @returns The ambient transient render engine.
 *
 * @public
 */

exports.defaultTRenderEngineProviderProps = defaultTRenderEngineProviderProps;

function useAmbientTRenderEngine() {
  const engine = _react.default.useContext(TRenderEngineContext);

  if (typeof __DEV__ === 'boolean' && __DEV__ && engine === defaultTRenderEngine) {
    console.error('TRenderEngineProvider is missing in the render tree.');
  }

  return engine;
}
/**
 * A react component to share a {@link TRenderEngine} instance across different
 * rendered contents via {@link RenderHTMLSource}. This can significantly enhance
 * performance in applications with potentially dozens or hundreds of distinct
 * rendered snippets such as chat apps.
 *
 * @param props - Pass engine config here.
 */


function TRenderEngineProvider({
  children,
  ...config
}) {
  const engine = (0, _useTRenderEngine.default)(config);
  return /*#__PURE__*/_react.default.createElement(TRenderEngineContext.Provider, {
    value: engine
  }, children);
}
/**
 * @ignore
 */


TRenderEngineProvider.defaultProps = defaultTRenderEngineProviderProps;
/**
 * @ignore
 */

TRenderEngineProvider.propTypes = tRenderEngineProviderPropTypes;
//# sourceMappingURL=TRenderEngineProvider.js.map