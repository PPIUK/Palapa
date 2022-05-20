"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _DocumentMetadataProvider = _interopRequireDefault(require("./context/DocumentMetadataProvider"));

var _TNodeRenderer = _interopRequireDefault(require("./TNodeRenderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TDocumentRenderer = /*#__PURE__*/(0, _react.memo)(({
  tdoc,
  baseUrl,
  onDocumentMetadataLoaded
}) => {
  const metadata = (0, _react.useMemo)(() => {
    const {
      baseHref,
      baseTarget,
      lang,
      links,
      meta,
      title,
      dir
    } = tdoc.context;
    return {
      baseTarget,
      baseUrl: baseUrl !== null && baseUrl !== void 0 ? baseUrl : baseHref,
      lang,
      dir,
      links,
      meta,
      title
    };
  }, [tdoc.context, baseUrl]);
  (0, _react.useEffect)(() => {
    onDocumentMetadataLoaded === null || onDocumentMetadataLoaded === void 0 ? void 0 : onDocumentMetadataLoaded.call(null, metadata);
  }, [onDocumentMetadataLoaded, metadata]);
  return /*#__PURE__*/_react.default.createElement(_DocumentMetadataProvider.default, {
    value: metadata
  }, /*#__PURE__*/_react.default.createElement(_TNodeRenderer.default, {
    renderIndex: 0,
    renderLength: 1,
    tnode: tdoc
  }));
});
var _default = TDocumentRenderer;
exports.default = _default;
//# sourceMappingURL=TDocumentRenderer.js.map