"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TPhrasingCtor = exports.default = void 0;

var _HTMLContentModel = _interopRequireDefault(require("../model/HTMLContentModel"));

var _TNodeCtor = _interopRequireDefault(require("./TNodeCtor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isChildEmpty(c) {
  return c.isEmpty();
}

const TPhrasingCtor = function TPhrasing(init) {
  this.initialize(init);
}; //@ts-ignore


exports.TPhrasingCtor = TPhrasingCtor;
TPhrasingCtor.prototype = new _TNodeCtor.default('phrasing', 'TPhrasing');

TPhrasingCtor.prototype.matchContentModel = function matchContentModel(contentModel) {
  return contentModel === _HTMLContentModel.default.textual || contentModel === _HTMLContentModel.default.mixed;
};

TPhrasingCtor.prototype.isEmpty = function isEmpty() {
  // Only anonymous phrasing nodes with every children empty can be considered "empty"
  return this.tagName === null && this.children.every(isChildEmpty);
};

TPhrasingCtor.prototype.collapseChildren = function collapseChildren() {
  let previous = null;
  this.children.forEach((childK, k) => {
    const j = k - 1;
    childK.collapse();

    if (j > -1 && childK.isCollapsibleLeft() && previous.isCollapsibleRight()) {
      // We must trim left from current to support trimming
      // after <br> and <wbr> tags.
      childK.trimLeft();
    }

    previous = childK;
  });
  this.trimLeft();
  this.trimRight();
  return null;
};

var _default = TPhrasingCtor;
exports.default = _default;
//# sourceMappingURL=TPhrasingCtor.js.map