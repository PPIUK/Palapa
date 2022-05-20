"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeBorderWidth;

var _helpers = require("../helpers");

function normalizeBorderWidth(config, value) {
  if ((0, _helpers.lookupRecord)(config.absoluteBorderWidthsPixelMap, value)) {
    return `${config.absoluteBorderWidthsPixelMap[value]}px`;
  }

  return value;
}
//# sourceMappingURL=normalizeBorderWidth.js.map