const process = require("process");
const http = require("http");
const fs = require("fs");

var port = process.argv[2];

const server = http.createServer(doOnReq);

server.listen(port);

function doOnReq(req, res) {
	if (req.method == "POST") {
		var body = "";
		req.on("data", (chunk) => {
			body += chunk.toString().toUpperCase();
		});
		req.on("end", () => {
			res.end(body);
		});
	}
}
