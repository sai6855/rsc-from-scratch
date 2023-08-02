import { createServer } from "http";
import { readFile } from "fs/promises";

import HTMLFile from "./dist/index.cjs";

import HomeHTMLFile from "./dist/home.cjs";

const HTML = HTMLFile.default;

createServer(async (req, res) => {
  const author = "Jae Doe";
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/hello-world") {
    sendHTML(res, await HTML({ author, filePath: "posts/hello-world.txt" }));
  } else {
    sendHTML(res, await HomeHTMLFile.default());
  }
}).listen(8080);

function sendHTML(res, html) {
  if (typeof html === "object") {
    Promise.resolve(html).then((res) => res);
  } else {
  }
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}
