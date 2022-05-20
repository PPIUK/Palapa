"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapNodeList = mapNodeList;
exports.bindChildren = bindChildren;
exports.translateNode = translateNode;
exports.translateDocument = translateDocument;

var _TTextCtor = require("../tree/TTextCtor");

var _TPhrasingCtor = require("../tree/TPhrasingCtor");

var _TBlockCtor = require("../tree/TBlockCtor");

var _TDocumentImpl = require("../tree/TDocumentImpl");

var _domUtils = require("../dom/dom-utils");

var _TEmptyCtor = require("../tree/TEmptyCtor");

function mapNodeList({
  nodeList,
  parent,
  parentStyles,
  params
}) {
  const nextMap = [];

  for (const i in nodeList) {
    const child = nodeList[i];
    const translated = translateNode({
      node: child,
      parentStyles,
      params,
      nodeIndex: Number(i),
      parent
    });

    if (translated) {
      nextMap.push(translated);
    }
  }

  return nextMap;
}

function bindChildren(node, children, params) {
  if (!node.elementModel || !node.elementModel.isOpaque) {
    node.bindChildren(mapNodeList({
      nodeList: children,
      parent: node,
      params
    }));
  }
}

function translateElement({
  node,
  nodeIndex,
  params,
  parent,
  parentStyles
}) {
  const tagName = node.tagName;
  const sharedProps = {
    nodeIndex,
    parentStyles,
    context: params,
    domNode: node,
    parent
  };
  const elementModel = params.modelRegistry.getElementModelFromTagName(tagName);

  if (!elementModel) {
    return new _TEmptyCtor.TEmptyCtor({ ...sharedProps,
      isUnregistered: true,
      elementModel,
      domNode: node
    });
  }

  if (elementModel.isTranslatableTextual()) {
    if (node.children.length === 1) {
      const child = node.children[0];

      if ((0, _domUtils.isDomText)(child)) {
        return new _TTextCtor.TTextCtor({ ...sharedProps,
          elementModel,
          textNode: child,
          domNode: node
        });
      }
    } else if (node.children.length === 0) {
      return new _TTextCtor.TTextCtor({ ...sharedProps,
        elementModel,
        domNode: node,
        textNode: new _domUtils.Text('')
      });
    }

    const phrasing = new _TPhrasingCtor.TPhrasingCtor({ ...sharedProps,
      domNode: node,
      elementModel
    });
    bindChildren(phrasing, node.children, params);
    return phrasing;
  }

  if (elementModel.isTranslatableBlock()) {
    const block = new _TBlockCtor.TBlockCtor({ ...sharedProps,
      elementModel,
      parentStyles,
      domNode: node
    });
    bindChildren(block, node.children, params);
    return block;
  }

  return new _TEmptyCtor.TEmptyCtor({ ...sharedProps,
    isUnregistered: false,
    elementModel,
    domNode: node
  });
}

function translateNode({
  node,
  parentStyles,
  params,
  nodeIndex,
  parent
}) {
  if ((0, _domUtils.isDomText)(node)) {
    return new _TTextCtor.TTextCtor({
      textNode: node,
      context: params,
      parentStyles,
      domNode: null,
      elementModel: null,
      nodeIndex,
      parent
    });
  }

  if ((0, _domUtils.isDomElement)(node)) {
    return translateElement({
      node,
      parentStyles,
      params,
      nodeIndex,
      parent
    });
  }

  return null;
}

function translateDocument(document, params) {
  const tdoc = new _TDocumentImpl.TDocumentCtor({
    context: params,
    styles: params.baseStyles,
    domNode: document
  });
  bindChildren(tdoc, document.children, params);
  tdoc.parseChildren();
  return tdoc;
}
//# sourceMappingURL=translate.js.map