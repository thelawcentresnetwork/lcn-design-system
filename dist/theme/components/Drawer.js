"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Drawer = {
  variants: {
    nonBlocking: {
      parts: ['dialog, dialogContainer'],
      dialog: {
        pointerEvents: 'auto'
      },
      dialogContainer: {
        pointerEvents: 'none'
      },
      header: {
        fontSize: 'xl',
        fontWeight: '700'
      }
    }
  }
};
var _default = exports["default"] = Drawer;