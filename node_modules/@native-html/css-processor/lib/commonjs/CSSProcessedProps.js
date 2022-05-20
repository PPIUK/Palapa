"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSProcessedProps = void 0;

var _emptyProps = require("./emptyProps");

var _mergeProps = _interopRequireDefault(require("./mergeProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const compatCategories = ['native', 'web'];
const displayCategories = ['text', 'block'];
const propagationCategories = ['flow', 'retain'];
/**
 * An object representing categorized style props. Props are categorized
 * depending on their inheritability (flow, retain), target (block, text)
 * and (react) native support (native, web).
 */

class CSSProcessedProps {
  constructor() {
    _defineProperty(this, "native", void 0);

    _defineProperty(this, "web", void 0);

    this.native = this.newCompatCategory();
    this.web = this.newCompatCategory();
  }

  newCompatCategory() {
    return {
      block: {
        retain: _emptyProps.emptyProps,
        flow: _emptyProps.emptyProps
      },
      text: {
        retain: _emptyProps.emptyProps,
        flow: _emptyProps.emptyProps
      }
    };
  }

  withProperty(propertyName, propertyValue, {
    compatCategory,
    displayCategory,
    propagationCategory
  }) {
    if (propertyValue !== null) {
      const target = this[compatCategory][displayCategory][propagationCategory];

      if (!(0, _emptyProps.isNotEmpty)(target)) {
        this[compatCategory][displayCategory][propagationCategory] = {};
      } //@ts-ignore


      this[compatCategory][displayCategory][propagationCategory][propertyName] = propertyValue;
    }

    return this;
  }
  /**
   * Create a new processed prop object by merging the 'overriders' parameters
   * into this object.
   *
   * @param overriders - The processed props which will be merged into this
   * processed prop. Rightmost props will override leftmost props.
   */


  merge(...overriders) {
    const filtered = overriders.filter(_emptyProps.isNotEmpty);
    const next = new CSSProcessedProps();

    for (const compat of compatCategories) {
      for (const display of displayCategories) {
        for (const propagation of propagationCategories) {
          next[compat][display][propagation] = (0, _mergeProps.default)([this[compat][display][propagation], ...filtered.map(o => o[compat][display][propagation])]);
        }
      }
    }

    return next;
  }

  static new() {
    return new CSSProcessedProps();
  }

}

exports.CSSProcessedProps = CSSProcessedProps;
//# sourceMappingURL=CSSProcessedProps.js.map