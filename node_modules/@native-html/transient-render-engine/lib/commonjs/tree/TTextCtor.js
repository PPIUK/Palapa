"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TTextCtor = exports.default = void 0;

var _HTMLContentModel = _interopRequireDefault(require("../model/HTMLContentModel"));

var _compose = _interopRequireDefault(require("ramda/src/compose"));

var _textTransforms = require("../flow/text-transforms");

var _TNodeCtor = _interopRequireDefault(require("./TNodeCtor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const collapseWhiteSpaces = (0, _compose.default)(_textTransforms.normalizeWhitespaces, _textTransforms.replaceSegmentBreaks, _textTransforms.normalizeZeroWidthWhitespaces, _textTransforms.removeConsecutiveSegmentBreaks, _textTransforms.removeCollapsibleAroundSegmentBreak);
const collapseWhiteSpacesWithEastAsianCharset = (0, _compose.default)(_textTransforms.normalizeWhitespaces, _textTransforms.replaceSegmentBreaks, _textTransforms.removeLineBreaksAroundEastAsianDiscardSet, _textTransforms.normalizeZeroWidthWhitespaces, _textTransforms.removeConsecutiveSegmentBreaks, _textTransforms.removeCollapsibleAroundSegmentBreak);

const TTextCtor = function TText(init) {
  this.initialize(init);
  this.isVoid = this.elementModel ? this.elementModel.isVoid : false;
}; //@ts-ignore


exports.TTextCtor = TTextCtor;
TTextCtor.prototype = new _TNodeCtor.default('text', 'TText', {
  data: {
    get() {
      return this.init.textNode.data;
    },

    set(data) {
      this.init.textNode.data = data;
    }

  }
});

TTextCtor.prototype.matchContentModel = function matchContentModel(contentModel) {
  return contentModel === _HTMLContentModel.default.textual || contentModel === _HTMLContentModel.default.mixed;
};

TTextCtor.prototype.isCollapsibleLeft = function isCollapsibleLeft() {
  return this.hasWhiteSpaceCollapsingEnabled && !this.isEmpty() && this.data[0] === ' ';
};

TTextCtor.prototype.isCollapsibleRight = function isCollapsibleRight() {
  return this.hasWhiteSpaceCollapsingEnabled && !this.isEmpty() && (this.isVoid || this.data[this.data.length - 1] === ' ');
};

TTextCtor.prototype.isEmpty = function isEmpty() {
  // Only anonymous text nodes can be considered "empty"
  return this.tagName === null && !this.data.length;
};

TTextCtor.prototype.trimLeft = function trimLeft() {
  if (this.isCollapsibleLeft()) {
    this.data = this.data.slice(1);
  }
};

TTextCtor.prototype.trimRight = function trimRight() {
  if (this.isCollapsibleRight()) {
    this.data = this.data.substr(0, this.data.length - 1);
  }
};

TTextCtor.prototype.collapseChildren = function collapseChildren() {
  if (this.hasWhiteSpaceCollapsingEnabled) {
    if (this.init.context.removeLineBreaksAroundEastAsianDiscardSet) {
      this.data = collapseWhiteSpacesWithEastAsianCharset(this.data);
    } else {
      this.data = collapseWhiteSpaces(this.data);
    }
  }

  return null;
};

var _default = TTextCtor;
exports.default = _default;
//# sourceMappingURL=TTextCtor.js.map