"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSParseRun = void 0;

var _CSSProcessedProps = require("./CSSProcessedProps");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CSSParseRun {
  constructor(validationMap) {
    _defineProperty(this, "validationMap", void 0);

    _defineProperty(this, "processedProps", void 0);

    this.validationMap = validationMap;
    this.processedProps = new _CSSProcessedProps.CSSProcessedProps();
  }

  exec() {
    this.fillProcessedProps();
    return this.processedProps;
  }

}

exports.CSSParseRun = CSSParseRun;
//# sourceMappingURL=CSSParseRun.js.map