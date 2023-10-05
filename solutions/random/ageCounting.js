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
const crypto = require("crypto");

https
  .get("https://coderbyte.com/api/challenges/json/age-counting", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      // Parse the JSON response
      const response = JSON.parse(data);

      // Count the items with age equal to 32
      const items = response.data.split(", ");
      let count = 0;
      const outputLines = [];

      for (const item of items) {
        const [key, age] = item.split("=");

        if (age === "32") {
          count++;
          outputLines.push(key);
        }
      }

      // Write key values to output.txt
      const outputStream = fs.createWriteStream("output.txt");

      outputStream.write(outputLines.join("\n"));
      outputStream.write("\n");
      outputStream.end();

      outputStream.on("finish", () => {
        // Calculate SHA1 hash of the file
        const hash = crypto.createHash("sha1");
        const fileData = fs.readFileSync("output.txt");

        hash.update(fileData);
        const sha1Hash = hash.digest("hex");

        console.log("Count:", count);
        console.log("SHA1 Hash:", sha1Hash);
      });
    });
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
