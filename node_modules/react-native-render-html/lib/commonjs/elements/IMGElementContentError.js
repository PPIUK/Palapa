"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IMGElementContentError;

var _react = _interopRequireDefault(require("react"));

var _IMGElementContentAlt = _interopRequireDefault(require("./IMGElementContentAlt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Default error view for the {@link IMGElement} component.
 */
function IMGElementContentError(props) {
  return /*#__PURE__*/_react.default.createElement(_IMGElementContentAlt.default, _extends({}, props, {
    testID: "image-error"
  }));
}
//# sourceMappingURL=IMGElementContentError.js.map