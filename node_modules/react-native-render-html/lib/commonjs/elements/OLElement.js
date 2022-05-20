"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OLElement;

var _react = _interopRequireDefault(require("react"));

var _ListElement = _interopRequireDefault(require("./ListElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OLElement(props) {
  return /*#__PURE__*/_react.default.createElement(_ListElement.default, { ...props,
    listType: 'ol'
  });
}
//# sourceMappingURL=OLElement.js.map