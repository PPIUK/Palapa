"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TStyles = void 0;

var _cssProcessor = require("@native-html/css-processor");

var _isNil = _interopRequireDefault(require("ramda/src/isNil"));

var _not = _interopRequireDefault(require("ramda/src/not"));

var _compose = _interopRequireDefault(require("ramda/src/compose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const notNil = (0, _compose.default)(_not.default, _isNil.default);
/**
 * A merge properties from left to right.
 *
 * @param child
 * @param parent
 */

function inheritProperties(...properties) {
  const realProperties = properties.filter(notNil);

  if (realProperties.length === 1) {
    return realProperties[0];
  }

  if (Object.keys(realProperties[0]).length === 0) {
    return realProperties[1];
  }

  return realProperties.reduce((prev, curr) => ({ ...prev,
    ...curr
  }), Object.prototype);
}
/**
 * A record of styles organized in logical chunks:
 *
 * - wether they are supported in React Native (native) and others (web).
 * - wether they target native Views (block) or Text (text).
 * - wether they are inherited by this node's children (flow) or not (retain).
 *
 * @public
 */


class TStyles {
  constructor(ownProcessedProps, parentStyles) {
    _defineProperty(this, "nativeTextFlow", void 0);

    _defineProperty(this, "nativeBlockFlow", void 0);

    _defineProperty(this, "nativeTextRet", void 0);

    _defineProperty(this, "nativeBlockRet", void 0);

    _defineProperty(this, "webTextFlow", void 0);

    _defineProperty(this, "webBlockRet", void 0);

    this.nativeTextFlow = inheritProperties(parentStyles === null || parentStyles === void 0 ? void 0 : parentStyles.nativeTextFlow, ownProcessedProps.native.text.flow);
    this.nativeBlockFlow = inheritProperties(parentStyles === null || parentStyles === void 0 ? void 0 : parentStyles.nativeBlockFlow, ownProcessedProps.native.block.flow);
    this.webTextFlow = inheritProperties(parentStyles === null || parentStyles === void 0 ? void 0 : parentStyles.webTextFlow, ownProcessedProps.web.text.flow); // In theory, we shouldn't merge those properties. However, these
    // properties being textDecoration*, we actually want children nodes to
    // inherit from them. A cleaner solution would be to to let each TNode
    // handle its merging logic, because only TPhrasing and TText nodes would
    // need to merge these.

    this.nativeTextRet = inheritProperties(parentStyles === null || parentStyles === void 0 ? void 0 : parentStyles.nativeTextRet, ownProcessedProps.native.text.retain);
    this.nativeBlockRet = ownProcessedProps.native.block.retain;
    this.webBlockRet = ownProcessedProps.web.block.retain;
  }

  static empty() {
    return new TStyles(new _cssProcessor.CSSProcessedProps());
  }

}

exports.TStyles = TStyles;
//# sourceMappingURL=TStyles.js.map