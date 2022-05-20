"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortMergeRequest = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ShortMergeRequest {
  constructor(properties) {
    _defineProperty(this, "properties", void 0);

    this.properties = properties;
  }

  forEach(callback) {
    this.entries().forEach(callback);
  }

  map(callback) {
    return this.entries().map(callback);
  }

  entries() {
    if (this.properties == null) {
      return [];
    }

    return Object.entries(this.properties);
  }

}

exports.ShortMergeRequest = ShortMergeRequest;
//# sourceMappingURL=ShortMergeRequest.js.map