const http = require("http");

var server = http.createServer((req, res) => {
  console.log(req);

  // Sending response
  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(`
      <body>
        <form method="POST" action="/message">
          <input type="text" name="message">
          <button type="submit">
            Send
          </button>
        </form>
      </body>`);
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello from NodeJS Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
