"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const tibetan = CounterStyle_1.default.numericFromUnicodeRange(
/* ༠ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩ */
0xf20, 10);
exports.default = tibetan;
//# sourceMappingURL=tibetan.js.map