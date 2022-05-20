"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const codepointLength_1 = __importDefault(require("./utils/codepointLength"));
const constants_1 = require("./constants");
const DEFAULT_SPECS = {
    suffix: constants_1.DEFAULT_SUFFIX,
    prefix: null,
    reversedMarker: false,
    reversedCounter: false,
    fallback: {
        renderCounter: (index) => index.toString(),
        maxCounterLenInRange(min, max) {
            return Math.max(this.renderCounter(min).length, this.renderCounter(max).length);
        }
    },
    negative: null,
    range: {
        min: -Infinity,
        max: Infinity
    },
    padding: null
};
const styleEngineProto = {
    // Cost-inefficient since it requires iterating over the whole range.
    maxLengthInRange(min, max) {
        let len = 0;
        for (let i = Math.max(0, min); i <= max; i++) {
            const val = this.formatter(i);
            len = Math.max(codepointLength_1.default(val), len);
        }
        return len;
    },
    withSpecs(spToMerge) {
        const next = Object.create(this);
        next.specs = Object.assign({}, this.specs, spToMerge);
        return next;
    },
    withMaxLengthInRange(cp) {
        const next = Object.create(this);
        next.maxLengthInRange = cp;
        return next;
    }
};
function makeCSEngine(formatter, specs = DEFAULT_SPECS) {
    const eng = Object.create(styleEngineProto);
    eng.specs = specs;
    eng.formatter = formatter;
    return eng;
}
exports.default = makeCSEngine;
//# sourceMappingURL=makeCSEngine.js.map