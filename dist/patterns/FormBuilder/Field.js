"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Field;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _react2 = require("@chakra-ui/react");
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _Select = _interopRequireDefault(require("../../components/DynamicForm/Select"));
var _Input = _interopRequireDefault(require("../../components/DynamicForm/Input"));
var _Checkbox = _interopRequireDefault(require("../../components/DynamicForm/Checkbox"));
function Field(_ref) {
  var index = _ref.index,
    total = _ref.total,
    field = _ref.field,
    swapField = _ref.swapField,
    removeField = _ref.removeField,
    fieldTypes = _ref.fieldTypes;
  var formMethods = (0, _reactHookForm.useFormContext)();
  var fieldType = formMethods.watch("fields.".concat(index, ".type"));
  return /*#__PURE__*/_react["default"].createElement(_react2.Tr, null, /*#__PURE__*/_react["default"].createElement(_react2.Td, {
    pt: "6",
    pb: "7",
    fontSize: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Flex, null, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    mr: "5",
    pb: "0"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: "0"
  }, index > 0 && /*#__PURE__*/_react["default"].createElement(_react2.Box, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    _hover: {
      color: 'brand.Green'
    },
    onClick: function onClick(e) {
      return swapField(index, index - 1);
    },
    icon: "caret-up",
    fontSize: "lg",
    color: "gray.200",
    cursor: "pointer"
  })), index < total - 1 && /*#__PURE__*/_react["default"].createElement(_react2.Box, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    _hover: {
      color: 'brand.Green'
    },
    onClick: function onClick(e) {
      return swapField(index, index + 1);
    },
    icon: "caret-down",
    fontSize: "lg",
    color: "gray.200",
    cursor: "pointer"
  })))), /*#__PURE__*/_react["default"].createElement(_react2.Box, null, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: "3"
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    useForm: formMethods,
    name: "fields.".concat(index, ".label"),
    label: "Field label"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: "2",
    pt: "2"
  }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    type: "switch",
    labelProps: {
      pt: '2',
      fontWeight: 400
    },
    useForm: formMethods,
    name: "fields.".concat(index, ".required"),
    label: "Mandatory field"
  }), /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    type: "switch",
    labelProps: {
      pt: '2',
      fontWeight: 400
    },
    useForm: formMethods,
    name: "fields.".concat(index, ".ppi"),
    label: "Contains PII"
  })))))), /*#__PURE__*/_react["default"].createElement(_react2.Td, {
    pt: "6",
    pb: "7",
    verticalAlign: "top"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    w: "15rem",
    spacing: "5"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    name: "fields.".concat(index, ".type"),
    label: "Type",
    useForm: formMethods,
    options: fieldTypes
  }), fieldType == 'array' && /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    useForm: formMethods,
    placeholder: "Add options...",
    name: "fields.".concat(index, ".items"),
    isMulti: true,
    options: field.items,
    creatable: true
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Td, {
    pt: "6",
    pb: "7",
    verticalAlign: "top",
    textAlign: "right"
  }, /*#__PURE__*/_react["default"].createElement(_react2.IconButton, {
    mt: "7",
    colorScheme: "red",
    variant: "inverse",
    borderRadius: "full",
    icon: /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
      icon: "trash-can"
    }),
    onClick: function onClick(e) {
      return removeField(index);
    }
  })));
}