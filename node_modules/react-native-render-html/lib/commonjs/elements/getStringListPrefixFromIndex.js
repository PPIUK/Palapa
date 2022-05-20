"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStringPrefixFromIndex = getStringPrefixFromIndex;

function getStringPrefixFromIndex(index, baseCharcode, modulo) {
  if (index < modulo) {
    return String.fromCharCode(baseCharcode + index);
  }

  const rest = index % modulo;
  const next = (index - rest - modulo) / modulo;
  return getStringPrefixFromIndex(next, baseCharcode, modulo) + String.fromCharCode(baseCharcode + rest);
}
//# sourceMappingURL=getStringListPrefixFromIndex.js.map