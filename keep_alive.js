var http = require("http");

http
  .createServer(function(req, res) {
    res.write("SoyHex Bot :D");
    res.end();
  })
  .listen(8080); 