"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RenderHTML;

var _react = _interopRequireDefault(require("react"));

var _RenderHTMLDebug = _interopRequireDefault(require("./RenderHTMLDebug"));

var _TRenderEngineProvider = _interopRequireDefault(require("./TRenderEngineProvider"));

var _RenderHTMLConfigProvider = _interopRequireDefault(require("./RenderHTMLConfigProvider"));

var _RenderHTMLSource = _interopRequireDefault(require("./RenderHTMLSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render HTML text in native views!
 *
 * @remarks If your application uses many instances of this component, you
 * should share the render engine across those instances via the
 * {@link TRenderEngineProvider} and {@link RenderHTMLConfigProvider}
 * components, and render the HTML with {@link RenderHTMLSource} instead. That
 * should significantly increase performance.
 *
 * @warning It should never be a child of a React Native `Text` element, as the
 * layout will break.
 *
 * @public
 */
function RenderHTML(props) {
  const {
    source,
    onHTMLLoaded,
    onTTreeChange,
    onDocumentMetadataLoaded,
    contentWidth,
    ...otherProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_RenderHTMLDebug.default, props, /*#__PURE__*/_react.default.createElement(_TRenderEngineProvider.default, otherProps, /*#__PURE__*/_react.default.createElement(_RenderHTMLConfigProvider.default, otherProps, /*#__PURE__*/_react.default.createElement(_RenderHTMLSource.default, {
    source,
    onHTMLLoaded,
    onTTreeChange,
    onDocumentMetadataLoaded,
    contentWidth
  }))));
}
//# sourceMappingURL=RenderHTML.js.map