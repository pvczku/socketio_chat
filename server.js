const http = require("http");
const PORT = 3000;
require("colors");
const fs = require("fs");
const { Server } = require("socket.io");
const logger = require("tracer").colorConsole();

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("static/index.html", (error, data) => {
      if (error) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>error 404</h1>");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    });
  } else {
    fs.readFile(`static/${req.url}`, (error, data) => {
      /* 
          image/jpeg
          image/png
          text/html
          text/plain
          text/css
          application/json
          text/xml
          application/javascript
              video/mp4
              audio/mpeg
          */
      if (error) {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>error 404</h1>");
      } else {
        switch (req.url.split(".")[1]) {
          case "png":
            res.writeHead(200, { "content-type": "image/png" });
            break;
          case "jpg" || "jpeg":
            res.writeHead(200, { "content-type": "image/jpeg" });
            break;
          case "txt":
            res.writeHead(200, { "content-type": "text/plain" });
            break;
          case "html":
            res.writeHead(200, { "content-type": "text/html" });
            break;
          case "css":
            res.writeHead(200, { "content-type": "text/css" });
            break;
          case "json":
            res.writeHead(200, { "content-type": "application/json" });
            break;
          case "xml":
            res.writeHead(200, { "content-type": "text/xml" });
            break;
          case "js":
            res.writeHead(200, { "content-type": "application/javascript" });
            break;

          default:
            res.writeHead(200, { "content-type": "text/plain" });
            break;
        }
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => logger.info("app launched on port " + PORT));
