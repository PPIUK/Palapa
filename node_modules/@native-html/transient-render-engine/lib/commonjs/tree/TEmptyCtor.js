"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEmptyCtor = exports.default = void 0;

var _HTMLContentModel = _interopRequireDefault(require("../model/HTMLContentModel"));

var _TNodeCtor = _interopRequireDefault(require("./TNodeCtor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TEmptyCtor = function TEmpty(init) {
  this.initialize(init);
}; //@ts-ignore


exports.TEmptyCtor = TEmptyCtor;
TEmptyCtor.prototype = new _TNodeCtor.default('empty', 'TEmpty');

TEmptyCtor.prototype.matchContentModel = function matchContentModel(contentModel) {
  return contentModel === _HTMLContentModel.default.none;
};

var _default = TEmptyCtor;
exports.default = _default;
//# sourceMappingURL=TEmptyCtor.js.map