"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = domNodeToHTMLString;

var _stringifyEntities = _interopRequireDefault(require("stringify-entities"));

var _transientRenderEngine = require("@native-html/transient-render-engine");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderOpeningTag(tag, attributes) {
  const strAttributes = [];
  Object.keys(attributes).forEach(key => {
    strAttributes.push(`${key}="${(0, _stringifyEntities.default)(`${attributes[key]}`)}"`);
  });
  return `<${tag}${strAttributes.length ? ' ' : ''}${strAttributes.join(' ')}>`;
}
/**
 * Convert a DOM node to its HTML representation.
 *
 * @param root - The root to stringify.
 * @param reporter - An optional function which will receive every
 * parsed node as 1st argument, the depth as 2d argument and the converted html
 * as 3d argument.
 */


function domNodeToHTMLString(root, reporter, depth = 0) {
  let html = '';

  if ((0, _transientRenderEngine.isDomElement)(root)) {
    const strChildren = root.children.reduce((prev, curr) => {
      const convertedNode = domNodeToHTMLString(curr, reporter, depth + 1);
      return `${prev}${convertedNode}`;
    }, '');
    html = `${renderOpeningTag(root.tagName, root.attribs)}${strChildren}</${root.tagName}>`;
  } else if ((0, _transientRenderEngine.isDomText)(root)) {
    const text = (0, _stringifyEntities.default)(root.data);
    html = text;
  }

  typeof reporter === 'function' && reporter(root, depth, html);
  return html;
}
/**
 * @public
 */
//# sourceMappingURL=domNodeToHTMLString.js.map