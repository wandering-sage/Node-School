const fs = require("fs");
const path = require("path");

module.exports = function (dirName, ext, cb) {
	fs.readdir(dirName, (err, content) => {
		if (err) {
			cb(err, null);
		} else {
			ext = "." + ext;
			arr = [];
			content.forEach((fn) => {
				if (path.extname(fn) == ext) {
					arr.push(fn);
				}
			});
			cb(null, arr);
		}
	});
};
