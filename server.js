const http = require("http");
const PORT = 3000;
require("colors");
const logger = require("tracer").colorConsole();
const server = http.createServer((req, res) => {});

server.listen(PORT, () => logger.info("app launched on port " + PORT));