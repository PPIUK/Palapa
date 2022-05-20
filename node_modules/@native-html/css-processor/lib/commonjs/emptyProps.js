"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNotEmpty = isNotEmpty;
exports.emptyProps = void 0;
const emptySymbol = Symbol('emptyProps');

const emptyProps = function () {
  let obj = {};
  Object.defineProperty(obj, '$$empty', {
    value: emptySymbol,
    enumerable: false
  });
  obj = Object.freeze(obj);
  return obj;
}();

exports.emptyProps = emptyProps;

function isNotEmpty(p) {
  //@ts-ignore
  return !!p && p.$$empty !== emptySymbol;
}
//# sourceMappingURL=emptyProps.js.map