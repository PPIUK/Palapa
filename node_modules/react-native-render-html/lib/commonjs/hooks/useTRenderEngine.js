"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTRenderEngine;

var _react = require("react");

var _buildTREFromConfig = _interopRequireDefault(require("../helpers/buildTREFromConfig"));

var _useProfiler = _interopRequireDefault(require("./useProfiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @internal
 */
function useTRenderEngine({
  allowedStyles,
  baseStyle,
  classesStyles,
  customHTMLElementModels,
  dangerouslyDisableHoisting,
  dangerouslyDisableWhitespaceCollapsing,
  domVisitors,
  emSize,
  enableCSSInlineProcessing,
  enableUserAgentStyles,
  fallbackFonts,
  htmlParserOptions,
  idsStyles,
  ignoreDomNode,
  ignoredDomTags,
  ignoredStyles,
  selectDomRoot,
  setMarkersForTNode,
  systemFonts,
  tagsStyles
}) {
  const profile = (0, _useProfiler.default)({
    name: 'TRenderEngineProvider'
  });
  return (0, _react.useMemo)(() => {
    typeof __DEV__ === 'boolean' && __DEV__ && profile();
    return (0, _buildTREFromConfig.default)({
      allowedStyles,
      baseStyle,
      classesStyles,
      customHTMLElementModels,
      dangerouslyDisableHoisting,
      dangerouslyDisableWhitespaceCollapsing,
      domVisitors,
      emSize,
      enableCSSInlineProcessing,
      enableUserAgentStyles,
      fallbackFonts,
      htmlParserOptions,
      idsStyles,
      ignoreDomNode,
      ignoredDomTags,
      ignoredStyles,
      selectDomRoot,
      setMarkersForTNode,
      systemFonts,
      tagsStyles
    });
  }, [profile, allowedStyles, baseStyle, classesStyles, customHTMLElementModels, dangerouslyDisableHoisting, dangerouslyDisableWhitespaceCollapsing, domVisitors, emSize, enableCSSInlineProcessing, enableUserAgentStyles, fallbackFonts, htmlParserOptions, idsStyles, ignoreDomNode, ignoredDomTags, ignoredStyles, selectDomRoot, setMarkersForTNode, systemFonts, tagsStyles]);
}
//# sourceMappingURL=useTRenderEngine.js.map