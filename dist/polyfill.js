"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.library = exports.fas = exports.fal = exports.faWhatsapp = exports.faSalesforce = exports.faMicrosoft = exports.FontAwesomeIcon = void 0;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa6");
// Polyfill for FontAwesome and Chakra UI.

// '@fortawesome/fontawesome-svg-core'

var library = exports.library = {
  add: function add() {
    for (var _len = arguments.length, icons = new Array(_len), _key = 0; _key < _len; _key++) {
      icons[_key] = arguments[_key];
    }
    console.log('library.add', icons);
  }
};

// '@fortawesome/react-fontawesome'
var FontAwesomeIcon = exports.FontAwesomeIcon = function FontAwesomeIcon() {
  return /*#__PURE__*/_react["default"].createElement(_fa.FaTriangleExclamation, null);
};

// Only used in lcn_ems

// '@fortawesome/pro-light-svg-icons'
var fal = exports.fal = FontAwesomeIcon;

// '@fortawesome/pro-solid-svg-icons'
var fas = exports.fas = FontAwesomeIcon;

// '@fortawesome/free-brands-svg-icons'
var faMicrosoft = exports.faMicrosoft = FontAwesomeIcon;
var faWhatsapp = exports.faWhatsapp = FontAwesomeIcon;
var faSalesforce = exports.faSalesforce = FontAwesomeIcon;