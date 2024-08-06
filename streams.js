const fs = require("fs");

const readstream = fs.createReadStream("./docs/blog2,txt");

readstream.on("data", (chunk) => {
  console.log("---New chunk---");
  console.log(chunk.toString());
});
