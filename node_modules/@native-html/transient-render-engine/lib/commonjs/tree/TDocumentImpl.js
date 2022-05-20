"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TDocumentCtor = void 0;

var _HTMLElementModel = _interopRequireDefault(require("../model/HTMLElementModel"));

var _domUtils = require("../dom/dom-utils");

var _TBlockCtor = _interopRequireDefault(require("./TBlockCtor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultContextBase = Object.freeze({
  baseHref: 'about:blank',
  baseTarget: '_self',
  charset: 'utf-8',
  title: '',
  lang: 'en',
  dir: 'ltr',
  links: [],
  meta: []
});

function getDefaultDocumentContext() {
  return Object.assign({}, defaultContextBase, {
    links: [],
    meta: []
  });
}

function extractContextFromHead(head, lang, dir) {
  const context = getDefaultDocumentContext();

  if (lang) {
    context.lang = lang;
  }

  if (dir) {
    context.dir = 'rtl';
  }

  const domNode = head.domNode;
  const children = domNode.children;
  children.filter(_domUtils.isDomElement).forEach(child => {
    if (child.tagName === 'meta') {
      if (child.attribs.name) {
        context.meta.push(child.attribs);
      } else if (child.attribs.charset) {
        context.charset = child.attribs.charset.toLowerCase();
      }
    } else if (child.tagName === 'link') {
      context.links.push(child.attribs);
    } else if (child.tagName === 'title') {
      for (const titleChild of child.children.filter(_domUtils.isDomText)) {
        context.title = titleChild.data.trim();
        break;
      }
    } else if (child.tagName === 'base') {
      context.baseHref = child.attribs.href || context.baseHref;
      context.baseTarget = child.attribs.target || context.baseTarget;
    }
  });
  return context;
}

const htmlModel = _HTMLElementModel.default.fromNativeModel({
  tagName: 'html',
  category: 'grouping'
});

const TDocumentCtor = function TDocument(init) {
  this.initialize(init);
};

exports.TDocumentCtor = TDocumentCtor;
TDocumentCtor.prototype = Object.create(_TBlockCtor.default.prototype);
Object.defineProperty(TDocumentCtor.prototype, 'tagName', {
  value: 'html',
  writable: false
});
Object.defineProperty(TDocumentCtor.prototype, 'type', {
  value: 'document',
  writable: false
});
Object.defineProperty(TDocumentCtor.prototype, 'displayName', {
  value: 'TDocument',
  writable: false
});
Object.defineProperty(TDocumentCtor.prototype, 'elementModel', {
  value: htmlModel,
  writable: false
});

TDocumentCtor.prototype.parseChildren = function parseChildren() {
  let head;

  for (const child of this.children) {
    if (child.tagName === 'head') {
      head = child;
      break;
    }
  }

  this.context = Object.freeze(head ? extractContextFromHead(head, this.attributes.lang, this.attributes.dir) : { ...getDefaultDocumentContext(),
    lang: this.attributes.lang,
    dir: this.attributes.dir
  });
};

var _default = TDocumentCtor;
exports.default = _default;
//# sourceMappingURL=TDocumentImpl.js.map