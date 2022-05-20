"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const cjkDecimal = CounterStyle_1.default.numeric(
/* 〇 一 二 三 四 五 六 七 八 九 */
'\u3007', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D').withSuffix(constants_1.CJK_SUFFIX);
exports.default = cjkDecimal;
//# sourceMappingURL=cjkDecimal.js.map