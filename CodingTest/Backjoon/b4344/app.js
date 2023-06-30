const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.splice(0, 1).map(Number)[0];
const score = input.map((data) => data.split(" ").map(Number));
solution(N, score);

function solution(n, val) {
  for (let i = 0; i < N; i += 1) {
    const length = val[i].splice(0, 1)[0];
    const average = val[i].reduce((a, b) => a + b) / length;
    const averageTop = val[i].filter((data) => data > average);
    console.log(((averageTop.length / length) * 100).toFixed(3) + "%");
  }
}
