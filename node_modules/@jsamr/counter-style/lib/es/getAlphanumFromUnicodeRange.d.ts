declare function getAlphanumFromUnicodeRange(index: number, baseCharcode: number, modulo: number, alpha: true): string | undefined;
declare function getAlphanumFromUnicodeRange(index: number, baseCharcode: number, modulo: number, alpha: false): string;
export default getAlphanumFromUnicodeRange;
