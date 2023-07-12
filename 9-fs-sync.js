//file system with sync

const { readFileSync, writeFileSync } = require("fs");

//we will read Files with readFileSync then create file

const first = readFileSync("./content/sub-folder/first.txt", "utf8");
const second = readFileSync("./content/sub-folder/second.txt", "utf8");

//if file is not there node will create it if there is no file node will create it
writeFileSync(
  "./content/sub-folder/sync.txt",
  `Here is the something like result ${first} and the ${second}`,
  { flag: "a" }
);

// with {flag : "a"} we change it the behaviour of writeFileSync and it will note override old value but will add new
