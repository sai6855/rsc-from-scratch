import { createServer } from "http";
import { readFile } from "fs/promises";
import escapeHtml from "escape-html";
createServer(async (req, res) => {
  const author = "Jae Doe";

  const postContent = await readFile("./posts/hello-world.txt", "utf8");

  sendHTML(
    res,
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <hr />
        </nav>
        <article>${escapeHtml(postContent)}</article>
        <footer>
          <hr />
          <p>
            <i>
              (c) ${escapeHtml(author)}, ${new Date().getFullYear()}
            </i>
          </p>
        </footer>
      </body>
    </html>
  );
}).listen(8080);

function sendHTML(res, jsx) {
  const html = renderJSXToHTML(jsx);
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}

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
      html = html + renderJSXToHTML(jsx.props.children);
      html += "</" + jsx.type + ">";
      return html;
    } else throw new Error("cannot render an object");
  }
}
