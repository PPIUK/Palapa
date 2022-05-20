"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDimensionsWithAspectRatio;

function getDimensionsWithAspectRatio(width, height, aspectRatio) {
  return {
    width: width !== null && width !== void 0 ? width : aspectRatio && height ? height * aspectRatio : null,
    height: height !== null && height !== void 0 ? height : aspectRatio && width ? width / aspectRatio : null
  };
}
//# sourceMappingURL=getDimensionsWithAspectRatio.js.map