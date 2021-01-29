const process = require("process");
const fs = require("fs");

var path = process.argv[2];

var content = fs.readFileSync(path, "utf8");
var lines = content.split("\n").length - 1;
process.stdout.write(lines.toString());
