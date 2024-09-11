const http = require("http");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //   console.log("request made");
  console.log(req.url, req.method);

  //lodash
  const num = _.random(0, 20);
  console.log(num);

  res.setHeader("Content-Type", "text/html");
  //   res.write("helo ali");
  //   res.end();
  let filePath = "./assets/";
  switch (req.url) {
    case "/":
      filePath += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      filePath += "about.html";
      res.statusCode = 200;
      break;
    case "/aboutus":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      filePath += "404page.html";
      res.statusCode = 404; // Set status to 404 here
      break;
  }

  //html file return
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500; // Set status code to 500 if there's an error
      res.end("Server Error");
    } else {
      //   res.write(data);
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listenign request for 3000 port");
});
