"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MarkedList: true,
  MarkerBox: true,
  MarkedListItem: true,
  useMarkedList: true
};
Object.defineProperty(exports, "MarkedList", {
  enumerable: true,
  get: function () {
    return _MarkedList.default;
  }
});
Object.defineProperty(exports, "MarkerBox", {
  enumerable: true,
  get: function () {
    return _MarkerBox.default;
  }
});
Object.defineProperty(exports, "MarkedListItem", {
  enumerable: true,
  get: function () {
    return _MarkedListItem.default;
  }
});
Object.defineProperty(exports, "useMarkedList", {
  enumerable: true,
  get: function () {
    return _useMarkedList.default;
  }
});
exports.default = void 0;

var _MarkedList = _interopRequireWildcard(require("./MarkedList"));

Object.keys(_MarkedList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MarkedList[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MarkedList[key];
    }
  });
});

var _sharedTypes = require("./shared-types");

Object.keys(_sharedTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _sharedTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sharedTypes[key];
    }
  });
});

var _MarkerBox = _interopRequireWildcard(require("./MarkerBox"));

Object.keys(_MarkerBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MarkerBox[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MarkerBox[key];
    }
  });
});

var _MarkedListItem = _interopRequireWildcard(require("./MarkedListItem"));

Object.keys(_MarkedListItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _MarkedListItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _MarkedListItem[key];
    }
  });
});

var _useMarkedList = _interopRequireDefault(require("./useMarkedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = _MarkedList.default;
exports.default = _default;
//# sourceMappingURL=index.js.map