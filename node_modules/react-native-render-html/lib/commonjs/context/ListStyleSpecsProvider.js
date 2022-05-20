"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListStyleSpecs = useListStyleSpecs;
exports.default = ListStyleSpecsProvider;

var _ramda = require("ramda");

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _defaultListStyleSpecs = _interopRequireDefault(require("../elements/defaultListStyleSpecs"));

var _SharedPropsProvider = require("./SharedPropsProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react-native/no-inline-styles */
const listStyleSpecsContext = /*#__PURE__*/(0, _react.createContext)(_defaultListStyleSpecs.default);

function useListStyleSpecs() {
  return (0, _react.useContext)(listStyleSpecsContext);
}

function createSymbolicMarkerRenderer({
  Component,
  counterStyleRenderer
}) {
  const prefix = counterStyleRenderer.renderPrefix();
  const suffix = counterStyleRenderer.renderSuffix();
  return ({
    style,
    markerTextStyle,
    counterIndex,
    rtlMarkerReversed
  }) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [style, {
        flexDirection: rtlMarkerReversed ? 'row-reverse' : 'row',
        justifyContent: 'flex-end'
      }]
    }, !!prefix && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: markerTextStyle
    }, prefix), /*#__PURE__*/_react.default.createElement(Component, { ...markerTextStyle,
      index: counterIndex
    }), !!suffix && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: markerTextStyle
    }, suffix));
  };
}

const makeMarkerRenderers = (0, _ramda.mapObjIndexed)(value => {
  if (value.type === 'unitary') {
    return { ...value,
      renderMarker: createSymbolicMarkerRenderer(value)
    };
  }

  return value;
});

function ListStyleSpecsProvider({
  children
}) {
  const {
    customListStyleSpecs
  } = (0, _SharedPropsProvider.useSharedProps)();
  const mergedListStyleSpecs = (0, _react.useMemo)(() => {
    return makeMarkerRenderers(customListStyleSpecs != null ? { ..._defaultListStyleSpecs.default,
      ...customListStyleSpecs
    } : _defaultListStyleSpecs.default);
  }, [customListStyleSpecs]);
  return /*#__PURE__*/_react.default.createElement(listStyleSpecsContext.Provider, {
    value: mergedListStyleSpecs
  }, children);
}
//# sourceMappingURL=ListStyleSpecsProvider.js.map