"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderChildren;

var _react = _interopRequireDefault(require("react"));

var _TNodeRenderer = _interopRequireDefault(require("./TNodeRenderer"));

var _collapseTopMarginForChild = _interopRequireDefault(require("./helpers/collapseTopMarginForChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const empty = {};

const mapCollapsibleChildren = (propsForChildren, renderChild, disableMarginCollapsing, childTnode, n, tchildren) => {
  const collapsedMarginTop = disableMarginCollapsing ? null : (0, _collapseTopMarginForChild.default)(n, tchildren);
  const propsFromParent = { ...propsForChildren,
    collapsedMarginTop
  };
  const key = childTnode.nodeIndex;

  const childElement = /*#__PURE__*/_react.default.createElement(_TNodeRenderer.default, {
    propsFromParent,
    tnode: childTnode,
    key,
    renderIndex: n,
    renderLength: tchildren.length
  });

  return typeof renderChild === 'function' ? renderChild({
    key,
    childElement,
    index: n,
    childTnode,
    propsFromParent
  }) : childElement;
};

function renderChildren({
  tchildren,
  propsForChildren = empty,
  disableMarginCollapsing,
  renderChild
}) {
  const elements = tchildren.map(mapCollapsibleChildren.bind(null, propsForChildren, renderChild, disableMarginCollapsing));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, elements);
}
//# sourceMappingURL=renderChildren.js.map