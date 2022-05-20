"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RenderTTree;

var _react = _interopRequireWildcard(require("react"));

var _ttreeEventsContext = _interopRequireDefault(require("./context/ttreeEventsContext"));

var _useTTree = _interopRequireDefault(require("./hooks/useTTree"));

var _TDocumentRenderer = _interopRequireDefault(require("./TDocumentRenderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function RenderTTree(props) {
  const ttree = (0, _useTTree.default)(props);
  const {
    onDocumentMetadataLoaded
  } = (0, _react.useContext)(_ttreeEventsContext.default);
  return /*#__PURE__*/_react.default.createElement(_TDocumentRenderer.default, {
    tdoc: ttree,
    baseUrl: props.baseUrl,
    onDocumentMetadataLoaded: onDocumentMetadataLoaded
  });
}
//# sourceMappingURL=RenderTTree.js.map