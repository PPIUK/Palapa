"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ARenderer = _interopRequireDefault(require("../renderers/ARenderer"));

var _IMGRenderer = _interopRequireDefault(require("../renderers/IMGRenderer"));

var _OLRenderer = _interopRequireDefault(require("../renderers/OLRenderer"));

var _ULRenderer = _interopRequireDefault(require("../renderers/ULRenderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const internalRenderers = {
  img: _IMGRenderer.default,
  ul: _ULRenderer.default,
  ol: _OLRenderer.default,
  a: _ARenderer.default
};
var _default = internalRenderers;
exports.default = _default;
//# sourceMappingURL=internalRenderers.js.map