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
var _excluded = ["heading", "image", "children"];
function Hero(_ref) {
  var heading = _ref.heading,
    image = _ref.image,
    children = _ref.children,
    boxProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.Box, (0, _extends2["default"])({
    position: "relative",
    overflow: "hidden",
    py: "20"
  }, boxProps), image && /*#__PURE__*/_react["default"].createElement(_react2.Image, {
    position: "absolute",
    top: "0",
    fit: "cover",
    width: "100%",
    zIndex: "10",
    src: image
  }), /*#__PURE__*/_react["default"].createElement(_react2.Container, {
    maxW: "7xl",
    px: "8",
    zIndex: "20",
    position: "relative"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    bg: "rgba(255,255,255,0.9)",
    maxW: {
      sm: 'full',
      md: '30%',
      lg: '40%'
    },
    p: "10",
    borderRadius: "lg",
    boxShadow: "base"
  }, heading && /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    mb: "3",
    as: "h1"
  }, heading), children)));
}
var _default = exports["default"] = Hero;