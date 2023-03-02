const http = require("http");
const PORT = 3000;
require("colors");
const fs = require("fs");
const { Server } = require("socket.io");
const logger = require("tracer").colorConsole();

let users = [];

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
          case "ico":
            res.writeHead(200, { "content-type": "image/x-icon" });
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

const socketio = new Server(server);
socketio.on("connection", (client) => {
  client.on("connectSubmit", (data) => {
    let isRepeating = false;
    if (users.length > 0) {
      for (let i = 0; i < users.length; i++) {
        if (data.name === users[i]) {
          isRepeating = true;
        }
      }
      if (!isRepeating) {
        users.push(data.name);
        client.emit("connected", { name: data.name });
      } else {
        client.emit("loginError");
      }
    } else {
      users.push(data.name);
      client.emit("connected", { name: data.name });
    }
    console.log(users);
  });
});

server.listen(PORT, () => logger.info("app launched on port " + PORT));
