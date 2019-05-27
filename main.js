const fs = require('fs');
const Converter=require("csvtojson").Converter;
const csvConverter = new Converter({
  constructResult: false,
  toArrayString: true
});

const readStream = fs.createReadStream(process.argv[2]);
const writeStream = fs.createWriteStream(process.argv[3]);

readStream.pipe(csvConverter).pipe(writeStream);
console.log("Process finished");
