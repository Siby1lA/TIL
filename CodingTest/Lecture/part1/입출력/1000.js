// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(case1) {
  const input = case1.split("\n");
  const [a, b] = input[0].split(" ").map(Number);
  return a + b;
}

const case1 = `1 2`;

console.log(solution(case1));
