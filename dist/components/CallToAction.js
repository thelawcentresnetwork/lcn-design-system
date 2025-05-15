"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["heading", "description", "buttonText", "link"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var CallToAction = function CallToAction(_ref) {
  var heading = _ref.heading,
    description = _ref.description,
    buttonText = _ref.buttonText,
    link = _ref.link,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_react2.Box, {
    as: "section"
  }, /*#__PURE__*/React.createElement(_react2.Box, {
    maxW: "2xl",
    mx: "auto",
    px: {
      base: '6',
      lg: '8'
    },
    py: {
      base: '16',
      sm: '20'
    },
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(_react2.Heading, {
    as: "h2",
    size: "2xl",
    fontWeight: "extrabold",
    letterSpacing: "tight"
  }, heading), /*#__PURE__*/React.createElement(_react2.Text, {
    mt: "4",
    fontSize: "lg"
  }, description), /*#__PURE__*/React.createElement(_react2.Button, {
    mt: "8",
    as: "a",
    href: link,
    size: "lg",
    colorScheme: "blue",
    fontWeight: "bold"
  }, buttonText)));
};
var _default = exports["default"] = CallToAction;