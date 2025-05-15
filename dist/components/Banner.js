"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Banner;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["text", "type", "link", "linkText", "icon"];
function Banner(_ref) {
  var text = _ref.text,
    type = _ref.type,
    link = _ref.link,
    linkText = _ref.linkText,
    icon = _ref.icon,
    stackProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.Stack, (0, _extends2["default"])({
    direction: {
      base: 'column',
      sm: 'row'
    },
    justifyContent: "center",
    alignItems: "center",
    py: "3",
    px: {
      base: '3',
      md: '6',
      lg: '8'
    },
    color: "white",
    bg: type == 'alert' ? 'red.500' : 'blue.500'
  }, stackProps), /*#__PURE__*/_react["default"].createElement(_react2.HStack, {
    spacing: "3",
    mr: "2"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, icon), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: "medium",
    marginEnd: "2"
  }, text)), linkText && /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    size: "sm",
    as: "a",
    href: link,
    variant: "outline",
    colorScheme: "white"
  }, linkText));
}