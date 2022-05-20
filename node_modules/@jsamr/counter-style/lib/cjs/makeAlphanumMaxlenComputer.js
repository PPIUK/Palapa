"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlphanumMaxlenComputer(base, alpha) {
    return function alphanumericMaxLenComputer(_min, max) {
        let remax = max - Number(alpha);
        let digits = 1;
        while (remax >= base) {
            remax /= base;
            digits++;
        }
        return digits;
    };
}
exports.default = makeAlphanumMaxlenComputer;
//# sourceMappingURL=makeAlphanumMaxlenComputer.js.map