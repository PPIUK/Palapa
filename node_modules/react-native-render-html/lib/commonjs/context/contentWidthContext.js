"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const contentWidthContext = /*#__PURE__*/_react.default.createContext(_reactNative.Dimensions.get('window').width);

var _default = contentWidthContext;
exports.default = _default;
//# sourceMappingURL=contentWidthContext.js.map