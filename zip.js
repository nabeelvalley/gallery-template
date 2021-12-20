var file_system = require("fs");
var archiver = require("archiver");
const path = require("path");

var output = file_system.createWriteStream("public/download.zip");
var archive = archiver("zip");

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log(
    "archiver has been finalized and the output file descriptor has closed."
  );
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

const input = path.resolve(__dirname, "src/images");

console.log(input);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(input, false);

archive.finalize();
