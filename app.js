const http = require("http");

var server = http.createServer((req, res) => {
  console.log(req);

  // Sending response
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello from NodeJS Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
