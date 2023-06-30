const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const score = input[1].split("").map(Number);
solution(N, score);

function solution(n, score) {
  const sum = score.reduce((a, b) => a + b);
  console.log(sum);
}
