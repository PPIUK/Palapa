"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitBoxModelStyle;

var _pick = _interopRequireDefault(require("ramda/src/pick"));

var _omit = _interopRequireDefault(require("ramda/src/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const borderBoxProps = ['backgroundColor', 'borderBottomColor', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'borderBottomWidth', 'borderLeftColor', 'borderLeftWidth', 'borderRightColor', 'borderRightWidth', 'borderStyle', 'borderTopColor', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderTopWidth', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop'];
const pickBorderBox = (0, _pick.default)(borderBoxProps);
const omitBorderBox = (0, _omit.default)(borderBoxProps);
/**
 * A utility to separate box model styles and other styles. Useful when one wants
 * to wrap a text element in a view to benefit from padding vertical,
 * borders... etc.
 *
 * @param styles - The native styles to split.
 */

function splitBoxModelStyle(style) {
  return {
    boxModelStyle: pickBorderBox(style),
    otherStyle: omitBorderBox(style)
  };
}
//# sourceMappingURL=splitBoxModelStyle.js.map