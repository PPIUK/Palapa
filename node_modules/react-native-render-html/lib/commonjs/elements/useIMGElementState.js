"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useIMGElementState;

var _react = require("react");

var _reactNative = require("react-native");

var _defaultInitialImageDimensions = _interopRequireDefault(require("./defaultInitialImageDimensions"));

var _useIMGNormalizedSource = _interopRequireDefault(require("./useIMGNormalizedSource"));

var _useImageConcreteDimensions = _interopRequireDefault(require("./useImageConcreteDimensions"));

var _getIMGState = require("./getIMGState");

var _useImageSpecifiedDimensions = _interopRequireDefault(require("./useImageSpecifiedDimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getImageSizeAsync({
  uri,
  headers
}) {
  return new Promise((onsuccess, onerror) => {
    const onImageDimensionsSuccess = (width, height) => onsuccess({
      width,
      height
    });

    if (headers) {
      _reactNative.Image.getSizeWithHeaders(uri, headers, onImageDimensionsSuccess, onerror);
    } else {
      _reactNative.Image.getSize(uri, onImageDimensionsSuccess, onerror);
    }
  });
}

function useImageNaturalDimensions(props) {
  const {
    source,
    cachedNaturalDimensions
  } = props;
  const [naturalDimensions, setNaturalDimensions] = (0, _react.useState)(cachedNaturalDimensions || null);
  const {
    width: cachedNaturalWidth,
    height: cachedNaturalHeight
  } = cachedNaturalDimensions || {};
  const [error, setError] = (0, _react.useState)(null);
  (0, _react.useEffect)(function resetOnURIChange() {
    setNaturalDimensions(cachedNaturalWidth != null && cachedNaturalHeight != null ? {
      width: cachedNaturalWidth,
      height: cachedNaturalHeight
    } : null);
    setError(null);
  }, [cachedNaturalHeight, cachedNaturalWidth, source.uri]);
  return {
    onNaturalDimensions: setNaturalDimensions,
    onError: setError,
    naturalDimensions,
    error
  };
}

function useFetchedNaturalDimensions(props) {
  const {
    source,
    cachedNaturalDimensions
  } = props;
  const {
    error,
    naturalDimensions,
    onError,
    onNaturalDimensions
  } = useImageNaturalDimensions(props);
  const hasCachedDimensions = !!cachedNaturalDimensions;
  (0, _react.useEffect)(function fetchPhysicalDimensions() {
    let cancelled = false;

    if (source.uri && !hasCachedDimensions) {
      getImageSizeAsync({
        uri: source.uri,
        headers: source.headers
      }).then(dimensions => !cancelled && onNaturalDimensions(dimensions)).catch(e => !cancelled && onError(e || {}));
      return () => {
        cancelled = true;
      };
    }
  }, [source.uri, source.headers, onNaturalDimensions, onError, hasCachedDimensions]);
  return {
    naturalDimensions,
    error,
    onError,
    onNaturalDimensions
  };
}
/**
 * This hook will compute concrete dimensions from image natural dimensions and
 * constraints. It will fetch the image and get its dimensions.
 *
 * @remarks If you know the dimensions beforehand, use
 * {@link useIMGElementStateWithCache} instead to save a network request and
 * prevent a layout shift.
 */


function useIMGElementState(props) {
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
  const {
    naturalDimensions,
    onError,
    error
  } = useFetchedNaturalDimensions({
    source: nomalizedSource,
    specifiedDimensions,
    cachedNaturalDimensions
  });
  const concreteDimensions = (0, _useImageConcreteDimensions.default)({
    flatStyle,
    naturalDimensions,
    specifiedDimensions,
    computeMaxWidth,
    contentWidth
  });
  return (0, _getIMGState.getIMGState)({
    error,
    alt,
    altColor,
    concreteDimensions,
    containerStyle: flatStyle,
    initialDimensions,
    objectFit,
    onError,
    source: nomalizedSource
  });
}
//# sourceMappingURL=useIMGElementState.js.map