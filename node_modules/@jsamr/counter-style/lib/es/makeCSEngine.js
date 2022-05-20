import codepointLength from './utils/codepointLength';
import { DEFAULT_SUFFIX } from './constants';
const DEFAULT_SPECS = {
    suffix: DEFAULT_SUFFIX,
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
            len = Math.max(codepointLength(val), len);
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
export default function makeCSEngine(formatter, specs = DEFAULT_SPECS) {
    const eng = Object.create(styleEngineProto);
    eng.specs = specs;
    eng.formatter = formatter;
    return eng;
}
//# sourceMappingURL=makeCSEngine.js.map