const process = require("process");
const fs = require("fs");

var path = process.argv[2];
fs.readFile(path, "utf8", (err, content) => {
	if (err) {
		console.error(err);
	} else {
		var lines = content.split("\n").length - 1;
		process.stdout.write(lines.toString());
	}
});
