const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map((val) => +val);
const [A, B] = input;
solution(A, B);
function solution(A, B) {
  // Write your code
  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else if (A === B) {
    console.log("==");
  }
}
