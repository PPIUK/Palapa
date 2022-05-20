export default function makeAlphanumMaxlenComputer(base, alpha) {
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
//# sourceMappingURL=makeAlphanumMaxlenComputer.js.map