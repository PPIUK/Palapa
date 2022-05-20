"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function codepointLength(source) {
    // get codepoints length instead of UTF16 code units with the string Iterator.
    return (source && [...source].length) || 0;
}
exports.default = codepointLength;
//# sourceMappingURL=codepointLength.js.map