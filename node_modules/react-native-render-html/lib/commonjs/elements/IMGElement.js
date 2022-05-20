"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useIMGElementState = _interopRequireDefault(require("./useIMGElementState"));

var _IMGElementContentSuccess = _interopRequireDefault(require("./IMGElementContentSuccess"));

var _IMGElementContainer = _interopRequireDefault(require("./IMGElementContainer"));

var _IMGElementContentLoading = _interopRequireDefault(require("./IMGElementContentLoading"));

var _IMGElementContentError = _interopRequireDefault(require("./IMGElementContentError"));

var _defaultInitialImageDimensions = _interopRequireDefault(require("./defaultInitialImageDimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function identity(arg) {
  return arg;
}
/**
 * A component to render images based on an internal loading state.
 *
 * @remarks This component will attempt to draw a box of paint dimensions
 * before retrieving the physical dimensions of the image to avoid layout
 * shifts. See also {@link useIMGElementState}, {@link IMGElementContainer},
 * {@link IMGElementContentSuccess}, {@link IMGElementContentLoading}
 * and {@link IMGElementContentError} for customization.
 */


function IMGElement(props) {
  const state = (0, _useIMGElementState.default)(props);
  let content;

  if (state.type === 'success') {
    content = /*#__PURE__*/_react.default.createElement(_IMGElementContentSuccess.default, state);
  } else if (state.type === 'loading') {
    content = /*#__PURE__*/_react.default.createElement(_IMGElementContentLoading.default, state);
  } else {
    content = /*#__PURE__*/_react.default.createElement(_IMGElementContentError.default, state);
  }

  return /*#__PURE__*/_react.default.createElement(_IMGElementContainer.default, _extends({
    testID: props.testID
  }, props.containerProps, {
    onPress: props.onPress,
    style: state.containerStyle
  }), content);
}

const imgDimensionsType = _propTypes.default.shape({
  width: _propTypes.default.number,
  height: _propTypes.default.number
});

const propTypes = {
  source: _propTypes.default.object.isRequired,
  alt: _propTypes.default.string,
  altColor: _propTypes.default.string,
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  computeMaxWidth: _propTypes.default.func.isRequired,
  contentWidth: _propTypes.default.number,
  enableExperimentalPercentWidth: _propTypes.default.bool,
  initialDimensions: imgDimensionsType,
  onPress: _propTypes.default.func,
  testID: _propTypes.default.string,
  objectFit: _propTypes.default.string,
  cachedNaturalDimensions: imgDimensionsType,
  containerProps: _propTypes.default.object
};
/**
 * @ignore
 */

IMGElement.propTypes = propTypes;
/**
 * @ignore
 */

IMGElement.defaultProps = {
  enableExperimentalPercentWidth: false,
  computeMaxWidth: identity,
  imagesInitialDimensions: _defaultInitialImageDimensions.default,
  style: {}
};
var _default = IMGElement;
exports.default = _default;
//# sourceMappingURL=IMGElement.js.map