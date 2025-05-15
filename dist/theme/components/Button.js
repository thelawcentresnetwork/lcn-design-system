"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Button = {
  baseStyle: {
    fontWeight: '600'
  },
  sizes: {
    xs: {
      h: 7,
      px: 3
    },
    sm: {
      h: 8,
      pt: '0.1rem',
      fontSize: '0.8rem'
    },
    md: {
      fontSize: 'sm'
    }
  },
  variants: {
    simple: function simple(_ref) {
      var colorScheme = _ref.colorScheme;
      return {
        bg: "".concat(colorScheme, ".400"),
        color: 'white',
        _hover: {
          bg: "".concat(colorScheme, ".300")
        },
        _focus: {
          bg: "".concat(colorScheme, ".300")
        },
        _active: {
          bg: "".concat(colorScheme, ".300")
        }
      };
    },
    inverse: function inverse(_ref2) {
      var colorScheme = _ref2.colorScheme;
      return {
        bg: "".concat(colorScheme, ".50"),
        color: "".concat(colorScheme, ".500"),
        _hover: {
          bg: "".concat(colorScheme, ".100")
        },
        _focus: {
          bg: "".concat(colorScheme, ".100")
        },
        _active: {
          bg: "".concat(colorScheme, ".100")
        }
      };
    },
    solid: function solid(_ref3) {
      var colorScheme = _ref3.colorScheme;
      return {
        borderLeftWidth: '1px',
        borderRightWidth: '3px',
        borderBottomWidth: '3px',
        bg: "".concat(colorScheme, ".400"),
        borderColor: "".concat(colorScheme, ".500"),
        _hover: {
          bg: "".concat(colorScheme, ".500")
        },
        _focus: {
          bg: "".concat(colorScheme, ".500")
        },
        _active: {
          bg: "".concat(colorScheme, ".500")
        }
      };
    },
    outline: function outline(_ref4) {
      var colorScheme = _ref4.colorScheme;
      return {
        fontWeight: '400',
        color: "".concat(colorScheme, ".500"),
        _hover: {
          bg: "".concat(colorScheme, ".50")
        },
        _active: {
          bg: "".concat(colorScheme, ".50")
        },
        _focus: {
          bg: "".concat(colorScheme, ".50")
        }
      };
    },
    brand: function brand(_ref5) {
      var colorScheme = _ref5.colorScheme;
      return {
        borderRadius: '3xl',
        borderWidth: '4px',
        borderColor: "".concat(colorScheme, ".500"),
        borderTopRightRadius: '0',
        color: "".concat(colorScheme, ".500"),
        bg: 'transparent',
        fontFamily: 'Poppins, Helvetica, sans-serif',
        px: '10',
        py: '4',
        fontWeight: '600'
      };
    },
    brandSolid: function brandSolid(_ref6) {
      var colorScheme = _ref6.colorScheme;
      return {
        borderRadius: '3xl',
        borderWidth: '4px',
        borderColor: "".concat(colorScheme, ".500"),
        borderTopRightRadius: '0',
        color: "white",
        bg: "".concat(colorScheme, ".500"),
        fontFamily: 'Poppins, Helvetica, sans-serif',
        px: '10',
        py: '4',
        fontWeight: '600'
      };
    }
  },
  defaultProps: {
    colorScheme: 'green'
  }
};
var _default = exports["default"] = Button;