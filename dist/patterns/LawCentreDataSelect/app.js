"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LawCentreDataSelect;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _creatable = _interopRequireDefault(require("react-select/creatable"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function LawCentreDataSelect(_ref) {
  var dataEndpoint = _ref.dataEndpoint,
    isMulti = _ref.isMulti,
    inputProps = _ref.inputProps,
    callbacks = _ref.callbacks;
  // Currently selected options
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedOptions = _useState2[0],
    setSelectedOptions = _useState2[1];

  // Current options in Select
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    availableOptions = _useState4[0],
    setAvailableOptions = _useState4[1];

  // Option data following LCN Schema e.g
  // https://members.lawcentres.org.uk/api/v1/categorisation/areaoflaw
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    items = _useState6[0],
    setItems = _useState6[1];
  var handleChange = function handleChange(options) {
    setSelectedOptions(options);
    if (callbacks) {
      if (dataEndpoint) {
        callbacks.setValue(options);
      } else {
        callbacks.setValue(options.map(function (item) {
          return item.value;
        }));
      }
    }
  };
  var handleCreate = function handleCreate(value) {
    var newItem = null;
    if (dataEndpoint) {
      newItem = {
        type: 'custom',
        id: 'custom',
        attributes: {
          label: value,
          value: value
        }
      };
    } else {
      newItem = value;
    }
    var newItems = (0, _toConsumableArray2["default"])(items);
    newItems.push(newItem);
    setItems(newItems);
    var newSelectedOptions = (0, _toConsumableArray2["default"])(selectedOptions);
    newSelectedOptions.push({
      value: value,
      label: value
    });
    setSelectedOptions(newSelectedOptions);
    if (callbacks) {
      if (dataEndpoint) {
        callbacks.setValue(newSelectedOptions);
      } else {
        callbacks.setValue(newSelectedOptions.map(function (item) {
          return item.value;
        }));
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (dataEndpoint) {
      fetch(dataEndpoint).then(function (res) {
        return res.json();
      }).then(function (response) {
        setItems(response.data);
        if (callbacks) {
          var selected = callbacks.getValue();
          if ((selected === null || selected === void 0 ? void 0 : selected.length) > 0) {
            setSelectedOptions(selected);
          }
        }
      }, function (error) {
        console.log('Error fetching items');
      });
    } else if (callbacks) {
      var selected = callbacks.getValue();
      if ((selected === null || selected === void 0 ? void 0 : selected.length) > 0) {
        setItems(selected);
        setSelectedOptions(selected.map(function (item) {
          return {
            label: item,
            value: item
          };
        }));
      }
    }
  }, []);
  (0, _react.useEffect)(function () {
    var newOptions = [];
    if (dataEndpoint) {
      newOptions = items.map(function (item) {
        if (item.attributes) {
          return {
            label: item.attributes.label,
            value: item.attributes.value
          };
        }
      });
    } else {
      newOptions = items.map(function (item) {
        return {
          label: item,
          value: item
        };
      });
    }
    setAvailableOptions(newOptions);
  }, [items]);
  return /*#__PURE__*/_react["default"].createElement(_creatable["default"], (0, _extends2["default"])({
    classNamePrefix: "lcnSelect",
    value: selectedOptions,
    isMulti: isMulti || true,
    onCreateOption: function onCreateOption(e) {
      return handleCreate(e);
    },
    isLoading: dataEndpoint && items.length <= 1,
    onChange: function onChange(options) {
      return handleChange(options);
    },
    options: availableOptions
  }, inputProps));
}