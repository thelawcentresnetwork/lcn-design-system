"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Pagination;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@chakra-ui/react");
function Pagination(props) {
  var totalPages = props.totalPages,
    currentPage = props.currentPage,
    prevDisabled = props.prevDisabled,
    nextDisabled = props.nextDisabled,
    path = props.path;
  var prevPageUrl = currentPage === '2' ? "/".concat(path) : "/".concat(path, "/page/").concat(parseInt(currentPage, 10) - 1);
  var nextPageUrl = "/".concat(path, "/page/").concat(parseInt(currentPage, 10) + 1);
  return /*#__PURE__*/_react["default"].createElement(_react2.Flex, {
    w: "full",
    justify: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    disabled: prevDisabled,
    as: "a",
    href: prevPageUrl
  }, prevDisabled && /*#__PURE__*/_react["default"].createElement("span", null, "Previous page"), !prevDisabled && 'Previous'), /*#__PURE__*/_react["default"].createElement(_react2.Text, {
    fontSize: "xs",
    pt: "3",
    color: "gray.400"
  }, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/_react["default"].createElement(_react2.Button, {
    disabled: nextDisabled,
    as: "a",
    href: nextPageUrl
  }, nextDisabled && /*#__PURE__*/_react["default"].createElement("span", null, "Next page"), !nextDisabled && 'Next'));
}