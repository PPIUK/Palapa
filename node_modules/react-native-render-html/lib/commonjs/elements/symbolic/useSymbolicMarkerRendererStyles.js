"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useSymbolicMarkerRendererProps;

function useSymbolicMarkerRendererProps(props, shrinkFactor = 1) {
  const prefixSize = props.fontSize / (shrinkFactor * 2.8);
  return {
    prefixSize,
    prefixStyle: {
      width: prefixSize,
      height: prefixSize,
      // center the item vertically, relative to line height
      top: (props.lineHeight - prefixSize) / 2
    }
  };
}
//# sourceMappingURL=useSymbolicMarkerRendererStyles.js.map