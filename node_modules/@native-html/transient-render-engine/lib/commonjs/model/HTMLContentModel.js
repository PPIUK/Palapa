"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HTMLContentModel = void 0;

/**
 * The **content model** associated with a tag determines how this tag should
 * be translated in the Transient Render Tree.
 */
// eslint-disable-next-line no-shadow
let HTMLContentModel;
exports.HTMLContentModel = HTMLContentModel;

(function (HTMLContentModel) {
  HTMLContentModel["block"] = "block";
  HTMLContentModel["textual"] = "textual";
  HTMLContentModel["mixed"] = "mixed";
  HTMLContentModel["none"] = "none";
})(HTMLContentModel || (exports.HTMLContentModel = HTMLContentModel = {}));

var _default = HTMLContentModel;
exports.default = _default;
//# sourceMappingURL=HTMLContentModel.js.map