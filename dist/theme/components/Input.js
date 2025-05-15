"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Input = {
  variants: {
    outline: function outline(_ref) {
      var colorScheme = _ref.colorScheme;
      return {
        addon: {
          fontSize: 'xs',
          bg: "".concat(colorScheme, ".50"),
          color: "".concat(colorScheme, ".500"),
          borderColor: "".concat(colorScheme, ".200")
        },
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
        }
      };
    }
  },
  defaultProps: {
    colorScheme: 'gray',
    variant: 'outline'
  }
};
var _default = exports["default"] = Input;