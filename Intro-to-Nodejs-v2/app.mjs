// -----------module--old-style------------
// const StartNodejs = require("./index");

// StartNodejs();

// ============Module-Ecmascript-Style==============
import { StartNodejs } from "./index.mjs";
import { readFile, writeFile } from "fs/promises";
// import { write } from "fs";
// import { url } from "inspector";
let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

const data = {
  title: "zubair shaikh",
  para: "Started Learning Nodejs",
};

for (let [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

await writeFile(new URL("template.html", import.meta.url), template);

// console.log(template.toString())
console.log(template);

StartNodejs();
