"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.tchildrenRendererDefaultProps = void 0;

var _renderChildren = _interopRequireDefault(require("./renderChildren"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A component to render collections of tnodes.
 * Especially useful when used with {@link useTNodeChildrenProps}.
 */
const TChildrenRenderer = _renderChildren.default.bind(null);

const tchildrenRendererDefaultProps = {
  propsForChildren: {}
};
/**
 * @ignore
 */

exports.tchildrenRendererDefaultProps = tchildrenRendererDefaultProps;
TChildrenRenderer.defaultProps = tchildrenRendererDefaultProps;
var _default = TChildrenRenderer;
exports.default = _default;
//# sourceMappingURL=TChildrenRenderer.js.map