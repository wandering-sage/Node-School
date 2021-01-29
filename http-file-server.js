const process = require("process");
const fs = require("fs");
const http = require("http");

var port = process.argv[2];
var filePaath = process.argv[3];

const server = http.createServer(cbFun);

server.listen(port);

function cbFun(req, res) {
	var fileData = fs.createReadStream(filePaath, { encoding: "utf8" });
	fileData.pipe(res);
}
