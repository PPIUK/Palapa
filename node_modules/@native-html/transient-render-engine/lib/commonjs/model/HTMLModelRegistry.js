"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultHTMLElementModels = _interopRequireDefault(require("./defaultHTMLElementModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HTMLModelRegistry {
  constructor(customize) {
    _defineProperty(this, "modelRecords", _defaultHTMLElementModels.default);

    if (typeof customize === 'function') {
      this.modelRecords = customize(_defaultHTMLElementModels.default);
    }
  }

  getElementModelFromTagName(tagName) {
    if (tagName in this.modelRecords) {
      return this.modelRecords[tagName];
    }

    return null;
  }

}

exports.default = HTMLModelRegistry;
//# sourceMappingURL=HTMLModelRegistry.js.map