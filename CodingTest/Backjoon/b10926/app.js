const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
solution(input);
function solution(input) {
  // Write your code
  console.log(`${input}??!`);
}
