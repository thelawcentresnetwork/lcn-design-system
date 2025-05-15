"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DTextarea;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["name", "label", "type", "hint", "useForm", "validation"];
function DTextarea(_ref) {
  var _useForm$formState, _useForm$formState$er;
  var name = _ref.name,
    label = _ref.label,
    type = _ref.type,
    hint = _ref.hint,
    useForm = _ref.useForm,
    validation = _ref.validation,
    inputProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    isInvalid: useForm !== null && useForm !== void 0 && useForm.formState.errors[name] ? true : false
  }, label && /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, label), /*#__PURE__*/_react["default"].createElement(_react2.Textarea, (0, _extends2["default"])({}, useForm === null || useForm === void 0 ? void 0 : useForm.register(name, validation), inputProps)), (useForm === null || useForm === void 0 ? void 0 : useForm.formState.errors[name]) && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    icon: ['fas', 'exclamation-circle']
  }), useForm === null || useForm === void 0 ? void 0 : (_useForm$formState = useForm.formState) === null || _useForm$formState === void 0 ? void 0 : (_useForm$formState$er = _useForm$formState.errors[name]) === null || _useForm$formState$er === void 0 ? void 0 : _useForm$formState$er.message), hint && /*#__PURE__*/_react["default"].createElement(_react2.FormHelperText, null, hint));
}