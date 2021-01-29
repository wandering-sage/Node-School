const process = require("process");
const http = require("http");

var myUrl = process.argv[2];
http.get(myUrl, (res) => {
	res.on("error", console.error);
	var rawData = "";
	res.setEncoding("utf8");
	res.on("data", (data) => (rawData += data));
	res.on("end", doThis);
	function doThis() {
		console.log(rawData.length);
		console.log(rawData);
	}
});
