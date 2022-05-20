"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SourceLoaderDom;

var _react = _interopRequireDefault(require("react"));

var _RenderTTree = _interopRequireDefault(require("./RenderTTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SourceLoaderDom(props) {
  return /*#__PURE__*/_react.default.createElement(_RenderTTree.default, {
    document: props.source.dom,
    baseUrl: props.source.baseUrl
  });
}
//# sourceMappingURL=SourceLoaderDom.js.map