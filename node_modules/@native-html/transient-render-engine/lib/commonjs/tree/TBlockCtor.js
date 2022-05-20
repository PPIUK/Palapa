"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TBlockCtor = exports.default = void 0;

var _HTMLContentModel = _interopRequireDefault(require("../model/HTMLContentModel"));

var _TNodeCtor = _interopRequireDefault(require("./TNodeCtor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TBlockCtor = function TBlock(init) {
  this.initialize(init);
}; //@ts-ignore


exports.TBlockCtor = TBlockCtor;
TBlockCtor.prototype = new _TNodeCtor.default('block', 'TBlock');

TBlockCtor.prototype.matchContentModel = function matchContentModel(contentModel) {
  return contentModel === _HTMLContentModel.default.block || contentModel === _HTMLContentModel.default.mixed;
};

TBlockCtor.prototype.collapseChildren = function collapseChildren() {
  let indexesToSplice = [];
  this.children.forEach((child, i) => {
    child.collapse();

    if (child.isEmpty()) {
      indexesToSplice.push(i);
    }
  });
  this.spliceChildren(indexesToSplice);
};

TBlockCtor.prototype.getNativeStyles = function getNativeStyles() {
  if (this.__nativeStyles === false) {
    this.__nativeStyles = { ...this.styles.nativeBlockFlow,
      ...this.styles.nativeBlockRet
    };
  }

  return this.__nativeStyles;
};

var _default = TBlockCtor;
exports.default = _default;
//# sourceMappingURL=TBlockCtor.js.map