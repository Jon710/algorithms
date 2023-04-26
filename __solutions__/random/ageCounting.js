// https://github.com/jeff-pal/code-challenges/tree/main/vigel - CODERBYTE QUESTION
// In the JavaScript file, write a program to perform a GET request on the route  https://coderbyte.com/api/challenges/json/age-counting which contains a data key and
// the value is a string which contains items in the format: key=STRING, age=INTEGER. Your
// goal is to count how many items exist that have an age equal to 32. Then you should create
// a write stream to a file called output.txt and the contents should be the key values
// (from the json) each on a separate line in the order they appeared in the json file
// (the file should end with a newline character on its own line).
// Finally, then output the SHA1 hash of the file.
const https = require("https");
const fs = require("fs");
let crypto = require("crypto");
const path = "output.txt";

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
  let data = "";
  const writeStream = fs.createWriteStream(path);

  writeStream.on("finish", () => {
    let hash = crypto.createHash("sha1");
    const readStream = fs.createReadStream(path);

    readStream.on("data", (chunk) => hash.update(chunk));
    readStream.on("end", () => console.log(hash.digest("hex")));
  });

  resp.on("data", (chunk) => {
    data += chunk;
  });

  resp.on("end", () => {
    data = JSON.parse(data);
    let counter = 0;
    const keys = data.data.split(", ");
    // console.log(keys);

    for (let item of keys) {
      writeStream.write(item + "\n");
      if (item === "age=32") {
        counter++;
      }
    }
    writeStream.end();
  });
});
