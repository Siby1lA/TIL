# 세 수 중 최솟값

```
function solution(a, b, c) {
    let answer = 0;
    if (a > b) answer = b;
    else answer = a;
    if (answer > c) answer = c;

    return answer;
}

console.log(solution(6, 5, 11));
```

# 삼각형 판별하기

```
function solution(a, b, c) {
    let answer = "Yes", max;
    let sum = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (max < c) max = c;
    if (sum - max <= max) answer = "No";

    return answer;
}
    console.log(solution(13, 33, 17));
```
