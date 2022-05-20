"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domhandler = require("domhandler");

var _domUtils = require("./dom-utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class DomHandler extends _domhandler.DomHandler {
  constructor(options) {
    super(undefined, options, undefined);

    _defineProperty(this, "ignoredTags", void 0);

    _defineProperty(this, "ignoredTagsCount", -1);

    _defineProperty(this, "visitors", void 0);

    let ignoredTags = {};

    for (const tag of options.ignoredTags || []) {
      ignoredTags[tag] = true;
    }

    this.ignoredTags = ignoredTags;
    this.visitors = options.visitors || {};
    const isIgnored = this.isIgnored.bind(this);

    if (options.ignoreNode) {
      this.isIgnored = node => {
        return isIgnored(node) || options.ignoreNode(node, this.tagStack[this.tagStack.length - 1]);
      };
    }
  }

  isIgnored(node) {
    return this.ignoredTags[node.name] || this.ignoredTagsCount > -1;
  }

  addNode(node) {
    if (this.isIgnored(node) === true) {
      // increment only for elements.
      if ((0, _domUtils.isDomElement)(node)) {
        this.ignoredTagsCount++;
      }
    } else {
      super.addNode(node);

      if ((0, _domUtils.isDomText)(node)) {
        var _this$visitors$onText, _this$visitors;

        (_this$visitors$onText = (_this$visitors = this.visitors).onText) === null || _this$visitors$onText === void 0 ? void 0 : _this$visitors$onText.call(_this$visitors, node);
      }
    }
  }

  ontext(text) {
    // Only include text when out of an
    // ignoring session.
    if (this.ignoredTagsCount < 0) {
      super.ontext(text);
    }
  }

  onopentag(name, attribs) {
    super.onopentag(name, attribs);
  }

  onclosetag() {
    var _this$visitors$onElem, _this$visitors2;

    // Call onElement on close to give access to this node children
    (_this$visitors$onElem = (_this$visitors2 = this.visitors).onElement) === null || _this$visitors$onElem === void 0 ? void 0 : _this$visitors$onElem.call(_this$visitors2, this.tagStack[this.tagStack.length - 1]);
    super.onclosetag();

    if (this.ignoredTagsCount > -1) {
      this.ignoredTagsCount--;
    }
  }

  onend() {
    var _this$visitors$onDocu, _this$visitors3;

    (_this$visitors$onDocu = (_this$visitors3 = this.visitors).onDocument) === null || _this$visitors$onDocu === void 0 ? void 0 : _this$visitors$onDocu.call(_this$visitors3, this.root);
  }

}

exports.default = DomHandler;
//# sourceMappingURL=DomHandler.js.map