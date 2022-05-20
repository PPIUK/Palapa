"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const markersPrototype = {
  anchor: false,
  edits: 'none',
  lang: 'en',
  olNestLevel: -1,
  ulNestLevel: -1,
  direction: 'ltr',

  extend() {
    return Object.create(this);
  },

  toString() {
    let print = 'Markers {\n';

    for (const key in this) {
      //@ts-ignore
      const val = this[key];

      if (typeof val !== 'function') {
        print += `  ${key}: ${JSON.stringify(val)}\n`;
      }
    }

    return print + '}';
  }

};
var _default = markersPrototype;
exports.default = _default;
//# sourceMappingURL=markersPrototype.js.map