const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

const N = input.splice(0, 1);
const inputString = input.map((data) => data.split(" "));

solution(N, inputString);

function solution(n, inputString) {
  let answer = "";
  for (let i = 0; i < N; i++) {
    const count = Number(inputString[i][0]);
    const stringSplit = inputString[i][1].split("");
    stringSplit.map((data) => (answer += data.repeat(count)));
    answer += "\n";
  }
  console.log(answer);
}
