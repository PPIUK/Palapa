"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRenderEngine = void 0;

var _collapse = require("./flow/collapse");

var _hoist = require("./flow/hoist");

var _translate = require("./flow/translate");

var _omit = _interopRequireDefault(require("ramda/src/omit"));

var _cssProcessor = require("@native-html/css-processor");

var _parseDocument = _interopRequireDefault(require("./dom/parseDocument"));

var _TStylesMerger = require("./styles/TStylesMerger");

var _defaults = require("./styles/defaults");

var _TStyles = require("./styles/TStyles");

var _HTMLModelRegistry = _interopRequireDefault(require("./model/HTMLModelRegistry"));

var _domUtils = require("./dom/dom-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createStylesConfig(options) {
  var _options$stylesConfig, _options$stylesConfig2;

  const enableUserAgentStyles = typeof (options === null || options === void 0 ? void 0 : (_options$stylesConfig = options.stylesConfig) === null || _options$stylesConfig === void 0 ? void 0 : _options$stylesConfig.enableUserAgentStyles) === 'boolean' ? options.stylesConfig.enableUserAgentStyles : _defaults.defaultStylesConfig.enableUserAgentStyles;
  const baseStyle = { ...(enableUserAgentStyles ? _defaults.defaultStylesConfig.baseStyle : (0, _omit.default)(['fontSize'], _defaults.defaultStylesConfig.baseStyle)),
    ...(options === null || options === void 0 ? void 0 : (_options$stylesConfig2 = options.stylesConfig) === null || _options$stylesConfig2 === void 0 ? void 0 : _options$stylesConfig2.baseStyle)
  };
  return { ..._defaults.defaultStylesConfig,
    ...(options === null || options === void 0 ? void 0 : options.stylesConfig),
    baseStyle
  };
}
/**
 * The Transient Render Engine.
 *
 * @public
 */


class TRenderEngine {
  constructor(options) {
    var _options$dangerouslyD, _options$dangerouslyD2, _options$cssProcessor, _stylesConfig$baseSty;

    _defineProperty(this, "htmlParserOptions", void 0);

    _defineProperty(this, "dataFlowParams", void 0);

    _defineProperty(this, "hoistingEnabled", void 0);

    _defineProperty(this, "whitespaceCollapsingEnabled", void 0);

    _defineProperty(this, "selectDomRoot", void 0);

    const stylesConfig = createStylesConfig(options);
    this.hoistingEnabled = !((_options$dangerouslyD = options === null || options === void 0 ? void 0 : options.dangerouslyDisableHoisting) !== null && _options$dangerouslyD !== void 0 ? _options$dangerouslyD : false);
    this.whitespaceCollapsingEnabled = !((_options$dangerouslyD2 = options === null || options === void 0 ? void 0 : options.dangerouslyDisableWhitespaceCollapsing) !== null && _options$dangerouslyD2 !== void 0 ? _options$dangerouslyD2 : false);
    const modelRegistry = new _HTMLModelRegistry.default(options === null || options === void 0 ? void 0 : options.customizeHTMLModels);
    const userSelectedFontSize = (options === null || options === void 0 ? void 0 : (_options$cssProcessor = options.cssProcessorConfig) === null || _options$cssProcessor === void 0 ? void 0 : _options$cssProcessor.rootFontSize) || ((_stylesConfig$baseSty = stylesConfig.baseStyle) === null || _stylesConfig$baseSty === void 0 ? void 0 : _stylesConfig$baseSty.fontSize); // TODO log a warning when type is string

    const stylesMerger = new _TStylesMerger.TStylesMerger(stylesConfig, modelRegistry, { ..._cssProcessor.defaultCSSProcessorConfig,
      ...(options === null || options === void 0 ? void 0 : options.cssProcessorConfig),
      rootFontSize: typeof userSelectedFontSize === 'number' ? userSelectedFontSize : 14
    });
    this.htmlParserOptions = {
      decodeEntities: true,
      lowerCaseTags: true,
      ignoredTags: options === null || options === void 0 ? void 0 : options.ignoredDomTags,
      ignoreNode: options === null || options === void 0 ? void 0 : options.ignoreDomNode,
      visitors: options === null || options === void 0 ? void 0 : options.domVisitors,
      ...(options === null || options === void 0 ? void 0 : options.htmlParserOptions)
    };
    this.dataFlowParams = {
      stylesMerger,
      modelRegistry,
      setMarkersForTNode: options === null || options === void 0 ? void 0 : options.setMarkersForTNode,
      baseStyles: new _TStyles.TStyles(stylesMerger.compileStyleDeclaration(stylesConfig.baseStyle)),
      removeLineBreaksAroundEastAsianDiscardSet: (options === null || options === void 0 ? void 0 : options.removeLineBreaksAroundEastAsianDiscardSet) || false
    };
    this.selectDomRoot = options === null || options === void 0 ? void 0 : options.selectDomRoot;
  }

  normalizeDocument(document) {
    let body;
    let head;

    for (const child of document.children) {
      if (body && head) {
        break;
      }

      if ((0, _domUtils.isDomElement)(child) && child.tagName === 'body') {
        body = child;
      }

      if ((0, _domUtils.isDomElement)(child) && child.tagName === 'head') {
        head = child;
      }
    } //@ts-ignore


    if (!body && !head) {
      body = new _domUtils.Element('body', {});
      body.childNodes = document.children;
      document.children.forEach(c => {
        c.parent = body;
        c.parentNode = body;
      });
      body.parent = document;
      body.parentNode = document;
      document.childNodes = [body];
    }

    return document;
  }

  parseDocument(html) {
    let document = (0, _parseDocument.default)(html, this.htmlParserOptions);

    if (this.selectDomRoot) {
      const selected = this.selectDomRoot(document);

      if (selected && selected !== document) {
        document.childNodes = [selected];
        selected.parent = document;
      }
    }

    for (const child of document.children) {
      if ((0, _domUtils.isDomElement)(child) && child.tagName === 'html') {
        document = child;
        break;
      }
    }

    return this.normalizeDocument(document);
  }

  buildTTreeFromDoc(document) {
    const tdoc = (0, _translate.translateDocument)(document, this.dataFlowParams);
    const hoistedTDoc = this.hoistingEnabled ? (0, _hoist.hoist)(tdoc) : tdoc;
    const collapsedTDoc = this.whitespaceCollapsingEnabled ? (0, _collapse.collapse)(hoistedTDoc) : tdoc;
    return collapsedTDoc;
  }

  buildTTree(html) {
    return this.buildTTreeFromDoc(this.parseDocument(html));
  }

  getHTMLElementsModels() {
    return this.dataFlowParams.modelRegistry.modelRecords;
  }

}

exports.TRenderEngine = TRenderEngine;
//# sourceMappingURL=TRenderEngine.js.map