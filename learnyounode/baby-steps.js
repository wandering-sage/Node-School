const process = require("process");

process.stdout.write(
	process.argv
		.slice(2)
		.reduce((a, b) => a + Number(b), 0)
		.toString()
);
