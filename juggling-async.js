const process = require("process");
const http = require("http");
var arr = [];
var completedReqs = 0;

for (let i = 0; i < 3; i++) {
	http.get(process.argv[2 + i], doToRespond);
	function doToRespond(res) {
		res.on("error", console.error);
		var rawData = "";
		res.setEncoding("utf8");
		res.on("data", (data) => (rawData += data));
		res.on("end", printRawData);
		function printRawData() {
			arr[i] = rawData;
			completedReqs++;
			if (completedReqs == 3) {
				arr.forEach((e) => console.log(e));
			}
		}
	}
}
