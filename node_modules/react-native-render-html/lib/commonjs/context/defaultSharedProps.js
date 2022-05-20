"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../constants");

function WebViewPlaceholder() {
  /* istanbul ignore else */
  if (typeof __DEV__ === 'boolean' && __DEV__) {
    console.warn('One of your renderers is attempting to use WebView component, which has not been ' + "provided as a prop to the RenderHtml component. As a consequence, the element won't be rendered.");
  }

  return null;
}

const defaultSharedProps = {
  bypassAnonymousTPhrasingNodes: true,
  debug: false,
  defaultTextProps: {
    selectable: false,
    allowFontScaling: true
  },
  defaultViewProps: {},
  enableExperimentalBRCollapsing: false,
  enableExperimentalGhostLinesPrevention: false,
  enableExperimentalMarginCollapsing: false,
  computeEmbeddedMaxWidth: contentWidth => contentWidth,
  WebView: WebViewPlaceholder,
  defaultWebViewProps: {},
  pressableHightlightColor: _constants.DEFAULT_PRESSABLE_RIPPLE_COLOR,
  provideEmbeddedHeaders: undefined,
  GenericPressable: undefined,
  customListStyleSpecs: undefined
};
var _default = defaultSharedProps;
exports.default = _default;
//# sourceMappingURL=defaultSharedProps.js.map