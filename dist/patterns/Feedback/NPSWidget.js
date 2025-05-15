"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NPSWidget;
var _Feedback = require("./Feedback");
var _react = require("@chakra-ui/react");
var _lawCentresDesignSystem = require("law-centres-design-system");
function NPSWidget(props) {
  var router = useRouter();
  return /*#__PURE__*/React.createElement(_react.Box, {
    top: "45%",
    right: "0",
    position: "fixed",
    zIndex: "75",
    className: "tourFeedback"
  }, /*#__PURE__*/React.createElement(_Feedback.NPSFeedback, {
    originType: "NPS",
    originName: "Site-wide NPS Widget",
    originUrl: 'http://design-system.lawcentres.org.uk/' + router.asPath
  }, /*#__PURE__*/React.createElement(_react.Box, {
    cursor: "pointer",
    boxShadow: "lg",
    bg: "white",
    borderColor: "gray.200",
    borderWidth: "1px",
    fontFamily: "Poppins",
    color: "brand.Orange",
    fontWeight: "500",
    fontSize: "0.8rem",
    width: "2.9rem",
    height: "8rem",
    borderTopLeftRadius: "xl",
    borderBottomLeftRadius: "xl",
    _hover: {
      boxShadow: 'none'
    }
  }, /*#__PURE__*/React.createElement(_react.Box, {
    transform: "rotate(270deg)",
    width: "8rem",
    position: "relative",
    top: "2.25rem",
    left: "-2.6rem"
  }, /*#__PURE__*/React.createElement(_lawCentresDesignSystem.ChakraAwesome, {
    icon: ['fas', 'messages'],
    mr: "3"
  }), /*#__PURE__*/React.createElement(_react.Text, {
    as: "span"
  }, "Feedback")))));
}