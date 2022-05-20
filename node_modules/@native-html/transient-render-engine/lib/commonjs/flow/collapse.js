"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collapse = collapse;

function collapse(root) {
  root.collapse();
  root.trimLeft();
  root.trimRight();
  return root;
}
//# sourceMappingURL=collapse.js.map