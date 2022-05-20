"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRendererProps = useRendererProps;
exports.default = RenderersPropsProvider;

var _react = _interopRequireWildcard(require("react"));

var _mergeDeepRight = _interopRequireDefault(require("ramda/src/mergeDeepRight"));

var _defaultRendererProps = _interopRequireDefault(require("./defaultRendererProps"));

var _useProfiler = _interopRequireDefault(require("../hooks/useProfiler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const RenderersPropsContext = /*#__PURE__*/_react.default.createContext(_defaultRendererProps.default);
/**
 * Consume props from {@link RenderHTMLProps.renderersProps}.
 *
 * @param tagName - The name of the element.
 * @typeParam K - The type literal corresponding to the element name.
 * @returns props for this renderer.
 *
 * @public
 */


function useRendererProps(tagName) {
  const userProps = _react.default.useContext(RenderersPropsContext);

  return userProps[tagName];
}
/**
 * @internal
 */


function RenderersPropsProvider(props) {
  const profile = (0, _useProfiler.default)({
    prop: 'renderersProps'
  });
  const mergedRenderersProps = (0, _react.useMemo)(() => {
    typeof __DEV__ === 'boolean' && __DEV__ && profile();
    return (0, _mergeDeepRight.default)(_defaultRendererProps.default, props.renderersProps || {});
  }, [props.renderersProps, profile]);
  return /*#__PURE__*/_react.default.createElement(RenderersPropsContext.Provider, {
    value: mergedRenderersProps
  }, props.children);
}
//# sourceMappingURL=RenderersPropsProvider.js.map