"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Feature;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _ChakraAwesome = _interopRequireDefault(require("../utilities/ChakraAwesome"));
var _excluded = ["title", "description", "icon"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function Feature(_ref) {
  var title = _ref.title,
    description = _ref.description,
    icon = _ref.icon,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_react2.Box, rest, /*#__PURE__*/React.createElement(_react2.Box, {
    fontSize: "2.5rem"
  }, /*#__PURE__*/React.createElement(_ChakraAwesome["default"], {
    icon: ['fas', icon]
  })), /*#__PURE__*/React.createElement(_react2.Stack, {
    mt: "3"
  }, /*#__PURE__*/React.createElement(_react2.Text, {
    as: "h3",
    fontSize: "lg",
    fontWeight: "bold"
  }, title), /*#__PURE__*/React.createElement(_react2.Text, {
    pr: "6",
    lineHeight: "tall"
  }, description)));
}