"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emptyProps = require("./emptyProps");

function mergeProps(props) {
  const filteredProps = props.filter(_emptyProps.isNotEmpty);

  if (filteredProps.length) {
    return Object.assign({}, ...filteredProps);
  }

  return _emptyProps.emptyProps;
}

var _default = mergeProps;
exports.default = _default;
//# sourceMappingURL=mergeProps.js.map