"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeResourceLocator;

var _urijs = _interopRequireDefault(require("urijs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function normalize relative and protocol-relative URLs to absolute
 * URLs as per {@link https://tools.ietf.org/html/rfc1808 | RFC1808}.
 *
 * @param url - The URL to normalize.
 * @param baseUrl - The base URL to resolve relative and protocol-relative URLs.
 */
function normalizeResourceLocator(url, baseUrl) {
  try {
    return baseUrl ? (0, _urijs.default)(url).absoluteTo((0, _urijs.default)(baseUrl)).href() : (0, _urijs.default)(url).href();
  } catch (e) {
    return url;
  }
}
//# sourceMappingURL=normalizeResourceLocator.js.map