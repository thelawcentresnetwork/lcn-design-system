"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("@chakra-ui/react");
var _colors = _interopRequireDefault(require("./foundations/colors"));
var _fonts = _interopRequireDefault(require("./foundations/fonts"));
var _Badge = _interopRequireDefault(require("./components/Badge"));
var _Menu = _interopRequireDefault(require("./components/Menu"));
var _Tooltip = _interopRequireDefault(require("./components/Tooltip"));
var _Form = _interopRequireDefault(require("./components/Form"));
var _FormLabel = _interopRequireDefault(require("./components/FormLabel"));
var _Input = _interopRequireDefault(require("./components/Input"));
var _NumberInput = _interopRequireDefault(require("./components/NumberInput"));
var _Radio = _interopRequireDefault(require("./components/Radio"));
var _Checkbox = _interopRequireDefault(require("./components/Checkbox"));
var _Switch = _interopRequireDefault(require("./components/Switch"));
var _Textarea = _interopRequireDefault(require("./components/Textarea"));
var _Button = _interopRequireDefault(require("./components/Button"));
var _Text = _interopRequireDefault(require("./components/Text"));
var _Heading = _interopRequireDefault(require("./components/Heading"));
var _Tabs = _interopRequireDefault(require("./components/Tabs"));
var _Drawer = _interopRequireDefault(require("./components/Drawer"));
// https://github.com/chakra-ui/chakra-ui/tree/75edcf41e7ff4acc2569f2169949063c164d8f6e/packages/theme/src/components

var Theme = (0, _react.extendTheme)({
  colors: _colors["default"],
  fonts: _fonts["default"],
  components: {
    Button: _Button["default"],
    Text: _Text["default"],
    Heading: _Heading["default"],
    Badge: _Badge["default"],
    Menu: _Menu["default"],
    Tooltip: _Tooltip["default"],
    FormLabel: _FormLabel["default"],
    Form: _Form["default"],
    Textarea: _Textarea["default"],
    NumberInput: _NumberInput["default"],
    Input: _Input["default"],
    Checkbox: _Checkbox["default"],
    Drawer: _Drawer["default"],
    Tabs: _Tabs["default"],
    Switch: _Switch["default"],
    Radio: _Radio["default"]
  }
});
var _default = exports["default"] = Theme;