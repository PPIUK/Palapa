"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TStylesMerger = exports.emptyProcessedPropsReg = void 0;

var _cssProcessor = _interopRequireWildcard(require("@native-html/css-processor"));

var _TStyles = require("./TStyles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const emptyProcessedPropsReg = new _cssProcessor.CSSProcessedProps();
exports.emptyProcessedPropsReg = emptyProcessedPropsReg;

function mapMixedStyleRecordToCSSProcessedPropsReg(processor, styles) {
  let regStyles = {};

  for (const key in styles) {
    regStyles[key] = processor.compileStyleDeclaration(styles[key]);
  }

  return regStyles;
} // Specificity hierarchy, in descending order:
// 1. Inline styles
// 2. ID (idsStyles)
// 3. Classes (classesStyles)
// 4. Element name (tagsStyles)
// 5. Attribute styles (styles derived from attributes)
// 6. Default element styles
// 7. Inherited styles (baseFontStyles)


class TStylesMerger {
  constructor(config, modelRegistry, cssProcessorConfig) {
    _defineProperty(this, "processor", void 0);

    _defineProperty(this, "tagsStyles", void 0);

    _defineProperty(this, "classesStyles", void 0);

    _defineProperty(this, "idsStyles", void 0);

    _defineProperty(this, "enableCSSInlineProcessing", void 0);

    _defineProperty(this, "enableUserAgentStyles", void 0);

    _defineProperty(this, "modelRegistry", void 0);

    this.processor = new _cssProcessor.default(cssProcessorConfig);
    this.modelRegistry = modelRegistry;
    this.classesStyles = mapMixedStyleRecordToCSSProcessedPropsReg(this.processor, config.classesStyles);
    this.tagsStyles = mapMixedStyleRecordToCSSProcessedPropsReg(this.processor, config.tagsStyles);
    this.idsStyles = mapMixedStyleRecordToCSSProcessedPropsReg(this.processor, config.idsStyles);
    this.enableCSSInlineProcessing = config.enableCSSInlineProcessing;
    this.enableUserAgentStyles = config.enableUserAgentStyles;
  }

  compileInlineCSS(inlineCSS) {
    return this.processor.compileInlineCSS(inlineCSS);
  }

  compileStyleDeclaration(styleDeclaration) {
    return this.processor.compileStyleDeclaration(styleDeclaration);
  }

  buildStyles(inlineStyle, parentStyles, descriptor) {
    var _this$tagsStyles, _this$idsStyles, _ref, _ref2, _model$getMixedUAStyl, _model$getUADerivedSt, _model$mixedUAStyles;

    const ownInlinePropsReg = this.enableCSSInlineProcessing && inlineStyle ? this.compileInlineCSS(inlineStyle) : null;
    const model = descriptor.tagName ? this.modelRegistry.getElementModelFromTagName(descriptor.tagName) : null;
    const userTagOwnProps = (_this$tagsStyles = this.tagsStyles[descriptor.tagName]) !== null && _this$tagsStyles !== void 0 ? _this$tagsStyles : null;
    const userIdOwnProps = (_this$idsStyles = this.idsStyles[descriptor.id]) !== null && _this$idsStyles !== void 0 ? _this$idsStyles : null;
    const classes = descriptor.classes;
    const userClassesOwnPropsList = classes.map(c => this.classesStyles[c] || null);
    const dynamicPropsFromAttributes = this.enableUserAgentStyles ? (_ref = (_ref2 = (model === null || model === void 0 ? void 0 : (_model$getMixedUAStyl = model.getMixedUAStyles) === null || _model$getMixedUAStyl === void 0 ? void 0 : _model$getMixedUAStyl.call(model, descriptor, descriptor.domNode)) || null) !== null && _ref2 !== void 0 ? _ref2 : model === null || model === void 0 ? void 0 : (_model$getUADerivedSt = model.getUADerivedStyleFromAttributes) === null || _model$getUADerivedSt === void 0 ? void 0 : _model$getUADerivedSt.call(model, descriptor.attributes, descriptor.markers)) !== null && _ref !== void 0 ? _ref : null : null;
    const userAgentTagProps = this.enableUserAgentStyles ? (_model$mixedUAStyles = model === null || model === void 0 ? void 0 : model.mixedUAStyles) !== null && _model$mixedUAStyles !== void 0 ? _model$mixedUAStyles : null : null; // Latest properties will override former properties.

    const mergedOwnProps = emptyProcessedPropsReg.merge(userAgentTagProps && this.processor.compileStyleDeclaration(userAgentTagProps), dynamicPropsFromAttributes && this.processor.compileStyleDeclaration(dynamicPropsFromAttributes), userTagOwnProps, ...userClassesOwnPropsList, userIdOwnProps, ownInlinePropsReg);
    return new _TStyles.TStyles(mergedOwnProps, parentStyles);
  }

}

exports.TStylesMerger = TStylesMerger;
//# sourceMappingURL=TStylesMerger.js.map