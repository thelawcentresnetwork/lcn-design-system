"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Banner", {
  enumerable: true,
  get: function get() {
    return _Banner["default"];
  }
});
Object.defineProperty(exports, "CallToAction", {
  enumerable: true,
  get: function get() {
    return _CallToAction["default"];
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card["default"];
  }
});
Object.defineProperty(exports, "ChakraAwesome", {
  enumerable: true,
  get: function get() {
    return _ChakraAwesome["default"];
  }
});
Object.defineProperty(exports, "DActions", {
  enumerable: true,
  get: function get() {
    return _Actions["default"];
  }
});
Object.defineProperty(exports, "DCheckbox", {
  enumerable: true,
  get: function get() {
    return _Checkbox["default"];
  }
});
Object.defineProperty(exports, "DDate", {
  enumerable: true,
  get: function get() {
    return _Date["default"];
  }
});
Object.defineProperty(exports, "DFile", {
  enumerable: true,
  get: function get() {
    return _File["default"];
  }
});
Object.defineProperty(exports, "DFormSchema", {
  enumerable: true,
  get: function get() {
    return _FormSchema["default"];
  }
});
Object.defineProperty(exports, "DInput", {
  enumerable: true,
  get: function get() {
    return _Input["default"];
  }
});
Object.defineProperty(exports, "DRadio", {
  enumerable: true,
  get: function get() {
    return _Radio["default"];
  }
});
Object.defineProperty(exports, "DSelect", {
  enumerable: true,
  get: function get() {
    return _Select["default"];
  }
});
Object.defineProperty(exports, "DTextarea", {
  enumerable: true,
  get: function get() {
    return _Textarea["default"];
  }
});
Object.defineProperty(exports, "Embed", {
  enumerable: true,
  get: function get() {
    return _Embed["default"];
  }
});
Object.defineProperty(exports, "Feature", {
  enumerable: true,
  get: function get() {
    return _Feature["default"];
  }
});
Object.defineProperty(exports, "FormBuilder", {
  enumerable: true,
  get: function get() {
    return _FormBuilder["default"];
  }
});
Object.defineProperty(exports, "Hero", {
  enumerable: true,
  get: function get() {
    return _Hero["default"];
  }
});
Object.defineProperty(exports, "Inlay", {
  enumerable: true,
  get: function get() {
    return _Inlay["default"];
  }
});
Object.defineProperty(exports, "Quote", {
  enumerable: true,
  get: function get() {
    return _Quote["default"];
  }
});
Object.defineProperty(exports, "Statistic", {
  enumerable: true,
  get: function get() {
    return _Statistic["default"];
  }
});
exports.TestComponent = TestComponent;
Object.defineProperty(exports, "Theme", {
  enumerable: true,
  get: function get() {
    return _theme["default"];
  }
});
Object.defineProperty(exports, "fab", {
  enumerable: true,
  get: function get() {
    return _polyfill.fab;
  }
});
Object.defineProperty(exports, "fad", {
  enumerable: true,
  get: function get() {
    return _polyfill.fad;
  }
});
Object.defineProperty(exports, "fal", {
  enumerable: true,
  get: function get() {
    return _polyfill.fal;
  }
});
Object.defineProperty(exports, "far", {
  enumerable: true,
  get: function get() {
    return _polyfill.far;
  }
});
Object.defineProperty(exports, "fas", {
  enumerable: true,
  get: function get() {
    return _polyfill.fas;
  }
});
Object.defineProperty(exports, "library", {
  enumerable: true,
  get: function get() {
    return _polyfill.library;
  }
});
var _theme = _interopRequireDefault(require("./theme"));
var _ChakraAwesome = _interopRequireDefault(require("./utilities/ChakraAwesome"));
var _FormBuilder = _interopRequireDefault(require("./patterns/FormBuilder/FormBuilder"));
var _Card = _interopRequireDefault(require("./components/Card"));
var _Embed = _interopRequireDefault(require("./components/Embed"));
var _Hero = _interopRequireDefault(require("./components/Hero"));
var _Inlay = _interopRequireDefault(require("./components/Inlay"));
var _Quote = _interopRequireDefault(require("./components/Quote"));
var _Banner = _interopRequireDefault(require("./components/Banner"));
var _Feature = _interopRequireDefault(require("./components/Feature"));
var _CallToAction = _interopRequireDefault(require("./components/CallToAction"));
var _Statistic = _interopRequireDefault(require("./components/Statistic"));
var _FormSchema = _interopRequireDefault(require("./components/DynamicForm/FormSchema"));
var _Actions = _interopRequireDefault(require("./components/DynamicForm/Actions"));
var _Input = _interopRequireDefault(require("./components/DynamicForm/Input"));
var _Textarea = _interopRequireDefault(require("./components/DynamicForm/Textarea"));
var _Checkbox = _interopRequireDefault(require("./components/DynamicForm/Checkbox"));
var _Radio = _interopRequireDefault(require("./components/DynamicForm/Radio"));
var _Select = _interopRequireDefault(require("./components/DynamicForm/Select"));
var _Date = _interopRequireDefault(require("./components/DynamicForm/Date"));
var _File = _interopRequireDefault(require("./components/DynamicForm/File"));
var _polyfill = require("./polyfill");
//import NPSWidget from './patterns/Feedback/NPSWidget'
//import { RatingFeedback, TextFeedback } from './patterns/Feedback/Feedback'

function TestComponent() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Test"), /*#__PURE__*/React.createElement("p", null, "This is a test component"));
}