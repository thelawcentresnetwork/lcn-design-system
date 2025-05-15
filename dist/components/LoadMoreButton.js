"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadMoreButton;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _lawCentresDesignSystem = require("law-centres-design-system");
function LoadMoreButton(_ref) {
  var path = _ref.path,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    mb: "10",
    mt: "8",
    pt: "8",
    pb: "8",
    as: "a",
    bg: "gray.100",
    color: "gray.600",
    borderWidth: "0px",
    boxShadow: "none",
    fontWeight: "600",
    width: "100%",
    fontSize: "sm",
    fontFamily: "Poppins",
    _hover: {
      boxShadow: 'base'
    },
    _active: {
      boxShadow: 'base'
    },
    _focus: {
      boxShadow: 'base'
    },
    colorScheme: "gray",
    variant: "outline",
    leftIcon: /*#__PURE__*/_react["default"].createElement(_lawCentresDesignSystem.ChakraAwesome, {
      color: "gray.700",
      icon: ['fas', 'history'],
      mr: "1"
    }),
    href: path
  }, label);
}