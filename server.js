import { createServer } from "http";
import { readFile } from "fs/promises";

import HTMLFile from "./dist/index.cjs";
import HomeHTMLFile from "./dist/home.cjs";

const HTML = HTMLFile.default;

createServer(async (req, res) => {
  const author = "Jae Doe";
  const url = new URL(req.url, `http://${req.headers.host}`);
  const postContent = await readFile("./posts/hello-world.txt", "utf8");

  if (url.pathname === "/hello-world") {
    sendHTML(res, HTML({ postContent, author }));
  } else {
    sendHTML(res, HomeHTMLFile.default());
  }
}).listen(8080);

function sendHTML(res, html) {
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}
