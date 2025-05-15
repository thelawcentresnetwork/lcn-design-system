"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Tabs = {
  baseStyle: function baseStyle(_ref) {
    var colorScheme = _ref.colorScheme;
    return {
      tab: {
        color: 'gray.400',
        fontWeight: '500',
        px: '6',
        _focus: {
          outline: 0
        },
        _active: {
          outline: 0,
          bg: "".concat(colorScheme, ".50")
        },
        _hover: {
          color: "".concat(colorScheme, ".500"),
          borderColor: "".concat(colorScheme, ".500")
        },
        _selected: {
          outline: 0,
          color: "".concat(colorScheme, ".500"),
          borderColor: "".concat(colorScheme, ".500")
        }
      }
    };
  },
  variants: {
    line: function line(_ref2) {
      var colorScheme = _ref2.colorScheme;
      return {
        tab: {
          borderBottomWidth: '4px',
          _focus: {
            bg: 'transparent',
            outline: '0',
            boxShadow: '0'
          },
          marginBottom: '-4px',
          _selected: {
            color: "".concat(colorScheme, ".500"),
            borderColor: "".concat(colorScheme, ".400")
          }
        },
        tablist: {
          borderBottomWidth: '4px'
        }
      };
    }
  },
  defaultProps: {
    colorScheme: 'green'
  }
};
var _default = exports["default"] = Tabs;