"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FormBuilder;
var _react = _interopRequireWildcard(require("react"));
var _parameterizeJs = _interopRequireDefault(require("parameterize-js"));
var _reactHookForm = require("react-hook-form");
var _react2 = require("@chakra-ui/react");
var _Field = _interopRequireDefault(require("./Field"));
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _Actions = _interopRequireDefault(require("../../components/DynamicForm/Actions"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var fieldTypes = [{
  value: 'string',
  label: 'Short Text'
}, {
  value: 'text',
  label: 'Long text'
}, {
  value: 'integer',
  label: 'Number'
}, {
  value: 'array',
  label: 'Dropdown'
}, {
  value: 'boolean',
  label: 'Checkbox'
}, {
  value: 'date',
  label: 'Date'
}];
function FormBuilder(_ref) {
  var schema = _ref.schema,
    onCancel = _ref.onCancel,
    onSave = _ref.onSave,
    labels = _ref.labels;
  var formMethods = (0, _reactHookForm.useForm)();
  var reset = formMethods.reset,
    errors = formMethods.formState.errors;
  var _useFieldArray = (0, _reactHookForm.useFieldArray)({
      control: formMethods.control,
      name: 'fields'
    }),
    fields = _useFieldArray.fields,
    swapField = _useFieldArray.swap,
    appendField = _useFieldArray.append,
    removeField = _useFieldArray.remove;
  (0, _react.useEffect)(function () {
    if (schema !== null && schema !== void 0 && schema.properties) {
      var _schema$properties;
      var schemaFields = schema === null || schema === void 0 ? void 0 : (_schema$properties = schema.properties) === null || _schema$properties === void 0 ? void 0 : _schema$properties.map(function (field, index) {
        var _field$items, _field$validation;
        return {
          name: field.name,
          id: index,
          label: field.label,
          type: field.type,
          items: (_field$items = field.items) === null || _field$items === void 0 ? void 0 : _field$items.map(function (item) {
            return item.value;
          }),
          ppi: field.ppi,
          required: (_field$validation = field.validation) === null || _field$validation === void 0 ? void 0 : _field$validation.hasOwnProperty('required')
        };
      });
      reset({
        fields: schemaFields
      });
    }
  }, [schema]);
  var onSubmit = function onSubmit(values) {
    var newSchema = schema;
    newSchema.properties = [];
    values.fields.forEach(function (field, index) {
      var _field$label, _field$label$replaceA, _field$items2;
      var newField = {
        //name: parameterize(field.label),
        name: (_field$label = field.label) === null || _field$label === void 0 ? void 0 : (_field$label$replaceA = _field$label.replaceAll("'", '')) === null || _field$label$replaceA === void 0 ? void 0 : _field$label$replaceA.replaceAll('.', ''),
        label: field.label,
        type: field.type,
        ppi: field.ppi,
        items: (_field$items2 = field.items) === null || _field$items2 === void 0 ? void 0 : _field$items2.map(function (item) {
          return {
            value: item,
            label: item
          };
        })
      };
      if (field.required) {
        newField['validation'] = {
          required: 'Please fill in this field.'
        };
      }
      newSchema.properties.push(newField);
    });
    onSave(newSchema);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, schema && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHookForm.FormProvider, formMethods, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    pb: "5",
    px: "0",
    mt: "-8"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Stack, {
    spacing: "5"
  }, fields && /*#__PURE__*/_react["default"].createElement(_react2.Table, {
    variant: "simple"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Thead, null, /*#__PURE__*/_react["default"].createElement(_react2.Tr, null, /*#__PURE__*/_react["default"].createElement(_react2.Th, {
    borderBottom: "0"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Th, {
    borderBottom: "0"
  }), /*#__PURE__*/_react["default"].createElement(_react2.Th, {
    borderBottom: "0"
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Tbody, null, fields.map(function (field, index) {
    return /*#__PURE__*/_react["default"].createElement(_Field["default"], {
      fieldTypes: fieldTypes,
      key: field.id,
      index: index,
      total: fields.length,
      field: field,
      swapField: swapField,
      removeField: removeField
    });
  }))), /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    variant: "inverse",
    leftIcon: /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
      icon: "plus"
    }),
    onClick: function onClick(e) {
      return appendField({
        type: 'string'
      });
    }
  }, "Add field"))), /*#__PURE__*/_react["default"].createElement(_react2.Box, {
    pt: "3",
    justifyContent: "flex-start"
  }, /*#__PURE__*/_react["default"].createElement(_Actions["default"], {
    labels: labels || {
      submit: 'Save Form',
      cancel: 'Cancel'
    },
    onCancel: onCancel
  }))))));
}