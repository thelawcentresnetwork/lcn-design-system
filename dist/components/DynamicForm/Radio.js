"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DRadio;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["name", "label", "hint", "options", "useForm", "validation"];
function DRadio(_ref) {
  var _useForm$formState, _useForm$formState$er;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    options = _ref.options,
    useForm = _ref.useForm,
    validation = _ref.validation,
    inputProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    isInvalid: useForm !== null && useForm !== void 0 && useForm.formState.errors[name] ? true : false
  }, /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, label || name), hint && /*#__PURE__*/_react["default"].createElement(_react2.FormHelperText, {
    mb: "4"
  }, hint), /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    control: useForm === null || useForm === void 0 ? void 0 : useForm.control,
    name: name,
    rules: validation,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        onChange = _ref2$field.onChange,
        value = _ref2$field.value;
      return /*#__PURE__*/_react["default"].createElement(_react2.RadioGroup, {
        onChange: onChange,
        value: value
      }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
        spacing: 4
      }, options === null || options === void 0 ? void 0 : options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement(_react2.Radio, (0, _extends2["default"])({}, inputProps, {
          value: option.value,
          key: option.value
        }), option.label);
      })));
    }
  }), (useForm === null || useForm === void 0 ? void 0 : useForm.formState.errors[name]) && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    icon: ['fas', 'exclamation-circle']
  }), (_useForm$formState = useForm.formState) === null || _useForm$formState === void 0 ? void 0 : (_useForm$formState$er = _useForm$formState.errors[name]) === null || _useForm$formState$er === void 0 ? void 0 : _useForm$formState$er.message));
}