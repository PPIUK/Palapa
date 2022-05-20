"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CSSProcessor: true,
  CSSProcessedProps: true,
  mergeProps: true
};
Object.defineProperty(exports, "CSSProcessor", {
  enumerable: true,
  get: function () {
    return _CSSProcessor.CSSProcessor;
  }
});
Object.defineProperty(exports, "CSSProcessedProps", {
  enumerable: true,
  get: function () {
    return _CSSProcessedProps.CSSProcessedProps;
  }
});
Object.defineProperty(exports, "mergeProps", {
  enumerable: true,
  get: function () {
    return _mergeProps.default;
  }
});
exports.default = void 0;

var _CSSProcessor = require("./CSSProcessor");

var _CSSProcessedProps = require("./CSSProcessedProps");

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _config[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _config[key];
    }
  });
});

var _default2 = require("./default");

Object.keys(_default2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _default2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _default2[key];
    }
  });
});

var _processorTypes = require("./processor-types");

Object.keys(_processorTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _processorTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _processorTypes[key];
    }
  });
});

var _propertyTypes = require("./property-types");

Object.keys(_propertyTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _propertyTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _propertyTypes[key];
    }
  });
});

var _nativeTypes = require("./native-types");

Object.keys(_nativeTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _nativeTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _nativeTypes[key];
    }
  });
});

var _mergeProps = _interopRequireDefault(require("./mergeProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _CSSProcessor.CSSProcessor;
exports.default = _default;
//# sourceMappingURL=index.js.map