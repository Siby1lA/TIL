const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

solution(Number(input));

function solution(n) {
  let star = "";
  for (let i = 0; i < n; i += 1) {
    star += "*";
    console.log(star);
  }
}

// function solution(n) {
//   let star = "";
//   for (let i = 0; i < n; i += 1) {
//     for (let j = 0; j <= i; j++) {
//       star += "*";
//     }
//     star += "\n";
//   }
//   console.log(star);
// }
