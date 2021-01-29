const process = require("process");
const net = require("net");

var port = process.argv[2];

const server = net.createServer((s) => {
	s.end(now() + "\n");
});

server.listen(port);

function now() {
	var d = new Date();
	var YYYY = d.getFullYear();
	var MM = String(d.getMonth() + 1).padStart(2, "0");
	var DD = String(d.getDate()).padStart(2, "0");
	var hh = d.getHours();
	var mm = d.getMinutes();
	return `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
}
