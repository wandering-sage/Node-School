const process = require("process");
const fs = require("fs");

var path = process.argv[2];
var fileType = process.argv[3];
var regEx = new RegExp(`\\.${fileType}$`); //if filetype = txt matches .txt with the end of string

fs.readdir(path, (err, names) => {
	if (err) {
		console.error(err);
	}

	names.forEach((e) => {
		if (regEx.test(e)) console.log(e);
	});
});
