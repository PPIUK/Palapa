"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SourceLoaderUri;

var _react = _interopRequireWildcard(require("react"));

var _RenderTTree = _interopRequireDefault(require("./RenderTTree"));

var _sourceLoaderContext = _interopRequireDefault(require("./context/sourceLoaderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ERROR_STATE = {
  error: true,
  resolvedHTML: null
};

async function loadHTMLResource(uri, {
  body,
  headers,
  method
}) {
  const response = await fetch(uri, {
    body,
    headers,
    method
  });

  if (response.ok) {
    const html = await response.text();
    return {
      resolvedHTML: html,
      error: false
    };
  }

  return ERROR_STATE;
}

function useUriSourceLoader({
  source,
  onHTMLLoaded
}) {
  const [loadState, setState] = (0, _react.useState)({
    error: false,
    resolvedHTML: null
  });
  const {
    error
  } = loadState; // Effect to reload on uri changes

  (0, _react.useEffect)(() => {
    let cancelled = false;

    if (!error) {
      setState({
        error: false,
        resolvedHTML: null
      });
      loadHTMLResource(source.uri, {
        body: source.body,
        headers: source.headers,
        method: source.method
      }).then(state => {
        !cancelled && setState(state);
      }).catch(() => {
        !cancelled && setState(ERROR_STATE);
      });
    }

    return () => {
      cancelled = true;
    };
  }, [error, source.uri, source.body, source.headers, source.method]);
  (0, _react.useEffect)(() => {
    loadState.resolvedHTML && (onHTMLLoaded === null || onHTMLLoaded === void 0 ? void 0 : onHTMLLoaded.call(null, loadState.resolvedHTML));
  }, [loadState.resolvedHTML, onHTMLLoaded]);
  return loadState;
}

function SourceLoaderUri(props) {
  const {
    remoteErrorView,
    remoteLoadingView
  } = (0, _react.useContext)(_sourceLoaderContext.default);
  const {
    resolvedHTML,
    error
  } = useUriSourceLoader(props);

  if (error) {
    return remoteErrorView.call(null, props.source);
  }

  if (resolvedHTML === null) {
    return remoteLoadingView.call(null, props.source);
  }

  return /*#__PURE__*/_react.default.createElement(_RenderTTree.default, {
    document: resolvedHTML,
    baseUrl: props.source.uri
  });
}
//# sourceMappingURL=SourceLoaderUri.js.map