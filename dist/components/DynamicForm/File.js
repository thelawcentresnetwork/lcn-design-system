"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@chakra-ui/react");
var _reactHookForm = require("react-hook-form");
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _excluded = ["name", "placeholder", "label", "hint", "colorScheme", "useForm", "validation", "isRequired"],
  _excluded2 = ["ref", "onChange", "value"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var File = function File(_ref) {
  var name = _ref.name,
    placeholder = _ref.placeholder,
    label = _ref.label,
    hint = _ref.hint,
    colorScheme = _ref.colorScheme,
    useForm = _ref.useForm,
    validation = _ref.validation,
    _ref$isRequired = _ref.isRequired,
    isRequired = _ref$isRequired === void 0 ? false : _ref$isRequired,
    groupProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var inputRef = (0, _react.useRef)(null);
  var _useController = (0, _reactHookForm.useController)({
      name: name,
      control: useForm.control,
      rules: validation
    }),
    _useController$field = _useController.field,
    ref = _useController$field.ref,
    _onChange = _useController$field.onChange,
    value = _useController$field.value,
    inputProps = (0, _objectWithoutProperties2["default"])(_useController$field, _excluded2),
    _useController$fieldS = _useController.fieldState,
    invalid = _useController$fieldS.invalid,
    error = _useController$fieldS.error;
  return /*#__PURE__*/_react["default"].createElement(_react2.FormControl, (0, _extends2["default"])({
    isInvalid: invalid
  }, groupProps), /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, label), /*#__PURE__*/_react["default"].createElement(_react2.InputGroup, null, (!value || value.length < 1) && /*#__PURE__*/_react["default"].createElement(_react2.InputLeftAddon, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    fixedWidth: true,
    icon: ['fal', 'cloud-upload-alt']
  })), value && value.length > 0 && /*#__PURE__*/_react["default"].createElement(_react2.InputLeftAddon, {
    cursor: "pointer",
    bg: "white",
    _hover: {
      bg: 'brand.Red',
      color: 'white',
      borderColor: 'brand.Red'
    },
    borderColor: invalid ? 'brand.Red' : 'gray.200',
    onClick: function onClick() {
      _onChange('');
    },
    color: "red.500"
  }, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    fixedWidth: true,
    icon: ['fal', 'times-circle']
  })), /*#__PURE__*/_react["default"].createElement(_react2.Input, (0, _extends2["default"])({
    onChange: function onChange(e) {
      return _onChange(e.target.files);
    },
    type: "file",
    ref: inputRef,
    style: {
      display: 'none'
    }
  }, inputProps)), /*#__PURE__*/_react["default"].createElement(_react2.Input, {
    as: _react2.Box,
    _hover: {
      bg: 'gray.50'
    },
    cursor: "pointer",
    borderColor: invalid ? 'brand.Red' : 'gray.200',
    py: "2",
    color: "gray.400",
    onClick: function onClick() {
      var _inputRef$current;
      return inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.click();
    }
  }, value && value.length > 0 && value[0].name, !value && (placeholder || 'Select file from computer ...'))), error && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, error.message), hint && /*#__PURE__*/_react["default"].createElement(_react2.FormHelperText, null, hint));
};
var _default = exports["default"] = File;