"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DDate;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _reactDateRange = require("react-date-range");
var _react2 = require("@chakra-ui/react");
var _excluded = ["name", "label", "type", "hint", "leftAddon", "rightAddon", "colorScheme", "useForm", "validation"];
/* eslint-disable */
//@ts-ignore
/* eslint-enable */
function DDate(_ref) {
  var _useForm$formState, _useForm$formState$er;
  var name = _ref.name,
    label = _ref.label,
    type = _ref.type,
    hint = _ref.hint,
    leftAddon = _ref.leftAddon,
    rightAddon = _ref.rightAddon,
    colorScheme = _ref.colorScheme,
    useForm = _ref.useForm,
    validation = _ref.validation,
    inputProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var value = useForm === null || useForm === void 0 ? void 0 : useForm.getValues(name);
  return /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    isInvalid: useForm !== null && useForm !== void 0 && useForm.formState.errors[name] ? true : false
  }, label && /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, label), /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    control: useForm === null || useForm === void 0 ? void 0 : useForm.control,
    name: name,
    rules: validation,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        _onChange = _ref2$field.onChange,
        value = _ref2$field.value;
      return /*#__PURE__*/_react["default"].createElement(_react2.InputGroup, {
        colorScheme: colorScheme
      }, !value && /*#__PURE__*/_react["default"].createElement(_react2.InputLeftAddon, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
        fixedWidth: true,
        icon: ['fal', 'calendar']
      })), value && /*#__PURE__*/_react["default"].createElement(_react2.InputLeftAddon, {
        cursor: "pointer",
        bg: "white",
        _hover: {
          bg: 'brand.Red',
          color: 'white',
          borderColor: 'brand.Red'
        },
        onClick: function onClick() {
          _onChange('');
        },
        color: "red.500"
      }, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
        fixedWidth: true,
        icon: ['fal', 'times-circle']
      })), /*#__PURE__*/_react["default"].createElement(_react2.Popover, {
        placement: "right"
      }, /*#__PURE__*/_react["default"].createElement(_react2.PopoverTrigger, null, /*#__PURE__*/_react["default"].createElement(_react2.Input, {
        _hover: {
          bg: 'gray.50'
        },
        cursor: "pointer",
        as: _react2.Box,
        color: "gray.400",
        borderLeftRadius: "none"
      }, /*#__PURE__*/_react["default"].createElement(_react2.Text, {
        py: "2"
      }, value && value instanceof Date && value.toDateString(), value && !(value instanceof Date) && new Date(value).toDateString()))), /*#__PURE__*/_react["default"].createElement(_react2.Portal, {
        appendToParentPortal: false
      }, /*#__PURE__*/_react["default"].createElement(_react2.PopoverContent, {
        rootProps: {
          zIndex: '1500'
        },
        width: "24rem",
        boxShadow: "xl",
        _focus: {
          outline: 'none'
        }
      }, /*#__PURE__*/_react["default"].createElement(_react2.PopoverArrow, null), /*#__PURE__*/_react["default"].createElement(_react2.PopoverBody, null, /*#__PURE__*/_react["default"].createElement(_reactDateRange.Calendar, (0, _extends2["default"])({
        onChange: function onChange(e) {
          _onChange(e);
        },
        date: value ? value instanceof Date ? value : new Date(value) : new Date()
      }, inputProps)))))), rightAddon && /*#__PURE__*/_react["default"].createElement(_react2.InputRightAddon, null, rightAddon));
    }
  }), (useForm === null || useForm === void 0 ? void 0 : useForm.formState.errors[name]) && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    icon: ['fas', 'exclamation-circle']
  }), useForm === null || useForm === void 0 ? void 0 : (_useForm$formState = useForm.formState) === null || _useForm$formState === void 0 ? void 0 : (_useForm$formState$er = _useForm$formState.errors[name]) === null || _useForm$formState$er === void 0 ? void 0 : _useForm$formState$er.message), hint && /*#__PURE__*/_react["default"].createElement(_react2.FormHelperText, null, hint));
}