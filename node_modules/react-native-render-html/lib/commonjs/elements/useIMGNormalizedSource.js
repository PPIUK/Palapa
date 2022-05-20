"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIMGNormalizedSource;

var _react = require("react");

var _SharedPropsProvider = require("../context/SharedPropsProvider");

function useIMGNormalizedSource({
  source,
  specifiedDimensions
}) {
  const cachedDimensions = (0, _react.useRef)(specifiedDimensions);
  const {
    provideEmbeddedHeaders
  } = (0, _SharedPropsProvider.useSharedProps)();
  return (0, _react.useMemo)(() => {
    if (source.uri && typeof provideEmbeddedHeaders === 'function') {
      var _cachedDimensions$cur, _cachedDimensions$cur2;

      const headers = provideEmbeddedHeaders(source.uri, 'img', {
        printWidth: ((_cachedDimensions$cur = cachedDimensions.current) === null || _cachedDimensions$cur === void 0 ? void 0 : _cachedDimensions$cur.width) || undefined,
        printHeight: ((_cachedDimensions$cur2 = cachedDimensions.current) === null || _cachedDimensions$cur2 === void 0 ? void 0 : _cachedDimensions$cur2.height) || undefined
      });

      if (headers) {
        return {
          headers,
          ...source
        };
      }
    }

    return source;
  }, [provideEmbeddedHeaders, source]);
}
//# sourceMappingURL=useIMGNormalizedSource.js.map