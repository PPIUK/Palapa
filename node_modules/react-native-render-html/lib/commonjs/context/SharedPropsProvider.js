"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSharedProps = useSharedProps;
exports.useDefaultContainerProps = useDefaultContainerProps;
exports.useComputeMaxWidthForTag = useComputeMaxWidthForTag;
exports.default = SharedPropsProvider;

var _react = _interopRequireWildcard(require("react"));

var _defaultListStyleSpecs = _interopRequireDefault(require("../elements/defaultListStyleSpecs"));

var _selectSharedProps = _interopRequireDefault(require("../helpers/selectSharedProps"));

var _defaultSharedProps = _interopRequireDefault(require("./defaultSharedProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SharedPropsContext = /*#__PURE__*/_react.default.createContext(_defaultSharedProps.default);
/**
 * Use shared props. See {@link RenderHTMLSharedProps}.
 *
 * @public
 */


function useSharedProps() {
  return _react.default.useContext(SharedPropsContext);
}
/**
 * @internal
 */


function useDefaultContainerProps() {
  const sharedProps = useSharedProps();
  return {
    viewProps: { ..._defaultSharedProps.default.defaultViewProps,
      ...sharedProps.defaultViewProps
    },
    textProps: { ..._defaultSharedProps.default.defaultTextProps,
      ...sharedProps.defaultTextProps
    }
  };
}
/**
 * Compute max width for a given tag. Uses
 * {@link RenderHTMLProps.computeEmbeddedMaxWidth}
 * and {@link RenderHTMLProps.contentWidth} under the hood.
 *
 * @param tagName - The tag to target.
 *
 * @public
 */


function useComputeMaxWidthForTag(tagName) {
  const {
    computeEmbeddedMaxWidth
  } = useSharedProps();
  return (0, _react.useCallback)(cw => {
    return computeEmbeddedMaxWidth(cw, tagName);
  }, [computeEmbeddedMaxWidth, tagName]);
}
/**
 * @internal
 */


function SharedPropsProvider(props) {
  const memoizedSharedProps = (0, _react.useMemo)(() => ({ ...(0, _selectSharedProps.default)(props),
    customListStyleSpecs: { ..._defaultListStyleSpecs.default,
      ...props.customListStyleSpecs
    }
  }), // eslint-disable-next-line react-hooks/exhaustive-deps
  Object.values((0, _selectSharedProps.default)(props)));
  return /*#__PURE__*/_react.default.createElement(SharedPropsContext.Provider, {
    value: memoizedSharedProps
  }, props.children);
}
//# sourceMappingURL=SharedPropsProvider.js.map