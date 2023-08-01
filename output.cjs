"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _escapeHtml = _interopRequireDefault(require("escape-html"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function renderJSXToHTML(jsx) {
  if (typeof jsx === "string" || typeof jsx === "number") {
    return (0, _escapeHtml["default"])(jsx);
  } else if (typeof jsx === null || typeof jsx === "boolean") {
    return "";
  } else if (Array.isArray(jsx)) {
    return jsx.map(function (code) {
      return renderJSXToHTML(code);
    }).join("");
  } else if (_typeof(jsx) === "object") {
    if (jsx.$$typeof === Symbol["for"]("react.element")) {
      if (typeof jsx.type === "string") {
        var _jsx$props$children;
        var html = "<" + jsx.type;
        for (var propName in jsx.props) {
          if (propName !== "children") {
            html = html + " ";
            html = html + propName;
            html = html + "=";
            html = html + (0, _escapeHtml["default"])(jsx.props[propName]);
          }
        }
        html = html + " >";
        html = html + renderJSXToHTML((_jsx$props$children = jsx.props.children) !== null && _jsx$props$children !== void 0 ? _jsx$props$children : "");
        html += "</" + jsx.type + ">";
        return html;
      } else if (typeof jsx.type === "function") {
        var Component = jsx.type;
        var props = jsx.props;
        var returnedJsx = Component(props);
        console.log({
          returnedJsx: returnedJsx
        });
        return renderJSXToHTML(returnedJsx);
      }
    } else throw new Error("cannot render an object");
  }
}
var Author = function Author(_ref) {
  var author = _ref.author;
  return /*#__PURE__*/_react["default"].createElement("i", null, "(c) ", (0, _escapeHtml["default"])(author), ", ", new Date().getFullYear());
};
function JSX(_ref2) {
  var postContent = _ref2.postContent,
    author = _ref2.author;
  return /*#__PURE__*/_react["default"].createElement("html", null, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("title", null, "My blog")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Home"), /*#__PURE__*/_react["default"].createElement("hr", null)), /*#__PURE__*/_react["default"].createElement("article", null, (0, _escapeHtml["default"])(postContent)), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(Author, {
    author: author
  })))));
}
function HTML() {
  return renderJSXToHTML(JSX.apply(void 0, arguments));
}
var _default = HTML;
exports["default"] = _default;
