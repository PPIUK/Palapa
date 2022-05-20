"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const cjkEarthlyBranch = CounterStyle_1.default.fixed(
/* 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥 */
'\u5B50', '\u4E11', '\u5BC5', '\u536F', '\u8FB0', '\u5DF3', '\u5348', '\u672A', '\u7533', '\u9149', '\u620C', '\u4EA5').withSuffix(constants_1.CJK_SUFFIX);
exports.default = cjkEarthlyBranch;
//# sourceMappingURL=cjkEarthlyBranch.js.map