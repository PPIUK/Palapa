"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _getNativePropsForTNode = _interopRequireDefault(require("./helpers/getNativePropsForTNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderTextualContent = props => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, (0, _getNativePropsForTNode.default)(props));
};

var _default = renderTextualContent;
exports.default = _default;
//# sourceMappingURL=renderTextualContent.js.map