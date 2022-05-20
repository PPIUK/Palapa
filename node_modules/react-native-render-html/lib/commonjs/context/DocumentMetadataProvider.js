"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDocumentMetadata = useDocumentMetadata;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DocumentMetadataContext = /*#__PURE__*/_react.default.createContext({
  baseUrl: '',
  baseTarget: '_self',
  lang: 'en',
  links: [],
  meta: [],
  title: '',
  dir: 'ltr'
});

const DocumentMetadataProvider = DocumentMetadataContext.Provider;
/**
 * Get access to the parsed HTML metadata anywhere in the render tree.
 */

function useDocumentMetadata() {
  return (0, _react.useContext)(DocumentMetadataContext);
}

var _default = DocumentMetadataProvider;
exports.default = _default;
//# sourceMappingURL=DocumentMetadataProvider.js.map