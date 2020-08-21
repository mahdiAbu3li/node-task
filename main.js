var fs = require("fs");

function readPlain() {
  const file = fs.readFileSync("input.csv", "utf8", (err) => {
    if (err) throw err;
  });
  const lineArr = file.split("\n");
  const header = lineArr[0].split(",");
  lineArr.splice(0, 1);

  return lineArr.map((line, lineIndex = 2) => {
    const dataArr = line.split(",");
    return dataArr.reduce((obj, data, dataIndex) => {
      const key = header[dataIndex];
      obj[key] = data;
      return obj;
    }, {});
  });
}

//Read File
console.log(readPlain());

function saveToFile(arr) {
  fs.writeFile("jsonfile.json", JSON.stringify(arr), (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
}

//save jsonFile
saveToFile(readPlain());

function readJsonFile() {
  let file = fs.readFileSync("jsonfile.json", (err) => {
    if (err) {
      //   throw err;
      console.log("Error : " + err);
    }
  });
  let parseFile = JSON.parse(file);
  return parseFile;
}

//read json file
// console.log(readJsonFile());
