const fs = require("fs");

// read file
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// // writing file
// fs.writeFile("./docs/blog1.txt", "hello world", () => {
//   console.log("written done");
// });

fs.writeFile("./docs/blog2.txt", "hello again", () => {
  console.log("written done again");
});

//directories
// if (!fs.existsSync("./assets")) {
//   //existssync for shecking already is exit
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       return console.error(err);
//     }

//     console.log("Directory created successfully!");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) return console.error(err);
//     console.log("Directory deleted successfully!");
//   });
// }

if (fs.existsSync("./docs/blog2.txt")) {
  fs.unlink("./docs/blog2.txt", (err) => {
    if (err) return console.error(err);
    console.log("File deleted successfully!");
  });
}
