"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../dist/index.cjs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HomeJSX = function HomeJSX() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Welocome to my blog"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/hello-world"
  }, "Hello world"));
};
function HTML() {
  return (0, _index.renderJSXToHTML)(HomeJSX.apply(void 0, arguments));
}
var _default = HTML;
exports["default"] = _default;
