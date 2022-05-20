"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildTREFromConfig;

var _transientRenderEngine = _interopRequireDefault(require("@native-html/transient-render-engine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build a {@link TRenderEngine} instance from a configuration object.
 *
 * @remarks This utility can be useful to test and debug the TRE layer of your
 * application.
 *
 * @param props - The configuration from which a TRE should be built.
 */
function buildTREFromConfig(props) {
  const {
    allowedStyles,
    // TODO fix upstream
    ignoredStyles = [],
    ignoredDomTags,
    ignoreDomNode,
    domVisitors,
    htmlParserOptions,
    baseStyle,
    classesStyles,
    tagsStyles,
    idsStyles,
    enableCSSInlineProcessing,
    enableUserAgentStyles,
    systemFonts = [],
    fallbackFonts = {},
    customHTMLElementModels = {},
    emSize,
    setMarkersForTNode,
    selectDomRoot,
    dangerouslyDisableHoisting,
    dangerouslyDisableWhitespaceCollapsing
  } = props;
  const customizeHTMLModels = Object.keys(customHTMLElementModels).length ? defaultModels => {
    return { ...defaultModels,
      ...customHTMLElementModels
    };
  } : undefined;
  const fontMap = {};
  systemFonts.forEach(font => {
    fontMap[font] = true;
  });

  const isFontSupported = fontFamily => {
    if (fallbackFonts[fontFamily]) {
      return fallbackFonts[fontFamily];
    }
    /* istanbul ignore next */


    return fontMap[fontFamily] || false;
  };

  return new _transientRenderEngine.default({
    customizeHTMLModels,
    cssProcessorConfig: {
      isFontSupported,
      inlinePropertiesBlacklist: ignoredStyles,
      inlinePropertiesWhitelist: allowedStyles,
      rootFontSize: emSize
    },
    htmlParserOptions: {
      decodeEntities: true,
      ...htmlParserOptions
    },
    stylesConfig: {
      baseStyle,
      enableCSSInlineProcessing,
      enableUserAgentStyles,
      classesStyles,
      idsStyles,
      tagsStyles
    },
    ignoredDomTags,
    ignoreDomNode,
    domVisitors,
    setMarkersForTNode,
    selectDomRoot,
    dangerouslyDisableHoisting,
    dangerouslyDisableWhitespaceCollapsing
  });
}
//# sourceMappingURL=buildTREFromConfig.js.map