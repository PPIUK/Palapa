"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pickBy = _interopRequireDefault(require("ramda/src/pickBy"));

var _pick = _interopRequireDefault(require("ramda/src/pick"));

var _pipe = _interopRequireDefault(require("ramda/src/pipe"));

var _mergeRight = _interopRequireDefault(require("ramda/src/mergeRight"));

var _defaultSharedProps = _interopRequireDefault(require("../context/defaultSharedProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const selectSharedProps = (0, _pipe.default)((0, _pick.default)(Object.keys(_defaultSharedProps.default)), (0, _pickBy.default)(val => val != null), (0, _mergeRight.default)(_defaultSharedProps.default));
var _default = selectSharedProps;
exports.default = _default;
//# sourceMappingURL=selectSharedProps.js.map