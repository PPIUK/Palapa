"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useContentWidth;

var _react = require("react");

var _contentWidthContext = _interopRequireDefault(require("../context/contentWidthContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A hook to get access to the ambient `contentWidth`.
 *
 * @returns The contentWidth available in context.
 *
 * @public
 */
function useContentWidth() {
  return (0, _react.useContext)(_contentWidthContext.default);
}
//# sourceMappingURL=useContentWidth.js.map