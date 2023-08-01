import React from "react";
import escapeHtml from "escape-html";

function renderJSXToHTML(jsx) {
  if (typeof jsx === "string" || typeof jsx === "number") {
    return escapeHtml(jsx);
  } else if (typeof jsx === null || typeof jsx === "boolean") {
    return "";
  } else if (Array.isArray(jsx)) {
    return jsx.map((code) => renderJSXToHTML(code)).join("");
  } else if (typeof jsx === "object") {
    if (jsx.$$typeof === Symbol.for("react.element")) {
      let html = "<" + jsx.type;

      for (const propName in jsx.props) {
        if (propName !== "children") {
          html = html + " ";
          html = html + propName;
          html = html + "=";
          html = html + escapeHtml(jsx.props[propName]);
        }
      }
      html = html + " >";
      html = html + renderJSXToHTML(jsx.props.children ?? "");
      html += "</" + jsx.type + ">";
      return html;
    } else throw new Error("cannot render an object");
  }
}

function JSX({ postContent, author }) {
  return (
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <hr />
        </nav>
        <article>{escapeHtml(postContent)}</article>
        <footer>
          <hr />
          <p>
            <i>
              (c) {escapeHtml(author)}, {new Date().getFullYear()}
            </i>
          </p>
        </footer>
      </body>
    </html>
  );
}

function HTML(...args) {
  return renderJSXToHTML(JSX(...args));
}

export default HTML;
