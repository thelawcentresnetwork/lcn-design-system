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
var _excluded = ["image", "children", "context"];
function Inlay(_ref) {
  var image = _ref.image,
    children = _ref.children,
    _ref$context = _ref.context,
    context = _ref$context === void 0 ? 'light' : _ref$context,
    boxProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    justifyContent: "flex-end",
    py: "5%",
    position: "relative"
  }, image && /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    left: "0",
    position: "absolute",
    top: "0",
    boxShadow: "base",
    borderRadius: "lg",
    height: "100%",
    overflow: "hidden",
    width: "70%"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Image, {
    fit: "cover",
    width: "100%",
    height: "100%",
    src: image
  })), /*#__PURE__*/_react["default"].createElement(_react2.Box, (0, _extends2["default"])({
    borderRadius: "lg",
    zIndex: "10",
    w: "55%",
    bg: context === 'dark' ? 'white' : 'brand.Blue',
    boxShadow: "xl",
    color: context === 'dark' ? 'gray.800' : 'white',
    p: "10"
  }, boxProps), children));
}
var _default = exports["default"] = Inlay;