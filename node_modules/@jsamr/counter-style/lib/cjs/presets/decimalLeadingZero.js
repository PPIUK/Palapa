"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decimal_1 = __importDefault(require("./decimal"));
const decimalLeadingZero = decimal_1.default.withPadLeft(2, '0');
exports.default = decimalLeadingZero;
//# sourceMappingURL=decimalLeadingZero.js.map