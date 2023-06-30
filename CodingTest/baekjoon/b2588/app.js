const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .split("\n")
  .map((val) => +val);

const [a, b] = input;

function solution(a, b) {
  let first = b % 10;
  let second = Math.floor((b % 100) / 10);
  let third = Math.floor(b / 100);

  console.log(a * first);
  console.log(a * second);
  console.log(a * third);
  console.log(a * b);
}

solution(a, b);
