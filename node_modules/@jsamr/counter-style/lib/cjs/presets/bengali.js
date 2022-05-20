"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const bengali = CounterStyle_1.default.numericFromUnicodeRange(
/* ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ */
0x9e6, 10);
exports.default = bengali;
//# sourceMappingURL=bengali.js.map