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
var _ChakraAwesome = _interopRequireDefault(require("../utilities/ChakraAwesome"));
var _excluded = ["link", "image", "title", "collapsable", "children"];
function Card(_ref) {
  var link = _ref.link,
    image = _ref.image,
    title = _ref.title,
    collapsable = _ref.collapsable,
    children = _ref.children,
    linkBoxProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useDisclosure = (0, _react2.useDisclosure)(),
    isOpen = _useDisclosure.isOpen,
    onToggle = _useDisclosure.onToggle;
  return /*#__PURE__*/_react["default"].createElement(_react2.LinkBox, (0, _extends2["default"])({
    as: _react2.Flex,
    bg: "white",
    shadow: {
      base: 'base'
    },
    rounded: {
      base: 'lg'
    },
    overflow: "hidden",
    transition: "all 0.2s",
    direction: "column",
    _hover: {
      shadow: {
        base: 'lg'
      }
    }
  }, linkBoxProps), image && /*#__PURE__*/_react["default"].createElement(_react2.Img, {
    objectFit: "cover",
    src: image
  }), collapsable && /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    variant: "link",
    onClick: onToggle,
    fontSize: "md",
    fontWeight: "700",
    alignItems: "left",
    pl: "6",
    pr: "6",
    justifyContent: "space-between",
    _focus: {
      outline: 0
    },
    _active: {
      outline: 0
    },
    _hover: {
      textDecoration: 'none',
      color: 'brand.Green'
    },
    color: "gray.800",
    py: "3",
    fontFamily: "Poppins, sans-serif",
    rightIcon: /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
      icon: "angle-down"
    })
  }, title), !collapsable && /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    px: {
      base: '6'
    },
    pt: "5",
    flexGrow: 0
  }, link && title && /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    as: "h3",
    size: "sm",
    mb: "2",
    lineHeight: "base"
  }, /*#__PURE__*/_react["default"].createElement(_react2.LinkOverlay, {
    href: link
  }, title)), !link && title && /*#__PURE__*/_react["default"].createElement(_react2.Heading, {
    as: "h3",
    size: "sm",
    mb: "2",
    lineHeight: "base"
  }, title)), /*#__PURE__*/_react["default"].createElement(_react2.Collapse, {
    endingHeight: "100%",
    "in": isOpen || !collapsable,
    animateOpacity: true
  }, /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    px: {
      base: '6'
    },
    pt: "0",
    pb: "7",
    direction: "column",
    justify: "space-between",
    height: "100%",
    flexGrow: 5
  }, children)));
}
var _default = exports["default"] = Card;