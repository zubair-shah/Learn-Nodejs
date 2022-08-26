import http, { createServer } from "http";

const host = "localhost";
const port = 8000;

const server = createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      console.log(chunk);
      body += chunk.toString;
    });

    req.on(
      ("end",
      () => {
        if (req.headers[`content-type`] === "application/JSON") {
          body = JSON.parse(body);
        }
      })
    );
    console.log(body);
    res.writeHead(2021);
    res.end("ok");
  } else {
    res.writeHead(200);
    res.send("hello requrst from zubair server");
  }
  req.on("data", (chunk) => {
    console.log(chunk);
    body += chunk.toString;
  });
  res.writeHead(200);
  res.send("hello requrst from zubair server");

  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
});
