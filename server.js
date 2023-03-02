const http = require("http");
const PORT = 3000;
require("colors");
const logger = require("tracer").colorConsole();
const server = http.createServer((req, res) => {});
const {Server} = require('socket.io')

server.listen(PORT, () => logger.info("app launched on port " + PORT));
