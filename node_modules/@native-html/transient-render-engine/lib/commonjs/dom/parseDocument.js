"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDocument;

var _htmlparser = require("htmlparser2");

var _DomHandler = _interopRequireDefault(require("./DomHandler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
function parseDocument(data, options = {}) {
  const handler = new _DomHandler.default(options);
  new _htmlparser.Parser(handler, options).end(data);
  return handler.root;
}
//# sourceMappingURL=parseDocument.js.map