"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultAOnPress = defaultAOnPress;
exports.default = void 0;

var _reactNative = require("react-native");

async function defaultAOnPress(_e, href) {
  try {
    await _reactNative.Linking.openURL(href);
  } catch (e) {
    console.warn(`Could not open URL "${href}".`, e);
  }

  return null;
}

const defaultRendererProps = {
  img: {
    initialDimensions: {
      height: 50,
      width: 50
    },
    enableExperimentalPercentWidth: false
  },
  a: {
    onPress: defaultAOnPress
  },
  ol: {},
  ul: {}
};
var _default = defaultRendererProps;
exports.default = _default;
//# sourceMappingURL=defaultRendererProps.js.map