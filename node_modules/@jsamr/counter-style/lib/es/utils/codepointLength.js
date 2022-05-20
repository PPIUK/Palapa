export default function codepointLength(source) {
    // get codepoints length instead of UTF16 code units with the string Iterator.
    return (source && [...source].length) || 0;
}
//# sourceMappingURL=codepointLength.js.map