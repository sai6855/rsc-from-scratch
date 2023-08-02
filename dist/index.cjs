"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderJSXToHTML = renderJSXToHTML;
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _react = _interopRequireDefault(require("react"));
var _escapeHtml = _interopRequireDefault(require("escape-html"));
var _promises = require("fs/promises");
function renderJSXToHTML(_x) {
  return _renderJSXToHTML.apply(this, arguments);
}
function _renderJSXToHTML() {
  _renderJSXToHTML = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(jsx) {
    var _jsx$props$children, html, propName, Component, props, returnedJsx, resolvedPromiseJSX;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof jsx === "string" || typeof jsx === "number")) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", (0, _escapeHtml["default"])(jsx));
          case 4:
            if (!(typeof jsx === null || typeof jsx === "boolean")) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", "");
          case 8:
            if (!Array.isArray(jsx)) {
              _context.next = 14;
              break;
            }
            _context.next = 11;
            return Promise.all(jsx.map(function (code) {
              return renderJSXToHTML(code);
            }));
          case 11:
            return _context.abrupt("return", _context.sent.join(""));
          case 14:
            if (!((0, _typeof2["default"])(jsx) === "object")) {
              _context.next = 44;
              break;
            }
            if (!(jsx.$$typeof === Symbol["for"]("react.element"))) {
              _context.next = 38;
              break;
            }
            if (!(typeof jsx.type === "string")) {
              _context.next = 29;
              break;
            }
            html = "<" + jsx.type;
            for (propName in jsx.props) {
              if (propName !== "children") {
                html = html + " ";
                html = html + propName;
                html = html + "=";
                html = html + (0, _escapeHtml["default"])(jsx.props[propName]);
              }
            }
            html = html + " >";
            _context.t0 = html;
            _context.next = 23;
            return renderJSXToHTML((_jsx$props$children = jsx.props.children) !== null && _jsx$props$children !== void 0 ? _jsx$props$children : "");
          case 23:
            _context.t1 = _context.sent;
            html = _context.t0 + _context.t1;
            html += "</" + jsx.type + ">";
            return _context.abrupt("return", html);
          case 29:
            if (!(typeof jsx.type === "function")) {
              _context.next = 36;
              break;
            }
            Component = jsx.type;
            props = jsx.props;
            returnedJsx = Component(props);
            _context.next = 35;
            return renderJSXToHTML(returnedJsx);
          case 35:
            return _context.abrupt("return", _context.sent);
          case 36:
            _context.next = 44;
            break;
          case 38:
            _context.next = 40;
            return Promise.resolve(jsx);
          case 40:
            resolvedPromiseJSX = _context.sent;
            _context.next = 43;
            return renderJSXToHTML(resolvedPromiseJSX);
          case 43:
            return _context.abrupt("return", _context.sent);
          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _renderJSXToHTML.apply(this, arguments);
}
var Author = function Author(_ref) {
  var author = _ref.author;
  return /*#__PURE__*/_react["default"].createElement("i", null, "(c) ", (0, _escapeHtml["default"])(author), ", ", new Date().getFullYear());
};
function JSX(_x2) {
  return _JSX.apply(this, arguments);
}
function _JSX() {
  _JSX = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref2) {
    var author, filePath, postContent, content;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            author = _ref2.author, filePath = _ref2.filePath, postContent = _ref2.postContent;
            _context2.next = 3;
            return (0, _promises.readFile)(filePath, "utf8");
          case 3:
            content = _context2.sent;
            return _context2.abrupt("return", /*#__PURE__*/_react["default"].createElement("html", null, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("title", null, "Blog post")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("a", {
              href: "/"
            }, "Home"), /*#__PURE__*/_react["default"].createElement("hr", null)), /*#__PURE__*/_react["default"].createElement("article", null, (0, _escapeHtml["default"])(content)), /*#__PURE__*/_react["default"].createElement("footer", null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(Author, {
              author: author
            }))))));
          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _JSX.apply(this, arguments);
}
function HTML() {
  return _HTML.apply(this, arguments);
}
function _HTML() {
  _HTML = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return renderJSXToHTML(JSX.apply(void 0, _args3));
          case 2:
            return _context3.abrupt("return", _context3.sent);
          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _HTML.apply(this, arguments);
}
var _default = HTML;
exports["default"] = _default;
