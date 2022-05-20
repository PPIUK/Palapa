"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const makeAlphanumMaxlenComputer_1 = __importDefault(require("../makeAlphanumMaxlenComputer"));
// Default implementation is faster than invoking CounterStyle.numeric
const decimal = CounterStyle_1.default.raw((index) => index.toString())
    .withMaxLengthComputer(makeAlphanumMaxlenComputer_1.default(10, false))
    .withNegative('-');
exports.default = decimal;
//# sourceMappingURL=decimal.js.map