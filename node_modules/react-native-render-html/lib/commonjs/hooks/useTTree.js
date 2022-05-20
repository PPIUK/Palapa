"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTTree;

var _react = require("react");

var _ttreeEventsContext = _interopRequireDefault(require("../context/ttreeEventsContext"));

var _SharedPropsProvider = require("../context/SharedPropsProvider");

var _TRenderEngineProvider = require("../TRenderEngineProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useTTreeChangeEffect(ttree) {
  const {
    onTTreeChange
  } = (0, _react.useContext)(_ttreeEventsContext.default);
  const {
    debug
  } = (0, _SharedPropsProvider.useSharedProps)();
  const updateNumber = (0, _react.useRef)(0);
  (0, _react.useEffect)(() => {
    onTTreeChange === null || onTTreeChange === void 0 ? void 0 : onTTreeChange.call(null, ttree);

    if (debug && typeof __DEV__ === 'boolean' && __DEV__) {
      console.info(`Transient Render Tree update ${++updateNumber.current}:\n${ttree.snapshot({
        withNodeIndex: false,
        withStyles: false
      })}`);
    }
  }, [ttree, onTTreeChange, debug]);
}
/**
 * @internal
 */


function useTTree(props) {
  const {
    document
  } = props;
  const trenderEngine = (0, _TRenderEngineProvider.useAmbientTRenderEngine)();
  const ttree = (0, _react.useMemo)(() => typeof document === 'string' ? trenderEngine.buildTTree(document) : trenderEngine.buildTTreeFromDoc(document), [document, trenderEngine]);
  useTTreeChangeEffect(ttree);
  return ttree;
}
//# sourceMappingURL=useTTree.js.map