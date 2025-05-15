"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["quote", "icon", "citation", "citationTitle", "image", "children", "context"];
function Quote(_ref) {
  var quote = _ref.quote,
    icon = _ref.icon,
    citation = _ref.citation,
    citationTitle = _ref.citationTitle,
    image = _ref.image,
    children = _ref.children,
    context = _ref.context,
    boxProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, (0, _extends2["default"])({
    direction: "column"
  }, boxProps), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    flex: "1",
    rounded: "lg",
    bg: "white",
    shadow: "base",
    px: "12",
    pt: "10",
    pb: "10",
    pos: "relative",
    mb: "5"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, icon, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    mt: "2",
    fontSize: "lg",
    fontWeight: "600"
  }, quote))), /*#__PURE__*/_react["default"].createElement(_react2.HStack, {
    spacing: "4"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Center, {
    rounded: "full",
    w: "4rem",
    h: "4rem",
    p: "1",
    border: "3px solid",
    borderColor: context == 'dark' ? 'white' : 'brand.Green'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Img, {
    w: "100%",
    h: "100%",
    rounded: "full",
    objectFit: "cover",
    src: image
  })), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    color: context == 'dark' ? 'white' : 'gray.800'
  }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontWeight: "bold"
  }, citation), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: "sm"
  }, citationTitle))));
}
var _default = exports["default"] = Quote;