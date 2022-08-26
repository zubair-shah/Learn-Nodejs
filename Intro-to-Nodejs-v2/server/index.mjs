import http, { createServer } from "http";

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("close", () => {
      console.log(body);
    });

    res.writeHead(200);
    res.end("ok");
  } else {
    res.writeHead(200);
    res.end("hi from server");
  }
});

server.listen(port, host, () => {
  console.log(`your server is running on ${host}/${port}`);
});
