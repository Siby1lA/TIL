const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

solution(input.map(Number));

function solution(val) {
  const max = Math.max(...val);
  console.log(max);
  console.log(val.indexOf(max) + 1);
}

// function solution(val) {
//   const max = val.reduce((a, b) => Math.max(a, b));
//   const num =
//     val.findIndex((data) => {
//       if (data === max) return true;
//     }) + 1;
//   console.log(max);
//   console.log(num);
// }
