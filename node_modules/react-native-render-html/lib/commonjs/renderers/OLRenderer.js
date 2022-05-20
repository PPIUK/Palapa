"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOLElementProps = useOLElementProps;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _OLElement = _interopRequireDefault(require("../elements/OLElement"));

var _RenderersPropsProvider = require("../context/RenderersPropsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFallbackListStyleTypeFromNestLevel(nestLevel) {
  switch (nestLevel % 3) {
    case 0:
      return 'decimal';

    /* istanbul ignore next */

    case 1:
      return 'upper-alpha';

    /* istanbul ignore next */

    default:
      return 'lower-alpha';
  }
}

function useOLElementProps(props) {
  const config = (0, _RenderersPropsProvider.useRendererProps)('ol');
  return { ...props,
    getFallbackListStyleTypeFromNestLevel,
    ...config
  };
}

const OLRenderer = props => {
  return /*#__PURE__*/_react.default.createElement(_OLElement.default, useOLElementProps(props));
};

var _default = OLRenderer;
exports.default = _default;
//# sourceMappingURL=OLRenderer.js.map