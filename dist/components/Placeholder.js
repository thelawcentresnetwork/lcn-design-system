"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placeholder;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _lawCentresDesignSystem = require("law-centres-design-system");
function Placeholder(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Box, (0, _extends2["default"])({
    p: "10",
    mt: "0",
    borderRadius: "md",
    bg: "gray.50",
    color: "gray.500",
    textAlign: "center",
    borderWidth: "1px",
    borderColor: "gray.100"
  }, props), /*#__PURE__*/_react["default"].createElement(_lawCentresDesignSystem.ChakraAwesome, {
    color: "gray.200",
    icon: ['fas', 'ellipsis-h'],
    size: "4x"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    mb: "5",
    fontSize: "sm",
    fontFamily: "Poppins, Helvetica",
    fontWeight: "500"
  }, props.message || 'Nothing here yet.', ' '), props.children);
}