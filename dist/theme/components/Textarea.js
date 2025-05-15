"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Textarea = {
  baseStyle: {
    fontSize: 'sm'
  },
  variants: {
    outline: function outline(_ref) {
      var colorScheme = _ref.colorScheme;
      return {
        bg: 'white',
        _focus: {
          borderColor: "".concat(colorScheme, ".500"),
          boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
        },
        _active: {
          borderColor: "".concat(colorScheme, ".500"),
          boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
        }
      };
    },
    inverse: function inverse(_ref2) {
      var colorScheme = _ref2.colorScheme;
      return {
        bg: 'white',
        borderWidth: '1px',
        borderColor: "".concat(colorScheme, ".100"),
        _focus: {
          borderColor: "".concat(colorScheme, ".500"),
          boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
        },
        _active: {
          borderColor: "".concat(colorScheme, ".500"),
          boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
        }
      };
    }
  },
  defaultProps: {
    colorScheme: 'gray',
    variant: 'outline'
  }
};
var _default = exports["default"] = Textarea;