const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();
const [h, m] = input.split(" ").map(Number);
solution(h, m);

function solution(h, m) {
  if (m < 45) {
    h -= 1;
    m += 15;
    if (h < 0) {
      h = 23;
    }
  } else {
    m -= 45;
  }
  console.log(h, m);
}
