"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  RenderHTML: true,
  defaultHTMLElementModels: true,
  isDomElement: true,
  isDomText: true,
  Document: true,
  Element: true,
  Node: true,
  Text: true,
  NodeWithChildren: true,
  HTMLContentModel: true,
  HTMLElementModel: true,
  TRenderEngine: true,
  TChildrenRenderer: true,
  TNodeChildrenRenderer: true,
  useTNodeChildrenProps: true,
  TNodeRenderer: true,
  TRenderEngineProvider: true,
  defaultFallbackFonts: true,
  useAmbientTRenderEngine: true,
  RenderHTMLConfigProvider: true,
  RenderHTMLSource: true,
  useInternalRenderer: true,
  useNormalizedUrl: true,
  getNativePropsForTNode: true,
  collapseTopMarginForChild: true,
  splitBoxModelStyle: true,
  buildTREFromConfig: true,
  useComputeMaxWidthForTag: true,
  useSharedProps: true,
  useRendererProps: true,
  useDocumentMetadata: true,
  useContentWidth: true,
  domNodeToHTMLString: true,
  defaultSystemFonts: true,
  defaultListStyleSpecs: true,
  useIMGElementState: true,
  useIMGElementStateWithCache: true,
  IMGElement: true,
  IMGElementContainer: true,
  IMGElementContentError: true,
  IMGElementContentLoading: true,
  IMGElementContentSuccess: true,
  IMGElementContentAlt: true,
  useIMGElementProps: true
};
Object.defineProperty(exports, "RenderHTML", {
  enumerable: true,
  get: function () {
    return _RenderHTML.default;
  }
});
Object.defineProperty(exports, "defaultHTMLElementModels", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.defaultHTMLElementModels;
  }
});
Object.defineProperty(exports, "isDomElement", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.isDomElement;
  }
});
Object.defineProperty(exports, "isDomText", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.isDomText;
  }
});
Object.defineProperty(exports, "Document", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.Document;
  }
});
Object.defineProperty(exports, "Element", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.Element;
  }
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.Node;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.Text;
  }
});
Object.defineProperty(exports, "NodeWithChildren", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.NodeWithChildren;
  }
});
Object.defineProperty(exports, "HTMLContentModel", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.HTMLContentModel;
  }
});
Object.defineProperty(exports, "HTMLElementModel", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.HTMLElementModel;
  }
});
Object.defineProperty(exports, "TRenderEngine", {
  enumerable: true,
  get: function () {
    return _transientRenderEngine.TRenderEngine;
  }
});
Object.defineProperty(exports, "TChildrenRenderer", {
  enumerable: true,
  get: function () {
    return _TChildrenRenderer.default;
  }
});
Object.defineProperty(exports, "TNodeChildrenRenderer", {
  enumerable: true,
  get: function () {
    return _TNodeChildrenRenderer.default;
  }
});
Object.defineProperty(exports, "useTNodeChildrenProps", {
  enumerable: true,
  get: function () {
    return _TNodeChildrenRenderer.useTNodeChildrenProps;
  }
});
Object.defineProperty(exports, "TNodeRenderer", {
  enumerable: true,
  get: function () {
    return _TNodeRenderer.default;
  }
});
Object.defineProperty(exports, "TRenderEngineProvider", {
  enumerable: true,
  get: function () {
    return _TRenderEngineProvider.default;
  }
});
Object.defineProperty(exports, "defaultFallbackFonts", {
  enumerable: true,
  get: function () {
    return _TRenderEngineProvider.defaultFallbackFonts;
  }
});
Object.defineProperty(exports, "useAmbientTRenderEngine", {
  enumerable: true,
  get: function () {
    return _TRenderEngineProvider.useAmbientTRenderEngine;
  }
});
Object.defineProperty(exports, "RenderHTMLConfigProvider", {
  enumerable: true,
  get: function () {
    return _RenderHTMLConfigProvider.default;
  }
});
Object.defineProperty(exports, "RenderHTMLSource", {
  enumerable: true,
  get: function () {
    return _RenderHTMLSource.default;
  }
});
Object.defineProperty(exports, "useInternalRenderer", {
  enumerable: true,
  get: function () {
    return _useInternalRenderer.default;
  }
});
Object.defineProperty(exports, "useNormalizedUrl", {
  enumerable: true,
  get: function () {
    return _useNormalizedUrl.default;
  }
});
Object.defineProperty(exports, "getNativePropsForTNode", {
  enumerable: true,
  get: function () {
    return _getNativePropsForTNode.default;
  }
});
Object.defineProperty(exports, "collapseTopMarginForChild", {
  enumerable: true,
  get: function () {
    return _collapseTopMarginForChild.default;
  }
});
Object.defineProperty(exports, "splitBoxModelStyle", {
  enumerable: true,
  get: function () {
    return _splitBoxModelStyle.default;
  }
});
Object.defineProperty(exports, "buildTREFromConfig", {
  enumerable: true,
  get: function () {
    return _buildTREFromConfig.default;
  }
});
Object.defineProperty(exports, "useComputeMaxWidthForTag", {
  enumerable: true,
  get: function () {
    return _SharedPropsProvider.useComputeMaxWidthForTag;
  }
});
Object.defineProperty(exports, "useSharedProps", {
  enumerable: true,
  get: function () {
    return _SharedPropsProvider.useSharedProps;
  }
});
Object.defineProperty(exports, "useRendererProps", {
  enumerable: true,
  get: function () {
    return _RenderersPropsProvider.useRendererProps;
  }
});
Object.defineProperty(exports, "useDocumentMetadata", {
  enumerable: true,
  get: function () {
    return _DocumentMetadataProvider.useDocumentMetadata;
  }
});
Object.defineProperty(exports, "useContentWidth", {
  enumerable: true,
  get: function () {
    return _useContentWidth.default;
  }
});
Object.defineProperty(exports, "domNodeToHTMLString", {
  enumerable: true,
  get: function () {
    return _domNodeToHTMLString.default;
  }
});
Object.defineProperty(exports, "defaultSystemFonts", {
  enumerable: true,
  get: function () {
    return _defaultSystemFonts.default;
  }
});
Object.defineProperty(exports, "defaultListStyleSpecs", {
  enumerable: true,
  get: function () {
    return _defaultListStyleSpecs.default;
  }
});
Object.defineProperty(exports, "useIMGElementState", {
  enumerable: true,
  get: function () {
    return _useIMGElementState.default;
  }
});
Object.defineProperty(exports, "useIMGElementStateWithCache", {
  enumerable: true,
  get: function () {
    return _useIMGElementStateWithCache.default;
  }
});
Object.defineProperty(exports, "IMGElement", {
  enumerable: true,
  get: function () {
    return _IMGElement.default;
  }
});
Object.defineProperty(exports, "IMGElementContainer", {
  enumerable: true,
  get: function () {
    return _IMGElementContainer.default;
  }
});
Object.defineProperty(exports, "IMGElementContentError", {
  enumerable: true,
  get: function () {
    return _IMGElementContentError.default;
  }
});
Object.defineProperty(exports, "IMGElementContentLoading", {
  enumerable: true,
  get: function () {
    return _IMGElementContentLoading.default;
  }
});
Object.defineProperty(exports, "IMGElementContentSuccess", {
  enumerable: true,
  get: function () {
    return _IMGElementContentSuccess.default;
  }
});
Object.defineProperty(exports, "IMGElementContentAlt", {
  enumerable: true,
  get: function () {
    return _IMGElementContentAlt.default;
  }
});
Object.defineProperty(exports, "useIMGElementProps", {
  enumerable: true,
  get: function () {
    return _IMGRenderer.useIMGElementProps;
  }
});
exports.default = void 0;

var _RenderHTML = _interopRequireDefault(require("./RenderHTML"));

var _transientRenderEngine = require("@native-html/transient-render-engine");

var _sharedTypes = require("./shared-types");

Object.keys(_sharedTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sharedTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sharedTypes[key];
    }
  });
});

var _renderTypes = require("./render/render-types");

Object.keys(_renderTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _renderTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _renderTypes[key];
    }
  });
});

var _TChildrenRenderer = _interopRequireDefault(require("./TChildrenRenderer"));

var _TNodeChildrenRenderer = _interopRequireWildcard(require("./TNodeChildrenRenderer"));

var _TNodeRenderer = _interopRequireDefault(require("./TNodeRenderer"));

var _TRenderEngineProvider = _interopRequireWildcard(require("./TRenderEngineProvider"));

var _RenderHTMLConfigProvider = _interopRequireDefault(require("./RenderHTMLConfigProvider"));

var _RenderHTMLSource = _interopRequireDefault(require("./RenderHTMLSource"));

var _useInternalRenderer = _interopRequireDefault(require("./hooks/useInternalRenderer"));

var _useNormalizedUrl = _interopRequireDefault(require("./hooks/useNormalizedUrl"));

var _getNativePropsForTNode = _interopRequireDefault(require("./helpers/getNativePropsForTNode"));

var _collapseTopMarginForChild = _interopRequireDefault(require("./helpers/collapseTopMarginForChild"));

var _splitBoxModelStyle = _interopRequireDefault(require("./helpers/splitBoxModelStyle"));

var _buildTREFromConfig = _interopRequireDefault(require("./helpers/buildTREFromConfig"));

var _SharedPropsProvider = require("./context/SharedPropsProvider");

var _RenderersPropsProvider = require("./context/RenderersPropsProvider");

var _DocumentMetadataProvider = require("./context/DocumentMetadataProvider");

var _useContentWidth = _interopRequireDefault(require("./hooks/useContentWidth"));

var _domNodeToHTMLString = _interopRequireDefault(require("./helpers/domNodeToHTMLString"));

var _defaultSystemFonts = _interopRequireDefault(require("./defaultSystemFonts"));

var _defaultListStyleSpecs = _interopRequireDefault(require("./elements/defaultListStyleSpecs"));

var _useIMGElementState = _interopRequireDefault(require("./elements/useIMGElementState"));

var _useIMGElementStateWithCache = _interopRequireDefault(require("./elements/useIMGElementStateWithCache"));

var _IMGElement = _interopRequireDefault(require("./elements/IMGElement"));

var _IMGElementContainer = _interopRequireDefault(require("./elements/IMGElementContainer"));

var _IMGElementContentError = _interopRequireDefault(require("./elements/IMGElementContentError"));

var _IMGElementContentLoading = _interopRequireDefault(require("./elements/IMGElementContentLoading"));

var _IMGElementContentSuccess = _interopRequireDefault(require("./elements/IMGElementContentSuccess"));

var _IMGElementContentAlt = _interopRequireDefault(require("./elements/IMGElementContentAlt"));

var _imgTypes = require("./elements/img-types");

Object.keys(_imgTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _imgTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _imgTypes[key];
    }
  });
});

var _IMGRenderer = require("./renderers/IMGRenderer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _RenderHTML.default;
exports.default = _default;
//# sourceMappingURL=index.js.map