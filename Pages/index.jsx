import React from "react";
import escapeHtml from "escape-html";
import escapeHTML from "escape-html";
import { readFile } from "fs/promises";

export async function renderJSXToHTML(jsx) {

  if (typeof jsx === "string" || typeof jsx === "number") {
    return escapeHTML(jsx);
  } else if (typeof jsx === null || typeof jsx === "boolean") {
    return "";
  } else if (Array.isArray(jsx)) {
    return (await Promise.all(jsx.map((code) => renderJSXToHTML(code)))).join(
      ""
    );
  } else if (typeof jsx === "object") {
    if (jsx.$$typeof === Symbol.for("react.element")) {
      if (typeof jsx.type === "string") {
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
        html = html + (await renderJSXToHTML(jsx.props.children ?? ""));
        html += "</" + jsx.type + ">";
        return html;
      } else if (typeof jsx.type === "function") {
        const Component = jsx.type;
        const props = jsx.props;
        const returnedJsx = Component(props);
        return await renderJSXToHTML(returnedJsx);
      }
    } else {
      const resolvedPromiseJSX = await Promise.resolve(jsx);

      return await renderJSXToHTML(resolvedPromiseJSX);
    }
  }
}

const Author = ({ author }) => (
  <i>
    (c) {escapeHtml(author)}, {new Date().getFullYear()}
  </i>
);

async function JSX({ author, filePath, postContent }) {
  const content = await readFile(filePath, "utf8");
  return (
    <html>
      <head>
        <title>Blog post</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <hr />
        </nav>
        <article>{escapeHtml(content)}</article>
        <footer>
          <hr />
          <p>
            <Author author={author} />
          </p>
        </footer>
      </body>
    </html>
  );
}

async function HTML(...args) {
  return await renderJSXToHTML(JSX(...args));
}

export default HTML;
