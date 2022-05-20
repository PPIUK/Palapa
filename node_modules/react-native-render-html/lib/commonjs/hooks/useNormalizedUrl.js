"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNormalizedUrl;

var _DocumentMetadataProvider = require("../context/DocumentMetadataProvider");

var _normalizeResourceLocator = _interopRequireDefault(require("../helpers/normalizeResourceLocator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This hook transforms relative and protocol-relative URLs to absolute URLs as
 * per {@link https://tools.ietf.org/html/rfc1808 | RFC1808}. The base URL is
 * determined by the `<base />` element, `source.uri` or `source.baseUrl`.
 *
 * @remarks
 * - If there is no `baseUrl` and the initial URL is relative, this hook will
 *   return the initial URL.
 * - If the initial URL is absolute, this hook will return this initial URL.
 *
 * @param initialUrl - The URL before normalization.
 *
 * @public
 */
function useNormalizedUrl(initialUrl) {
  const {
    baseUrl
  } = (0, _DocumentMetadataProvider.useDocumentMetadata)();
  return (0, _normalizeResourceLocator.default)(initialUrl, baseUrl);
}
//# sourceMappingURL=useNormalizedUrl.js.map