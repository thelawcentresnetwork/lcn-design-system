"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["code"];
function Embed(_ref) {
  var code = _ref.code,
    boxProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.Box, boxProps, (0, _htmlReactParser["default"])(code));
}
var _default = exports["default"] = Embed;