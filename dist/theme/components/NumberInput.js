"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var NumberInput = {
  variants: {
    outline: function outline(_ref) {
      var colorScheme = _ref.colorScheme;
      return {
        field: {
          borderColor: "".concat(colorScheme, ".200"),
          bg: 'white',
          fontSize: 'sm',
          _hover: {
            borderColor: "".concat(colorScheme, ".500"),
            boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
          },
          _focus: {
            borderColor: "".concat(colorScheme, ".500"),
            boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
          },
          _active: {
            borderColor: "".concat(colorScheme, ".500"),
            boxShadow: "0 0 0 1px var(--chakra-colors-".concat(colorScheme, "-500)")
          }
        },
        stepper: {
          bg: 'white'
        }
      };
    }
  },
  defaultProps: {
    colorScheme: 'gray',
    variant: 'outline'
  }
};
var _default = exports["default"] = NumberInput;