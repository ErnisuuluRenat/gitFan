const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "sub-folder", "text.txt");
console.log(filePath);

//returns last
const base = path.basename(filePath);
console.log(base);

//returns abosolute path

const abosolute = path.resolve(__dirname, "content", "sub-folder", "text.txt");
///home/renat/Best Practise/node js/content/sub-folder/text.txt
console.log(abosolute);
