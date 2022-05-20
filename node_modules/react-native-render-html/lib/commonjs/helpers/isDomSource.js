"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDomSource;

function isDomSource(source) {
  return 'dom' in source && typeof source.dom === 'object' && !!source.dom;
}
//# sourceMappingURL=isDomSource.js.map