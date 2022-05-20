"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeFontName;

function normalizeFontName(fontName) {
  return fontName.replace(/["']/g, '').trim();
}
//# sourceMappingURL=normalizeFontName.js.map