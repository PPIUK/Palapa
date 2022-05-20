"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const tamil = CounterStyle_1.default.numericFromUnicodeRange(
/* ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯ */
0x0be6, 10);
exports.default = tamil;
//# sourceMappingURL=tamil.js.map