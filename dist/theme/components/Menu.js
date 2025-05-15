"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Menu = {
  baseStyle: function baseStyle(_ref) {
    var colorScheme = _ref.colorScheme;
    return {
      list: {
        py: '0',
        px: '3'
      },
      item: {
        fontSize: 'sm',
        color: 'gray.600',
        borderRadius: 'md',
        _hover: {
          bg: "".concat(colorScheme, ".50"),
          color: "".concat(colorScheme, ".500")
        },
        _active: {
          bg: "".concat(colorScheme, ".50")
        },
        _focus: {
          bg: "".concat(colorScheme, ".50")
        },
        _first: {
          mt: '3'
        },
        _last: {
          mb: '3'
        }
      },
      groupTitle: {
        _first: {
          mt: '3'
        },
        mx: '3'
      }
    };
  },
  defaultProps: {
    colorScheme: 'green'
  }
};
var _default = exports["default"] = Menu;