"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hoist = hoist;

var _TBlockCtor = _interopRequireDefault(require("../tree/TBlockCtor"));

var _TPhrasingCtor = require("../tree/TPhrasingCtor");

var _TTextCtor = require("../tree/TTextCtor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrap text nodes around TPhrasing nodes.
 * @param tnode The parent node of all elements to group.
 */
function groupText(tnode) {
  let newChildren = [];
  const wrapperInit = {
    elementModel: null,
    context: tnode.init.context,
    // We need to merge styles here to make sure
    // some React Native styles working only for the uppermost Text element
    // such as "textAlign" are preserved.
    parentStyles: tnode.styles,
    parent: null
  };
  let wrapper = new _TPhrasingCtor.TPhrasingCtor(wrapperInit);
  let wrapperChildren = [];

  for (const child of tnode.children) {
    if (child instanceof _TTextCtor.TTextCtor || child instanceof _TPhrasingCtor.TPhrasingCtor) {
      wrapperChildren.push(child);
    } else {
      if (wrapperChildren.length) {
        newChildren.push(wrapper);
        wrapper.bindChildren(wrapperChildren);
        wrapper = new _TPhrasingCtor.TPhrasingCtor(wrapperInit);
        wrapperChildren = [];
      }

      newChildren.push(child);
    }
  }

  if (wrapperChildren.length) {
    wrapper.bindChildren(wrapperChildren);
    newChildren.push(wrapper);
  }

  tnode.bindChildren(newChildren);
  return tnode;
}

function hoistNode(tnode) {
  if (tnode instanceof _TTextCtor.TTextCtor) {
    return tnode;
  }

  tnode.bindChildren(tnode.children.map(hoistNode));

  if (tnode instanceof _TPhrasingCtor.TPhrasingCtor) {
    for (const cnode of tnode.children) {
      if (cnode instanceof _TBlockCtor.default) {
        const newNode = new _TBlockCtor.default(tnode.cloneInitParams());
        newNode.bindChildren(tnode.children);
        const output = groupText(newNode);
        return output;
      }
    }
  } else if (tnode instanceof _TBlockCtor.default) {
    if (tnode.children.length > 0) {
      const output = groupText(tnode);
      return output;
    }
  }

  return tnode;
}

function hoist(tree) {
  return hoistNode(tree);
}
//# sourceMappingURL=hoist.js.map