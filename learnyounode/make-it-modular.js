const process = require("process");
const fs = require("fs");
const filterDir = require("./mymodule.js");

var path = process.argv[2];
var fileType = process.argv[3];

filterDir(path, fileType, myPrint);

function myPrint(err, data) {
	if (err) {
		console.error(err);
	} else {
		data.forEach((e) => console.log(e));
	}
}
