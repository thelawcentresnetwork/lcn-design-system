"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DCheckbox;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["name", "label", "type", "useForm", "validation", "labelProps"];
function DCheckbox(_ref) {
  var _useForm$formState, _useForm$formState$er;
  var name = _ref.name,
    label = _ref.label,
    type = _ref.type,
    useForm = _ref.useForm,
    validation = _ref.validation,
    labelProps = _ref.labelProps,
    inputProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    isInvalid: useForm !== null && useForm !== void 0 && useForm.formState.errors[name] ? true : false
  }, type == 'switch' && /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    control: useForm === null || useForm === void 0 ? void 0 : useForm.control,
    name: name,
    rules: validation,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        _onChange = _ref2$field.onChange,
        value = _ref2$field.value;
      return /*#__PURE__*/_react["default"].createElement(_react2.Switch, {
        mr: "3",
        onChange: function onChange(e) {
          return _onChange(e.target.checked);
        },
        isChecked: value,
        defaultChecked: inputProps.defaultChecked
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, (0, _extends2["default"])({
    pl: "1"
  }, labelProps, {
    htmlFor: name
  }), label || name)), !type && /*#__PURE__*/_react["default"].createElement(_react2.Checkbox, (0, _extends2["default"])({}, inputProps, useForm === null || useForm === void 0 ? void 0 : useForm.register(name, validation)), label || name), (useForm === null || useForm === void 0 ? void 0 : useForm.formState.errors[name]) && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    icon: ['fas', 'exclamation-circle']
  }), useForm === null || useForm === void 0 ? void 0 : (_useForm$formState = useForm.formState) === null || _useForm$formState === void 0 ? void 0 : (_useForm$formState$er = _useForm$formState.errors[name]) === null || _useForm$formState$er === void 0 ? void 0 : _useForm$formState$er.message));
}