"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DInput;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["name", "label", "hint", "leftAddon", "rightAddon", "colorScheme", "validation", "useForm"];
function DInput(_ref) {
  var _useForm$formState, _useForm$formState$er;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    leftAddon = _ref.leftAddon,
    rightAddon = _ref.rightAddon,
    colorScheme = _ref.colorScheme,
    validation = _ref.validation,
    useForm = _ref.useForm,
    inputProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    isInvalid: useForm !== null && useForm !== void 0 && useForm.formState.errors[name] ? true : false
  }, label && /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, label), /*#__PURE__*/_react["default"].createElement(_react2.InputGroup, {
    colorScheme: colorScheme
  }, leftAddon && /*#__PURE__*/_react["default"].createElement(_react2.InputLeftAddon, null, leftAddon), /*#__PURE__*/_react["default"].createElement(_react2.Input, (0, _extends2["default"])({
    colorScheme: colorScheme
  }, useForm === null || useForm === void 0 ? void 0 : useForm.register(name, validation), inputProps)), rightAddon && /*#__PURE__*/_react["default"].createElement(_react2.InputRightAddon, null, rightAddon)), (useForm === null || useForm === void 0 ? void 0 : useForm.formState.errors[name]) && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    icon: ['fas', 'exclamation-circle']
  }), useForm === null || useForm === void 0 ? void 0 : (_useForm$formState = useForm.formState) === null || _useForm$formState === void 0 ? void 0 : (_useForm$formState$er = _useForm$formState.errors[name]) === null || _useForm$formState$er === void 0 ? void 0 : _useForm$formState$er.message), hint && /*#__PURE__*/_react["default"].createElement(_react2.FormHelperText, null, hint)));
}