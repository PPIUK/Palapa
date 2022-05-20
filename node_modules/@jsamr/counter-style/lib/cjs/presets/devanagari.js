"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const devanagari = CounterStyle_1.default.numericFromUnicodeRange(
/* ० १ २ ३ ४ ५ ६ ७ ८ ९ */
0x0966, 10);
exports.default = devanagari;
//# sourceMappingURL=devanagari.js.map