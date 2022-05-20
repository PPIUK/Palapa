"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lookupRecord = _interopRequireDefault(require("../helpers/lookupRecord"));

var _BRRenderer = _interopRequireDefault(require("../renderers/BRRenderer"));

var _WBRRenderer = _interopRequireDefault(require("../renderers/WBRRenderer"));

var _internalRenderers = _interopRequireDefault(require("./internalRenderers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const internalTextRenderers = {
  br: _BRRenderer.default,
  wbr: _WBRRenderer.default
};

class RenderRegistry {
  constructor(customRenderers = {}, elementModels) {
    _defineProperty(this, "customRenderers", {});

    _defineProperty(this, "elementModels", void 0);

    this.customRenderers = customRenderers;
    this.elementModels = elementModels;
  }

  getCustomRendererForTNode(tnode) {
    if (tnode.tagName in this.customRenderers) {
      const renderer = this.customRenderers[tnode.tagName];
      /* istanbul ignore next */

      if (typeof __DEV__ === 'boolean' && __DEV__) {
        // In DEV, check for discrepancies.
        const elementModel = this.elementModels[tnode.tagName];

        if (!elementModel) {
          console.warn(`You are attempting to render a ${tnode.tagName} tag but you didn't provide an HTMLElementModel. Make sure you register a model for this tag in "customHTMLElementModels" prop. `);
        } else if (!tnode.matchContentModel(elementModel.contentModel)) {
          console.warn(`You are attempting to render "${tnode.tagName}" of type "${tnode.displayName}", but the registered renderer is of content model type ${elementModel === null || elementModel === void 0 ? void 0 : elementModel.contentModel} which is incompatible with "${tnode.displayName}".`);
        }
      }

      return renderer;
    }

    return null;
  }

  getDefaultRendererForTNode(tnode) {
    if (tnode.tagName in _internalRenderers.default) {
      //@ts-expect-error we know that the tagName is in the map
      return _internalRenderers.default[tnode.tagName];
    }

    return null;
  }

  getInternalTextRenderer(tagName) {
    if ((0, _lookupRecord.default)(internalTextRenderers, tagName)) {
      return internalTextRenderers[tagName];
    }

    return null;
  }

  getRendererConfigForTNode(tnode) {
    return {
      Custom: this.getCustomRendererForTNode(tnode),
      Default: this.getDefaultRendererForTNode(tnode)
    };
  }

}

exports.default = RenderRegistry;
//# sourceMappingURL=RenderRegistry.js.map