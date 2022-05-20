"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const arabicIndic = CounterStyle_1.default.numericFromUnicodeRange(
/* ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ */
0x0660, 10);
exports.default = arabicIndic;
//# sourceMappingURL=arabicIndic.js.map