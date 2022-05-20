"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIMGElementStateWithCache;

var _defaultInitialImageDimensions = _interopRequireDefault(require("./defaultInitialImageDimensions"));

var _getIMGState = require("./getIMGState");

var _useImageConcreteDimensions = _interopRequireDefault(require("./useImageConcreteDimensions"));

var _useImageSpecifiedDimensions = _interopRequireDefault(require("./useImageSpecifiedDimensions"));

var _useIMGNormalizedSource = _interopRequireDefault(require("./useIMGNormalizedSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This hook is useful when one has access to image natural dimensions prior to
 * loading. The `cachedNaturalDimensions` prop must be passed to immediately
 * compute concrete dimensions.
 */
function useIMGElementStateWithCache(props) {
  const {
    alt,
    altColor,
    source,
    contentWidth,
    computeMaxWidth,
    objectFit,
    initialDimensions = _defaultInitialImageDimensions.default,
    cachedNaturalDimensions
  } = props;
  const {
    flatStyle,
    specifiedDimensions
  } = (0, _useImageSpecifiedDimensions.default)(props);
  const nomalizedSource = (0, _useIMGNormalizedSource.default)({
    specifiedDimensions,
    source
  });
  const concreteDimensions = (0, _useImageConcreteDimensions.default)({
    flatStyle,
    naturalDimensions: cachedNaturalDimensions,
    specifiedDimensions,
    computeMaxWidth,
    contentWidth
  });
  return (0, _getIMGState.getIMGState)({
    error: null,
    concreteDimensions,
    containerStyle: flatStyle,
    initialDimensions,
    objectFit,
    source: nomalizedSource,
    alt,
    altColor
  });
}
//# sourceMappingURL=useIMGElementStateWithCache.js.map