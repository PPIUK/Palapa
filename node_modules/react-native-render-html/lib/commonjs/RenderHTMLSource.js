"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.renderSourcePropTypes = void 0;

var _equals = _interopRequireDefault(require("ramda/src/equals"));

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ttreeEventsContext = _interopRequireDefault(require("./context/ttreeEventsContext"));

var _isUriSource = _interopRequireDefault(require("./helpers/isUriSource"));

var _SourceLoaderUri = _interopRequireDefault(require("./SourceLoaderUri"));

var _SourceLoaderInline = _interopRequireDefault(require("./SourceLoaderInline"));

var _SourceLoaderDom = _interopRequireDefault(require("./SourceLoaderDom"));

var _debugMessages = _interopRequireDefault(require("./debugMessages"));

var _contentWidthContext = _interopRequireDefault(require("./context/contentWidthContext"));

var _isDomSource = _interopRequireDefault(require("./helpers/isDomSource"));

var _useProfiler = _interopRequireDefault(require("./hooks/useProfiler"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const renderSourcePropTypes = {
  source: _propTypes.default.oneOfType([_propTypes.default.shape({
    html: _propTypes.default.string.isRequired,
    baseUrl: _propTypes.default.string
  }), _propTypes.default.shape({
    dom: _propTypes.default.object.isRequired,
    baseUrl: _propTypes.default.string
  }), _propTypes.default.shape({
    uri: _propTypes.default.string.isRequired,
    method: _propTypes.default.string,
    body: _propTypes.default.any,
    headers: _propTypes.default.object
  })]),
  onTTreeChange: _propTypes.default.func,
  onHTMLLoaded: _propTypes.default.func,
  onDocumentMetadataLoaded: _propTypes.default.func,
  contentWidth: _propTypes.default.number
};
exports.renderSourcePropTypes = renderSourcePropTypes;

function isEmptySource(source) {
  return !source || typeof source.uri !== 'string' && typeof source.html !== 'string' && !source.dom;
}

function RawSourceLoader({
  source,
  ...props
}) {
  if (isEmptySource(source)) {
    /* istanbul ignore next */
    if (typeof __DEV__ === 'boolean' && __DEV__) {
      console.warn(_debugMessages.default.noSource);
    }

    return null;
  }

  if ((0, _isUriSource.default)(source)) {
    return /*#__PURE__*/_react.default.createElement(_SourceLoaderUri.default, {
      source,
      ...props
    });
  }

  if ((0, _isDomSource.default)(source)) {
    return /*#__PURE__*/_react.default.createElement(_SourceLoaderDom.default, {
      source,
      ...props
    });
  }

  return /*#__PURE__*/_react.default.createElement(_SourceLoaderInline.default, {
    source,
    ...props
  });
} // check if for each key of two objects, the values are equal


function shallowEqual(prop1, prop2) {
  if (!(0, _equals.default)(Object.keys(prop1), Object.keys(prop2))) {
    return false;
  }

  for (const key in prop1) {
    if (prop1[key] !== prop2[key]) {
      return false;
    }
  }

  return true;
}
/**
 * A React component to render HTML snippets.
 *
 * @remarks This component is useful when you have to load dozens of HTML
 * snippets with the same config. Performance is expected to improve in such
 * scenarios.
 *
 * @warning This component requires to have {@link TRenderEngineProvider}
 * and {@link RenderHTMLConfigProvider} as parents.
 */


const RenderHTMLSource = /*#__PURE__*/(0, _react.memo)(function RenderHtmlSource({
  onDocumentMetadataLoaded,
  onTTreeChange,
  contentWidth,
  ...props
}) {
  const profile = (0, _useProfiler.default)({
    prop: 'onDocumentMetadataLoaded or onTTreeChange'
  });
  const ttreeEvents = (0, _react.useMemo)(() => {
    typeof __DEV__ === 'boolean' && __DEV__ && profile();
    return {
      onDocumentMetadataLoaded,
      onTTreeChange
    };
  }, [onDocumentMetadataLoaded, onTTreeChange, profile]);

  if (typeof __DEV__ === 'boolean' && __DEV__) {
    if (!(typeof contentWidth === 'number')) {
      console.warn(_debugMessages.default.contentWidth);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_ttreeEventsContext.default.Provider, {
    value: ttreeEvents
  }, /*#__PURE__*/_react.default.createElement(_contentWidthContext.default.Provider, {
    value: contentWidth || _reactNative.Dimensions.get('window').width
  }, /*#__PURE__*/_react.default.createElement(RawSourceLoader, props)));
}, ({
  source: prevSource,
  ...prev
}, {
  source: currSource,
  ...curr
}) => {
  return shallowEqual(prevSource, currSource) && shallowEqual(prev, curr);
});
/**
 * @ignore
 */

RenderHTMLSource.propTypes = renderSourcePropTypes;
var _default = RenderHTMLSource;
exports.default = _default;
//# sourceMappingURL=RenderHTMLSource.js.map