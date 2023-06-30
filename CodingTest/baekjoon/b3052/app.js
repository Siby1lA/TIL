const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");

solution(input.map(Number));

function solution(val) {
  const set = new Set();
  val.map((num) => set.add(num % 42));
  console.log(set.size);
}

function solution(val) {
  const data = val.map((num) => num % 42);
  const count = new Set(data).size;
  console.log(count);
}
