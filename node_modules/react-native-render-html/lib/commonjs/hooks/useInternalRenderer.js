"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useInternalRenderer;

var _IMGElement = _interopRequireDefault(require("../elements/IMGElement"));

var _OLElement = _interopRequireDefault(require("../elements/OLElement"));

var _ULElement = _interopRequireDefault(require("../elements/ULElement"));

var _ARenderer = require("../renderers/ARenderer");

var _IMGRenderer = require("../renderers/IMGRenderer");

var _OLRenderer = require("../renderers/OLRenderer");

var _ULRenderer = require("../renderers/ULRenderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const specialRenderersConfig = {
  img: {
    hook: _IMGRenderer.useIMGElementProps,
    Element: _IMGElement.default
  },
  ol: {
    hook: _OLRenderer.useOLElementProps,
    Element: _OLElement.default
  },
  ul: {
    hook: _ULRenderer.useULElementProps,
    Element: _ULElement.default
  },
  a: {
    hook: _ARenderer.useAElementProps,
    Element: undefined
  }
};

function hasSpecialInternalRenderer(tagName) {
  return tagName in specialRenderersConfig;
}

/**
 * Resuse internal renderers logic for infinite customization!
 *
 * @remarks `tagName` must be invariant, i.e. it cannot change. You would
 * otherwise break the rules of hooks.
 *
 * @param tagName - **Invariant** The tag name to extend.
 * @param props - The props passed to the custom renderer.
 * @typeParam T - The name of the tag to target.
 * @returns An object with two fields: `Renderer` (the internal react
 * component) and `rendererProps`, the internal component props.
 *
 * @public
 */
function useInternalRenderer(tagName, props) {
  const {
    TDefaultRenderer,
    ...rendererProps
  } = props;

  if (hasSpecialInternalRenderer(tagName)) {
    return {
      Renderer: specialRenderersConfig[tagName].Element || TDefaultRenderer,
      rendererProps: specialRenderersConfig[tagName].hook(props)
    };
  }

  return {
    Renderer: TDefaultRenderer,
    rendererProps
  };
}
//# sourceMappingURL=useInternalRenderer.js.map