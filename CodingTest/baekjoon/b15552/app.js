const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  let answer = "";
  const T = input.splice(0, 1);
  for (let i = 0; i < T; i += 1) {
    const [a, b] = input[i].split(" ").map(Number);
    answer += a + b + "\n";
  }
  console.log(answer);
}
