"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const cjkHeavenlyStem = CounterStyle_1.default.fixed(
/* 甲 乙 丙 丁 戊 己 庚 辛 壬 癸 */
'\u7532', '\u4E59', '\u4E19', '\u4E01', '\u620A', '\u5DF1', '\u5E9A', '\u8F9B', '\u58EC', '\u7678').withSuffix(constants_1.CJK_SUFFIX);
exports.default = cjkHeavenlyStem;
//# sourceMappingURL=cjkHeavenlyStem.js.map