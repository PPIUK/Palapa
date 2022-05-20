"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useULElementProps = useULElementProps;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ULElement = _interopRequireDefault(require("../elements/ULElement"));

var _RenderersPropsProvider = require("../context/RenderersPropsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFallbackListStyleTypeFromNestLevel(nestLevel) {
  switch (nestLevel % 3) {
    case 0:
      return 'disc';

    /* istanbul ignore next */

    case 1:
      return 'circle';

    /* istanbul ignore next */

    default:
      return 'square';
  }
}

function useULElementProps(props) {
  const config = (0, _RenderersPropsProvider.useRendererProps)('ul');
  return { ...props,
    getFallbackListStyleTypeFromNestLevel,
    ...config
  };
}

const ULRenderer = props => {
  return /*#__PURE__*/_react.default.createElement(_ULElement.default, useULElementProps(props));
};

var _default = ULRenderer;
exports.default = _default;
//# sourceMappingURL=ULRenderer.js.map