"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DSelect;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _reactSelect = _interopRequireDefault(require("react-select"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
var _ChakraAwesome = _interopRequireDefault(require("../../utilities/ChakraAwesome"));
var _react2 = require("@chakra-ui/react");
var _excluded = ["name", "label", "hint", "options", "creatable", "required", "useForm", "colorScheme", "validation", "isMulti", "leftAddon", "rightAddon"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function DSelect(_ref) {
  var _useForm$formState, _useForm$formState$er;
  var name = _ref.name,
    label = _ref.label,
    hint = _ref.hint,
    options = _ref.options,
    creatable = _ref.creatable,
    required = _ref.required,
    useForm = _ref.useForm,
    colorScheme = _ref.colorScheme,
    validation = _ref.validation,
    isMulti = _ref.isMulti,
    leftAddon = _ref.leftAddon,
    rightAddon = _ref.rightAddon,
    inputProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var color = colorScheme || 'gray';
  var generateValue = function generateValue(value, isMulti, options) {
    if (Array.isArray(value)) {
      return value === null || value === void 0 ? void 0 : value.map(function (val) {
        var opt = options === null || options === void 0 ? void 0 : options.find(function (o) {
          return o.value == val;
        });
        if (opt) {
          return options === null || options === void 0 ? void 0 : options.find(function (o) {
            return o.value == val;
          });
        } else if (typeof val == 'string') {
          return {
            value: val,
            label: val
          };
        }
      });
    } else {
      return options === null || options === void 0 ? void 0 : options.find(function (o) {
        return o.value == value;
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react2.FormControl, {
    isInvalid: useForm !== null && useForm !== void 0 && useForm.formState.errors[name] ? true : false
  }, label && /*#__PURE__*/_react["default"].createElement(_react2.FormLabel, null, label), /*#__PURE__*/_react["default"].createElement(_react2.InputGroup, {
    colorScheme: colorScheme
  }, leftAddon && /*#__PURE__*/_react["default"].createElement(_react2.InputLeftAddon, null, leftAddon), /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    name: name,
    control: useForm === null || useForm === void 0 ? void 0 : useForm.control,
    rules: validation,
    render: function render(_ref2) {
      var _ref2$field = _ref2.field,
        _onChange = _ref2$field.onChange,
        onBlur = _ref2$field.onBlur,
        value = _ref2$field.value,
        name = _ref2$field.name,
        ref = _ref2$field.ref;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, creatable && /*#__PURE__*/_react["default"].createElement(_creatable["default"], (0, _extends2["default"])({
        theme: function theme(_theme) {
          return _objectSpread(_objectSpread({}, _theme), {}, {
            colors: _objectSpread(_objectSpread({}, _theme.colors), {}, {
              primary25: 'var(--chakra-colors-green-50)',
              primary75: 'var(--chakra-colors-green-200)',
              primary50: 'var(--chakra-colors-green-100)',
              primary: 'var(--chakra-colors-green-400)',
              danger: 'white',
              dangerLight: 'var(--chakra-colors-red-300)',
              neutral20: 'var(--chakra-colors-gray-100)',
              neutral30: 'var(--chakra-colors-gray-100)',
              neutral10: 'var(--chakra-colors-gray-100)',
              neutral40: 'var(--chakra-colors-gray-100)'
            })
          });
        },
        styles: {
          option: function option(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              fontSize: 'var(--chakra-fontSizes-sm)'
            });
          },
          multiValue: function multiValue(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              background: "var(--chakra-colors-green-500)",
              borderRadius: '20px',
              paddingLeft: '5px',
              margin: '4px 5px 4px 0'
            });
          },
          multiValueLabel: function multiValueLabel(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              color: 'white',
              borderRadius: '0',
              borderWidth: '0',
              paddingRight: '5px'
            });
          },
          multiValueRemove: function multiValueRemove(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              color: 'white',
              borderRadius: '0 20px 20px 0',
              cursor: 'pointer',
              paddingRight: '5px',
              marginLeft: '5px',
              background: "var(--chakra-colors-green-400)"
            });
          },
          placeholder: function placeholder(defaultStyles) {
            return _objectSpread(_objectSpread({}, defaultStyles), {}, {
              fontSize: 'var(--chakra-fontSizes-sm)',
              color: "var(--chakra-colors-".concat(color, "-500)")
            });
          },
          control: function control(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              padding: '1px 7px',
              borderRadius: 'var(--chakra-radii-md)',
              borderTopLeftRadius: leftAddon ? 0 : 'var(--chakra-radii-md)',
              borderBottomLeftRadius: leftAddon ? 0 : 'var(--chakra-radii-md)',
              borderTopRightRadius: rightAddon ? 0 : 'var(--chakra-radii-md)',
              borderBottomRightRadius: rightAddon ? 0 : 'var(--chakra-radii-md)',
              fontSize: 'var(--chakra-fontSizes-sm)',
              color: "var(--chakra-colors-".concat(color, "-500)"),
              borderColor: "var(--chakra-colors-".concat(color, "-200)")
            });
          },
          container: function container(defaultStyles) {
            return _objectSpread(_objectSpread({}, defaultStyles), {}, {
              flexGrow: 4
            });
          },
          noOptionsMessage: function noOptionsMessage(defaultStyles) {
            return _objectSpread(_objectSpread({}, defaultStyles), {}, {
              color: "var(--chakra-colors-".concat(color, "-500)")
            });
          }
        },
        ref: ref,
        classNamePrefix: "select",
        options: options,
        isMulti: isMulti,
        menuPlacement: "auto",
        value: generateValue(value, isMulti, options),
        onChange: function onChange(selected) {
          if (selected && Array.isArray(selected)) {
            _onChange(selected.map(function (o) {
              return o.value;
            }));
          } else if (selected && !Array.isArray(selected)) {
            _onChange(selected['value']);
          }
        }
      }, inputProps)), !creatable && /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], (0, _extends2["default"])({
        theme: function theme(_theme2) {
          return _objectSpread(_objectSpread({}, _theme2), {}, {
            colors: _objectSpread(_objectSpread({}, _theme2.colors), {}, {
              primary25: 'var(--chakra-colors-green-50)',
              primary75: 'var(--chakra-colors-green-200)',
              primary50: 'var(--chakra-colors-green-100)',
              primary: 'var(--chakra-colors-green-400)',
              danger: 'white',
              dangerLight: 'var(--chakra-colors-red-500)',
              neutral20: 'var(--chakra-colors-gray-100)',
              neutral30: 'var(--chakra-colors-gray-100)',
              neutral10: 'var(--chakra-colors-gray-100)',
              neutral40: 'var(--chakra-colors-gray-100)'
            })
          });
        },
        styles: {
          option: function option(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              fontSize: 'var(--chakra-fontSizes-sm)'
            });
          },
          multiValue: function multiValue(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              background: "var(--chakra-colors-green-500)",
              borderRadius: '20px',
              paddingLeft: '5px',
              margin: '5px 5px 5px 0'
            });
          },
          multiValueLabel: function multiValueLabel(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              color: 'white',
              borderRadius: '0',
              borderWidth: '0',
              paddingRight: '5px'
            });
          },
          multiValueRemove: function multiValueRemove(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              color: 'white',
              borderRadius: '0 20px 20px 0',
              cursor: 'pointer',
              marginLeft: '5px',
              paddingRight: '5px',
              background: "var(--chakra-colors-green-400)"
            });
          },
          placeholder: function placeholder(defaultStyles) {
            return _objectSpread(_objectSpread({}, defaultStyles), {}, {
              fontSize: 'var(--chakra-fontSizes-sm)',
              color: "var(--chakra-colors-".concat(color, "-500)")
            });
          },
          control: function control(provided, state) {
            return _objectSpread(_objectSpread({}, provided), {}, {
              padding: '1px 7px',
              borderRadius: 'var(--chakra-radii-md)',
              borderTopLeftRadius: leftAddon ? 0 : 'var(--chakra-radii-md)',
              borderBottomLeftRadius: leftAddon ? 0 : 'var(--chakra-radii-md)',
              borderTopRightRadius: rightAddon ? 0 : 'var(--chakra-radii-md)',
              borderBottomRightRadius: rightAddon ? 0 : 'var(--chakra-radii-md)',
              fontSize: 'var(--chakra-fontSizes-sm)',
              color: "var(--chakra-colors-".concat(color, "-500)"),
              borderColor: "var(--chakra-colors-".concat(color, "-200)")
            });
          },
          container: function container(defaultStyles) {
            return _objectSpread(_objectSpread({}, defaultStyles), {}, {
              flexGrow: 4
            });
          },
          noOptionsMessage: function noOptionsMessage(defaultStyles) {
            return _objectSpread(_objectSpread({}, defaultStyles), {}, {
              color: "var(--chakra-colors-".concat(color, "-500)")
            });
          }
        },
        ref: ref,
        classNamePrefix: "select",
        options: options,
        isMulti: isMulti,
        menuPlacement: "auto",
        value: generateValue(value, isMulti, options),
        onChange: function onChange(selected) {
          if (selected && Array.isArray(selected)) {
            _onChange(selected.map(function (o) {
              return o.value;
            }));
          } else if (selected && !Array.isArray(selected)) {
            _onChange(selected['value']);
          }
        }
      }, inputProps)));
    }
  }), rightAddon && /*#__PURE__*/_react["default"].createElement(_react2.InputRightAddon, null, rightAddon)), (useForm === null || useForm === void 0 ? void 0 : useForm.formState.errors[name]) && /*#__PURE__*/_react["default"].createElement(_react2.FormErrorMessage, null, /*#__PURE__*/_react["default"].createElement(_ChakraAwesome["default"], {
    icon: ['fas', 'exclamation-circle']
  }), useForm === null || useForm === void 0 ? void 0 : (_useForm$formState = useForm.formState) === null || _useForm$formState === void 0 ? void 0 : (_useForm$formState$er = _useForm$formState.errors[name]) === null || _useForm$formState$er === void 0 ? void 0 : _useForm$formState$er.message), hint && /*#__PURE__*/_react["default"].createElement(_react2.FormHelperText, null, hint));
}