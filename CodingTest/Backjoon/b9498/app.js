const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();
solution(input);
function solution(A) {
  if (90 <= A && 100 >= A) {
    console.log("A");
  } else if (80 <= A && 89 >= A) {
    console.log("B");
  } else if (70 <= A && 79 >= A) {
    console.log("C");
  } else if (60 <= A && 69 >= A) {
    console.log("D");
  } else {
    console.log("F");
  }
}
