"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTNodeChildrenRenderer = useTNodeChildrenRenderer;
exports.useTChildrenRenderer = useTChildrenRenderer;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This context allows dependency injection to avoid circular dependencies.
 */
const TChildrenRenderersContext = /*#__PURE__*/_react.default.createContext({
  TChildrenRenderer: null,
  TNodeChildrenRenderer: null
});

function useTNodeChildrenRenderer() {
  return _react.default.useContext(TChildrenRenderersContext).TNodeChildrenRenderer;
}

function useTChildrenRenderer() {
  return _react.default.useContext(TChildrenRenderersContext).TChildrenRenderer;
}

var _default = TChildrenRenderersContext;
exports.default = _default;
//# sourceMappingURL=TChildrenRendererContext.js.map