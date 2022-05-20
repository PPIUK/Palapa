"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pick = _interopRequireDefault(require("ramda/src/pick"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const extractProps = (0, _pick.default)(['resizeMode', 'tintColor', 'overlayColor']);

function mapObjectFit(objectFit) {
  let resizeMode;

  switch (objectFit) {
    case 'contain':
    case 'cover':
      resizeMode = objectFit;
      break;

    case 'fill':
      resizeMode = 'stretch';
      break;

    case 'scale-down':
      resizeMode = 'contain';
      break;

    default:
      return null;
  }

  return {
    resizeMode
  };
}

function extractImageStyleProps(style, objectFit) {
  const resizeModeFromFit = objectFit ? mapObjectFit(objectFit) : null;
  return { ...extractProps(style),
    ...resizeModeFromFit
  };
}

var _default = extractImageStyleProps;
exports.default = _default;
//# sourceMappingURL=extractImageStyleProps.js.map