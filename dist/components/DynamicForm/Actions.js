"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DActions;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["labels", "onCancel", "buttonProps"];
function DActions(_ref) {
  var labels = _ref.labels,
    onCancel = _ref.onCancel,
    buttonProps = _ref.buttonProps,
    boxProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.HStack, (0, _extends2["default"])({
    w: "100%",
    spacing: "5"
  }, boxProps), /*#__PURE__*/_react["default"].createElement(_react2.Button, (0, _extends2["default"])({}, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.submit, {
    type: "submit"
  }), (labels === null || labels === void 0 ? void 0 : labels.submit) || 'Submit'), onCancel && /*#__PURE__*/_react["default"].createElement(_react2.Button, (0, _extends2["default"])({
    onClick: function onClick() {
      return onCancel;
    },
    variant: "outline",
    colorScheme: "gray"
  }, buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.cancel), (labels === null || labels === void 0 ? void 0 : labels.cancel) || 'Cancel'));
}