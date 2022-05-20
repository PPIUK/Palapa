"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ULElement;

var _react = _interopRequireDefault(require("react"));

var _ListElement = _interopRequireDefault(require("./ListElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ULElement(props) {
  return /*#__PURE__*/_react.default.createElement(_ListElement.default, { ...props,
    listType: 'ul'
  });
}
//# sourceMappingURL=ULElement.js.map