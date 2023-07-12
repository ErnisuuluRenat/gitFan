//file system with async

const { readFile, writeFile } = require("fs");

readFile("./content/sub-folder/first.txt", "utf8", (err, result) => {
  if (err) return console.log(err);
  const first = result;
  readFile("./content/sub-folder/second.txt", "utf8", (err, result) => {
    if (err) return console.log(err);
    const second = result;

    writeFile(
      "./content/sub-folder/async.txt",
      `here is some async values the ${first} and ${second}`,
      {
        flag: "a",
      },
      (err, result) => {
        if (err) return console.log(err);
        console.log(result);
      }
    );
  });
});

//Buffer 74 68 69 73 20 69 73 20 72 65 61 6c 6c 79 20 69 6e 74 65 72 65 73 74 69 6e 67 2c 20 74 68 69 73 20 69 73 20 6d 79 20 66 69 72 73 74 20 74 78 74 20 66 ... 3 more bytes>
//we get a buffer because we don't add utf8 coding
