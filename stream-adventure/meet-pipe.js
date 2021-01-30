const process = require("process");
const fs = require("fs");

var fName = process.argv[2];
fs.createReadStream(fName).pipe(process.stdout);
