"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _counterStyle = _interopRequireDefault(require("@jsamr/counter-style"));

var _decimal = _interopRequireDefault(require("@jsamr/counter-style/presets/decimal"));

var _decimalLeadingZero = _interopRequireDefault(require("@jsamr/counter-style/presets/decimalLeadingZero"));

var _lowerRoman = _interopRequireDefault(require("@jsamr/counter-style/presets/lowerRoman"));

var _lowerAlpha = _interopRequireDefault(require("@jsamr/counter-style/presets/lowerAlpha"));

var _lowerGreek = _interopRequireDefault(require("@jsamr/counter-style/presets/lowerGreek"));

var _upperAlpha = _interopRequireDefault(require("@jsamr/counter-style/presets/upperAlpha"));

var _upperRoman = _interopRequireDefault(require("@jsamr/counter-style/presets/upperRoman"));

var _DisclosureClosedSymbolRenderer = _interopRequireDefault(require("./symbolic/DisclosureClosedSymbolRenderer"));

var _DisclosureOpenSymbolRenderer = _interopRequireDefault(require("./symbolic/DisclosureOpenSymbolRenderer"));

var _CircleSymbolRenderer = _interopRequireDefault(require("./symbolic/CircleSymbolRenderer"));

var _DiscSymbolRenderer = _interopRequireDefault(require("./symbolic/DiscSymbolRenderer"));

var _SquareSymbolRenderer = _interopRequireDefault(require("./symbolic/SquareSymbolRenderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const unitaryRenderer = _counterStyle.default.cyclic('*').withSuffix(' ');

const lowerAlphaSpec = {
  type: 'textual',
  counterStyleRenderer: _lowerAlpha.default
};
const upperAlphaSpec = {
  type: 'textual',
  counterStyleRenderer: _upperAlpha.default
};
/**
 * Default list style specs supported by this library.
 *
 * @public
 */

const defaultListStyleSpecs = {
  'decimal-leading-zero': {
    type: 'textual',
    counterStyleRenderer: _decimalLeadingZero.default
  },
  'disclosure-closed': {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: _DisclosureClosedSymbolRenderer.default
  },
  'disclosure-open': {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: _DisclosureOpenSymbolRenderer.default
  },
  'lower-alpha': lowerAlphaSpec,
  'lower-greek': {
    type: 'textual',
    counterStyleRenderer: _lowerGreek.default
  },
  'lower-latin': lowerAlphaSpec,
  'lower-roman': {
    type: 'textual',
    counterStyleRenderer: _lowerRoman.default
  },
  'upper-alpha': upperAlphaSpec,
  'upper-latin': upperAlphaSpec,
  'upper-roman': {
    type: 'textual',
    counterStyleRenderer: _upperRoman.default
  },
  circle: {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: _CircleSymbolRenderer.default
  },
  decimal: {
    type: 'textual',
    counterStyleRenderer: _decimal.default
  },
  disc: {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: _DiscSymbolRenderer.default
  },
  none: {
    counterStyleRenderer: _counterStyle.default.symbolic('').withSuffix(null),
    type: 'unitary',
    Component: () => null
  },
  square: {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: _SquareSymbolRenderer.default
  }
};
var _default = defaultListStyleSpecs;
exports.default = _default;
//# sourceMappingURL=defaultListStyleSpecs.js.map