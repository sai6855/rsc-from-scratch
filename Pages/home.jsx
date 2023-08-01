import React from "react";
import { renderJSXToHTML } from "../dist/index.cjs";

const HomeJSX = () => {
  return <div>HomeJSX</div>;
};

function HTML(...args) {
  return renderJSXToHTML(HomeJSX(...args));
}

export default HTML;
