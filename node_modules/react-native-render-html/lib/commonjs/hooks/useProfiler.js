"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _identity = _interopRequireDefault(require("ramda/src/identity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useProfiler = typeof __DEV__ === 'boolean' && __DEV__ && typeof performance === 'object' ? function useProfiler({
  name,
  prop
}) {
  const lastUpdate = (0, _react.useRef)(0);
  const profile = (0, _react.useCallback)(function onUpdate() {
    const now = performance.now();
    const diff = now - lastUpdate.current;

    if (diff < 60) {
      console.warn(`You seem to update ${prop ? `the ${prop} prop(s)` : 'props'} of the "${name ? name : 'RenderHTML'}" component in short periods of time, causing costly tree rerenders (last update was ${diff.toFixed(2)}ms ago). See https://stackoverflow.com/q/68966120/2779871`);
    }

    lastUpdate.current = now;
  }, [name, prop]);
  return profile;
} :
/* istanbul ignore next */
function useProfiler() {
  return _identity.default;
};
var _default = useProfiler;
exports.default = _default;
//# sourceMappingURL=useProfiler.js.map