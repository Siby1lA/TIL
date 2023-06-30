const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

solution(Number(input));

function solution(n) {
  for (let i = 1; i <= 9; i += 1) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}
