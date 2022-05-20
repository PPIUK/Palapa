"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _debugMessages = _interopRequireDefault(require("./debugMessages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RenderHTMLDebug = function RenderHTMLDebug(props) {
  if (typeof __DEV__ === 'boolean' && __DEV__) {
    if (typeof props.contentWidth !== 'number') {
      console.warn(_debugMessages.default.contentWidth);
    }

    if ('html' in props) {
      console.warn(_debugMessages.default.outdatedHtmlProp);
    }

    if ('uri' in props) {
      console.warn(_debugMessages.default.outdatedUriProp);
    }

    if ('listsPrefixesRenderers' in props) {
      console.warn(_debugMessages.default.outdatedListPrefixRenderersProps);
    }

    if ('imagesInitialDimensions' in props) {
      console.warn(_debugMessages.default.outdatedImagesDimensions);
    }

    if ('onLinkPress' in props) {
      console.warn(_debugMessages.default.outdatedOnLinkPressProp);
    }

    if ('enableExperimentalPercentWidth' in props) {
      console.warn(_debugMessages.default.outdatedEnableExperimentalPercentWidth);
    }

    if ('ignoreNodesFunction' in props) {
      console.warn(_debugMessages.default.outdatedIgnoreNodesFunction);
    }

    if ('alterNode' in props) {
      console.warn(_debugMessages.default.outdatedAlterNode);
    }

    if ('alterChildren' in props) {
      console.warn(_debugMessages.default.outdatedAlterChildren);
    }

    if ('alterData' in props) {
      console.warn(_debugMessages.default.outdatedAlterData);
    }

    if ('computeImagesMaxWidth' in props) {
      console.warn(_debugMessages.default.outdatedComputeImagesMaxWidth);
    }

    if ('triggerTREInvalidationPropNames' in props) {
      console.warn(_debugMessages.default.outdatedTriggerTREInvalidation);
    }

    if (Array.isArray(props.allowedStyles)) {
      props.allowedStyles.forEach(s => {
        if (s.indexOf('-') > -1) {
          console.warn(`Style property '${s}' of 'allowedStyles' prop array must be camelCased.`);
        }
      });
    }

    if (Array.isArray(props.ignoredStyles)) {
      props.ignoredStyles.forEach(s => {
        if (s.indexOf('-') > -1) {
          console.warn(`Style property '${s}' of 'ignoredStyles' prop array must be camelCased.`);
        }
      });
    }
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, props.children);
};

var _default = RenderHTMLDebug;
exports.default = _default;
//# sourceMappingURL=RenderHTMLDebug.js.map