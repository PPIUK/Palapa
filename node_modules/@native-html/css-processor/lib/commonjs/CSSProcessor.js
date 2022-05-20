"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSProcessor = void 0;

var _CSSInlineParseRun = require("./CSSInlineParseRun");

var _CSSNativeParseRun = require("./CSSNativeParseRun");

var _CSSPropertiesValidationRegistry = require("./CSSPropertiesValidationRegistry");

var _default = require("./default");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CSSProcessor {
  constructor(userConfig) {
    _defineProperty(this, "registry", void 0);

    const config = { ..._default.defaultCSSProcessorConfig,
      ...userConfig
    };
    this.registry = new _CSSPropertiesValidationRegistry.CSSPropertiesValidationRegistry(config);
  }
  /**
   *
   * Incoming style declaration:
   * - For native styles: any RN compatible style declaration + special units
   *   (font-size: medium) + relative units (smaller, larger, em, rem and perhaps vw)
   *
   * @param declaration
   */


  compileStyleDeclaration(declaration) {
    const parseRun = new _CSSNativeParseRun.CSSNativeParseRun(declaration, this.registry);
    return parseRun.exec();
  }

  compileInlineCSS(inlineCSS) {
    const parseRun = new _CSSInlineParseRun.CSSInlineParseRun(inlineCSS, this.registry);
    return parseRun.exec();
  }

}

exports.CSSProcessor = CSSProcessor;
//# sourceMappingURL=CSSProcessor.js.map