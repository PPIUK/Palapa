"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDomText = isDomText;
exports.isDomElement = isDomElement;
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function () {
    return _domhandler.Text;
  }
});
Object.defineProperty(exports, "Element", {
  enumerable: true,
  get: function () {
    return _domhandler.Element;
  }
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function () {
    return _domhandler.Node;
  }
});
Object.defineProperty(exports, "Document", {
  enumerable: true,
  get: function () {
    return _domhandler.Document;
  }
});
Object.defineProperty(exports, "NodeWithChildren", {
  enumerable: true,
  get: function () {
    return _domhandler.NodeWithChildren;
  }
});

var _domhandler = require("domhandler");

var _domelementtype = require("domelementtype");

function isDomText(node) {
  return node && node.type === _domelementtype.Text;
}

function isDomElement(node) {
  return node && node.type === _domelementtype.Tag;
}
//# sourceMappingURL=dom-utils.js.map