"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _CallToAction = _interopRequireDefault(require("../components/CallToAction"));
var _react = _interopRequireDefault(require("react"));
var _default = exports["default"] = {
  title: 'Call To Action',
  argTypes: {
    heading: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    buttonText: {
      control: 'text'
    }
  }
};
var Default = exports.Default = function Default(_ref) {
  var heading = _ref.heading,
    description = _ref.description,
    buttonText = _ref.buttonText;
  return /*#__PURE__*/_react["default"].createElement(_CallToAction["default"], {
    heading: heading || 'Find out how Law Centres can help',
    description: description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    buttonText: buttonText || 'Get Help',
    link: "/get-help"
  });
};