const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split("\n");
const [h, m] = input[0].split(" ").map(Number);
const t = Number(input[1]);
solution(h, m, t);

function solution(h, m, t) {
  let totalMinute = h * 60 + m + t;
  totalMinute %= 1440;
  const hour = parseInt(totalMinute / 60);
  const minute = totalMinute % 60;
  console.log(hour, minute);
}

// function solution(h, m, t) {
//   if (m + t >= 60) {
//     h += 1;
//     if (m + t - 60 > 0) {
//       h += 1;
//     }
//     if (h >= 24) {
//       h = 0;
//     }
//     if (m + t - 60 === 60) {
//       m = 0;
//     } else {
//       m += t - 60;
//     }
//   } else {
//     m += t;
//   }
//   console.log(h, m);
// }
