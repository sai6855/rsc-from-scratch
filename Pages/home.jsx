import React from "react";
import { renderJSXToHTML } from "../dist/index.cjs";

const HomeJSX = () => {
  return (
    <div>
      <h1>Welocome to my blog</h1>
      <a href="/hello-world">Hello world</a>
    </div>
  );
};

function HTML(...args) {
  return renderJSXToHTML(HomeJSX(...args));
}

export default HTML;
