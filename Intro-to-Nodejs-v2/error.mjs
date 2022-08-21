import { readFile } from "fs/promises";
import { promises } from "stream";

// readFile(new URL("app.mj", import.meta.url), "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//     //   throw new Error
//   } else {
//     console.log("chal raha  he");
//   }
// });

// ====================for handle promises =======================
// try {
//   const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
//   console.log("chal raha  he");
// } catch (error) {
//   console.error(error);
//   console.log("Now some logic here to handle error");
// }

// ==================for-catching-all=======================

process.on("uncaughtException", (e) => {
  console.log(e);
});

const result = await readFile(new URL("app.mj", import.meta.url), "utf-8");

console.log("hello");
