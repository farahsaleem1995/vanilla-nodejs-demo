const http = require("http");

const routes = require("./routes");

var server = http.createServer(routes.handler);

server.listen(3000);
