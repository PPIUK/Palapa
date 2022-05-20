"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const codepointLength_1 = __importDefault(require("./utils/codepointLength"));
const codeunitLength_1 = __importDefault(require("./utils/codeunitLength"));
const reverseString_1 = __importDefault(require("./utils/reverseString"));
const defaultRtlOptions = {
    reverseCounter: false,
    reversePrefix: true,
    reverseSuffix: true
};
const stylePrototype = {
    getAbsoluteMaxLenInRange(normMin, normMax, negative) {
        var _a;
        const specs = this.engine.specs;
        const supportedRange = specs.range;
        const supportedMin = Math.max(normMin, supportedRange.min);
        const supportedMax = Math.min(normMax, supportedRange.max);
        const lenMiddle = Math.max(this.engine.maxLengthInRange(negative ? Math.abs(supportedMax) : supportedMin, negative ? Math.abs(supportedMin) : supportedMax) +
            (negative && specs.negative
                ? codeunitLength_1.default(specs.negative.prefix) +
                    codeunitLength_1.default(specs.negative.suffix)
                : 0), ((_a = specs === null || specs === void 0 ? void 0 : specs.padding) === null || _a === void 0 ? void 0 : _a.length) || 0);
        const lenLeft = supportedMin > normMin
            ? specs.fallback.maxCounterLenInRange(normMin, supportedMin - 1)
            : 0;
        const lenRight = supportedMax < normMax
            ? specs.fallback.maxCounterLenInRange(supportedMax + 1, normMax)
            : 0;
        return Math.max(lenLeft, lenMiddle, lenRight);
    },
    maxCounterLenInRange(min, max) {
        if (max < min) {
            return 0;
        }
        if (min >= 0) {
            return this.getAbsoluteMaxLenInRange(min, max, false);
        }
        if (max <= 0) {
            return this.getAbsoluteMaxLenInRange(min, max, true);
        }
        return Math.max(this.getAbsoluteMaxLenInRange(min, -1, true), this.getAbsoluteMaxLenInRange(0, max, false));
    },
    maxMarkerLenInRange(min, max) {
        if (max < min) {
            return 0;
        }
        return (this.maxCounterLenInRange(min, max) +
            codeunitLength_1.default(this.engine.specs.suffix) +
            codeunitLength_1.default(this.engine.specs.prefix));
    },
    renderCounter(index) {
        const formatter = this.engine.formatter;
        const sp = this.engine.specs;
        const negative = sp.negative;
        let res;
        if (index < sp.range.min || index > sp.range.max) {
            return sp.fallback.renderCounter(index);
        }
        const decoratorL = negative && index < 0
            ? codeunitLength_1.default(negative.prefix) + codeunitLength_1.default(negative.suffix)
            : 0;
        res = formatter(Math.sign(index) * index);
        if (typeof res === 'undefined') {
            return sp.fallback.renderCounter(index);
        }
        if (sp.padding) {
            const lenWithDecorator = codepointLength_1.default(res) + decoratorL;
            if (lenWithDecorator < sp.padding.length) {
                const padChar = sp.padding.char.repeat(sp.padding.length - lenWithDecorator);
                res = sp.padding.right ? res + padChar : padChar + res;
            }
        }
        if (index < 0 && negative) {
            res = negative.prefix + res + negative.suffix;
        }
        return sp.reversedCounter ? reverseString_1.default(res) : res;
    },
    renderMarker(index) {
        const sp = this.engine.specs;
        const elements = [
            sp.prefix || '',
            this.renderCounter(index),
            sp.suffix || ''
        ];
        return sp.reversedMarker ? elements.reverse().join('') : elements.join('');
    },
    renderPrefix() {
        return this.engine.specs.prefix || '';
    },
    renderSuffix() {
        return this.engine.specs.suffix || '';
    },
    withFallback(fallback) {
        return makeCSRenderer(this.engine.withSpecs({ fallback }));
    },
    withRange(min, max, fallback) {
        const result = makeCSRenderer(this.engine.withSpecs({
            range: {
                min,
                max
            }
        }));
        return fallback ? result.withFallback(fallback) : result;
    },
    withNegative(prefix, suffix = '') {
        return makeCSRenderer(this.engine.withSpecs({
            negative: {
                prefix,
                suffix
            }
        }));
    },
    withPadLeft(length, pad) {
        return makeCSRenderer(this.engine.withSpecs({
            padding: {
                right: false,
                char: pad,
                length
            }
        }));
    },
    withPadRight(length, pad) {
        return makeCSRenderer(this.engine.withSpecs({
            padding: {
                right: true,
                char: pad,
                length
            }
        }));
    },
    withSuffix(suffix) {
        return makeCSRenderer(this.engine.withSpecs({
            suffix
        }));
    },
    withPrefix(prefix) {
        return makeCSRenderer(this.engine.withSpecs({
            prefix
        }));
    },
    withRtl(options) {
        const synthOptions = Object.assign({}, defaultRtlOptions, options);
        const sp = this.engine.specs;
        return makeCSRenderer(this.engine.withSpecs({
            reversedMarker: true,
            reversedCounter: synthOptions.reverseCounter,
            suffix: synthOptions.reverseSuffix && sp.suffix
                ? reverseString_1.default(sp.suffix)
                : sp.suffix,
            prefix: synthOptions.reversePrefix && sp.prefix
                ? reverseString_1.default(sp.prefix)
                : sp.prefix
        }));
    },
    withMaxLengthComputer(computer) {
        return makeCSRenderer(this.engine.withMaxLengthInRange((min, max) => computer(min, max, this.engine.maxLengthInRange.bind(this.engine))));
    }
};
function makeCSRenderer(engine) {
    const target = Object.create(stylePrototype);
    target.engine = engine;
    return Object.freeze(target);
}
exports.default = makeCSRenderer;
//# sourceMappingURL=makeCSRenderer.js.map