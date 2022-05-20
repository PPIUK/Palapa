"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isUriSource;

function isUriSource(source) {
  return 'uri' in source && typeof source.uri === 'string';
}
//# sourceMappingURL=isUriSource.js.map