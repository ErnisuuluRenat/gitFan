const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to my webpage");
  res.end();
});

server.listen(4000);
