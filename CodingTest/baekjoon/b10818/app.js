const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const [_, ...Data] = input;
const VAL = Data[0].split(" ").map(Number);
solution(VAL);

function solution(val) {
  console.log(Math.min(...val), Math.max(...val));
}
// function solution(n, val) {
//   let max = Number.MIN_SAFE_INTEGER;
//   let min = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < n; i += 1) {
//     if (max <= VAL[i]) max = VAL[i];
//     if (min >= VAL[i]) min = VAL[i];
//   }
//   console.log(min, max);
// }
//
