"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CounterStyle_1 = __importDefault(require("../CounterStyle"));
const lowerGreek = CounterStyle_1.default.alphabeticFromUnicodeRange(
/* α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω */
0x3b1, 24);
exports.default = lowerGreek;
//# sourceMappingURL=lowerGreek.js.map