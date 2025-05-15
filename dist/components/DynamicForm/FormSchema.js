"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DFormSchema;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
var _Input = _interopRequireDefault(require("./Input"));
var _Number = _interopRequireDefault(require("./Number"));
var _Textarea = _interopRequireDefault(require("./Textarea"));
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _Radio = _interopRequireDefault(require("./Radio"));
var _Select = _interopRequireDefault(require("./Select"));
var _Date = _interopRequireDefault(require("./Date"));
var _File = _interopRequireDefault(require("./File"));
var _excluded = ["validation", "type", "items", "ui", "name", "ppi"];
function DFormSchema(_ref) {
  var _schema$properties;
  var schema = _ref.schema,
    useForm = _ref.useForm;
  var FormField = function FormField(_ref2) {
    var input = _ref2.input;
    var field = schema.properties.find(function (p) {
      return p.name === input;
    });
    if (field) {
      var validation = field.validation,
        type = field.type,
        items = field.items,
        ui = field.ui,
        name = field.name,
        ppi = field.ppi,
        inputProps = (0, _objectWithoutProperties2["default"])(field, _excluded);
      switch (type) {
        case 'string':
          return /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({
            useForm: useForm,
            name: input,
            validation: validation
          }, inputProps));
        case 'integer':
          return /*#__PURE__*/_react["default"].createElement(_Number["default"], (0, _extends2["default"])({
            name: input,
            useForm: useForm,
            validation: validation
          }, inputProps));
        case 'date':
          return /*#__PURE__*/_react["default"].createElement(_Date["default"], (0, _extends2["default"])({
            useForm: useForm,
            name: input,
            validation: validation
          }, inputProps));
        case 'boolean':
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, ui == 'switch' && /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], (0, _extends2["default"])({
            useForm: useForm,
            type: "switch",
            name: input,
            validation: validation
          }, inputProps)), !ui && /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], (0, _extends2["default"])({
            useForm: useForm,
            name: input,
            validation: validation
          }, inputProps)));
        case 'array':
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, field.ui == 'radio' && /*#__PURE__*/_react["default"].createElement(_Radio["default"], (0, _extends2["default"])({
            useForm: useForm,
            options: items,
            name: input,
            validation: validation
          }, inputProps)), !field.ui && /*#__PURE__*/_react["default"].createElement(_Select["default"], (0, _extends2["default"])({
            useForm: useForm,
            options: items,
            name: input,
            validation: validation
          }, inputProps)));
        case 'text':
          return /*#__PURE__*/_react["default"].createElement(_Textarea["default"], (0, _extends2["default"])({
            useForm: useForm,
            name: input,
            validation: validation
          }, inputProps));
        case 'file':
          return /*#__PURE__*/_react["default"].createElement(_File["default"], (0, _extends2["default"])({
            useForm: useForm,
            name: input,
            validation: validation
          }, inputProps));
        default:
          console.log('Can not render field: ' + input);
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
      }
    } else {
      console.log('Can not render field: ' + input);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, schema.properties && /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: "6"
  }, (_schema$properties = schema.properties) === null || _schema$properties === void 0 ? void 0 : _schema$properties.map(function (property, index) {
    return /*#__PURE__*/_react["default"].createElement(FormField, {
      key: index,
      input: property.name
    });
  })));
}