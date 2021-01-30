const { Readable } = require("stream");
const process = require("process");

const myStream = new Readable();
myStream._read = () => {};

myStream.push(process.argv[2]);

myStream.pipe(process.stdout);
