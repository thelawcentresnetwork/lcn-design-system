"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconText = IconText;
exports.LargeIconText = LargeIconText;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _lawCentresDesignSystem = require("law-centres-design-system");
var _react2 = require("@chakra-ui/react");
function IconText(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, (0, _extends2["default"])({
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "0.825rem",
    color: "gray.500",
    mb: "3",
    alignItems: "center"
  }, props), props.icon && /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    flexShrink: 0,
    display: "inline-block",
    textAlign: "center",
    as: "span",
    pt: "1",
    width: "1.75rem",
    height: "1.75rem",
    bg: "orange.50",
    borderRadius: "lg",
    mr: "3"
  }, /*#__PURE__*/_react["default"].createElement(_lawCentresDesignSystem.ChakraAwesome, {
    fontSize: "0.7rem",
    icon: props.icon,
    color: "brand.Orange",
    fixedWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    lineHeight: "1.3",
    fontSize: "0.8rem",
    as: "span"
  }, props.children));
}
function LargeIconText(props) {
  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, (0, _extends2["default"])({
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "0.825rem",
    color: "gray.500",
    mb: "3",
    alignItems: "center",
    direction: "column"
  }, props), props.icon && /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    flexShrink: 0,
    display: "inline-block",
    textAlign: "center",
    as: "span",
    pt: "0.325rem",
    width: "1.9rem",
    height: "1.9rem",
    bg: "orange.50",
    mb: "0.55rem",
    borderRadius: "lg"
  }, /*#__PURE__*/_react["default"].createElement(_lawCentresDesignSystem.ChakraAwesome, {
    fontSize: "0.85rem",
    icon: props.icon,
    color: "brand.Orange",
    fixedWidth: true
  })), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    lineHeight: "1.3",
    fontSize: "0.8rem",
    as: "span"
  }, props.children));
}