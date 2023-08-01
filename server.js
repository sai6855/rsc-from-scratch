import { createServer } from "http";
import { readFile } from "fs/promises";

import HTMLFile from "./output.cjs";

const HTML = HTMLFile.default;

createServer(async (req, res) => {
  const author = "Jae Doe";

  const postContent = await readFile("./posts/hello-world.txt", "utf8");

  sendHTML(res, HTML({ postContent, author }));
}).listen(8080);

function sendHTML(res, html) {
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}
