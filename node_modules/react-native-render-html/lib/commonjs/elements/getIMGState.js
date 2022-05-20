"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIMGState = getIMGState;

var _extractImageStyleProps = _interopRequireDefault(require("./extractImageStyleProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIMGState({
  error,
  alt,
  altColor,
  source,
  containerStyle,
  concreteDimensions,
  initialDimensions,
  objectFit,
  onError
}) {
  if (error) {
    return {
      type: 'error',
      alt,
      altColor,
      source,
      error,
      containerStyle,
      dimensions: concreteDimensions !== null && concreteDimensions !== void 0 ? concreteDimensions : initialDimensions
    };
  }

  if (concreteDimensions != null) {
    return {
      type: 'success',
      alt,
      altColor,
      source,
      onError,
      containerStyle,
      imageStyle: (0, _extractImageStyleProps.default)(containerStyle, objectFit),
      dimensions: concreteDimensions
    };
  }

  return {
    type: 'loading',
    alt,
    altColor,
    source,
    containerStyle,
    dimensions: initialDimensions
  };
}
//# sourceMappingURL=getIMGState.js.map