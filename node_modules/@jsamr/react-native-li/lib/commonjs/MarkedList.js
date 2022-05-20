"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MarkedList;

var _react = _interopRequireWildcard(require("react"));

var _MarkedListItem = _interopRequireDefault(require("./MarkedListItem"));

var _useMarkedList = _interopRequireDefault(require("./useMarkedList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * A component which given a counter style, wraps each of its children with a
 * {@link MarkedListItem}. The latter prepends the child with a marker
 * box containing a marker string representation for this child index.
 *
 * See {@link https://www.w3.org/TR/css-lists-3/#markers | CSS Lists and Counters Module Level 3, Markers}.
 *
 * @public
 */
function MarkedList({
  children,
  Container = _react.Fragment,
  ...props
}) {
  const normalChildren = _react.Children.toArray(children);

  const listProps = (0, _useMarkedList.default)({ ...props,
    length: normalChildren.length
  });
  return /*#__PURE__*/_react.default.createElement(Container, {}, normalChildren.map((child, index) => {
    return /*#__PURE__*/_react.default.createElement(_MarkedListItem.default, _extends({
      key: index,
      index: index
    }, listProps), child);
  }));
}
//# sourceMappingURL=MarkedList.js.map