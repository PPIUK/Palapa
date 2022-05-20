"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const persian = CounterStyle_1.default.numericFromUnicodeRange(
/* ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ */
0x6f0, 10);
exports.default = persian;
//# sourceMappingURL=persian.js.map