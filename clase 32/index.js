const http = require("http");
const date = require("./date");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(`<h1>La fecha y hora actuales son:  ${date.myDateTime()}</h1>`);
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);
