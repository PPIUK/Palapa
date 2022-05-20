"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = collapseTopMarginForChild;

var _getCollapsedMarginTop = _interopRequireDefault(require("./getCollapsedMarginTop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isCollapsible(tnode) {
  return tnode.type === 'block' || tnode.type === 'phrasing';
}
/**
 * Compute top collapsed margin for the nth {@link TNode}-child of a list of
 * TNodes.
 *
 * @param n - The index for which the top margin should be collapsed.
 * @param tchildren - The list of {@link TNode} children.
 * @returns `null` when no margin collapsing should apply, a number otherwise.
 * @public
 */


function collapseTopMarginForChild(n, tchildren) {
  const childTnode = tchildren[n];

  if (isCollapsible(childTnode) && n > 0 && isCollapsible(tchildren[n - 1])) {
    return (0, _getCollapsedMarginTop.default)(tchildren[n - 1], childTnode);
  }

  return null;
}
//# sourceMappingURL=collapseTopMarginForChild.js.map