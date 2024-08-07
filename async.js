const fs = require("fs").promises;
async function readAndWriteFiles() {
  try {
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    await fs.writeFile("output.txt", data1 + data2);
    console.log("Files have been read and combined successfully.");
  } catch (err) {
    console.error("Error handling files:", err);
  }
}
readAndWriteFiles();
