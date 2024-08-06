const fs = require("fs");

const readstream = fs.createReadStream("./docs/blog2.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog3.txt");

// readstream.on("data", (chunk) => {
//   console.log("---New chunk---");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });
//pipeing
readstream.pipe(writeStream);
