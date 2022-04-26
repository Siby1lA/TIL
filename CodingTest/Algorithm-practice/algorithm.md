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

# 연필개수

```
function solution(n) {
    let answer = n / 12;
    if (answer % n) {
        answer += 1;
    }
    answer = Math.round(answer);
    return answer;
}
console.log(solution(25));
```

```
function solution(n) {
    let answer = Math.ceil(n/12);
    return answer;
}
console.log(solution(25));
```

# 1부터 N까지의 합

```
function solution(n) {
    let answer = 0;
    for (i = 0; i <= n; i++) {
    answer += i;
}
    return answer;
}
console.log(solution(6));
```

# 최솟값 구하기

```
function solution(arr) {
    let answer, min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
        min = arr[i];
        }
    }
    answer = min;
    return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
```

```
function solution(arr) {
    let answer = Math.min(...arr); //Spread Operator
    //Math.min.apply(null, arr);
    return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
```

# 홀수들의 합, 최소값

```
function solution(arr) {
    let answer = [];
    sum = 0;
    min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) { //for of문
        if (x % 2) {
            sum += x;
            if (x < min) {
                min = x;
            }
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}
let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
```

# 10부제

```
function solution(day, arr) {
    let answer = 0;
    for(let x of arr){
        if(x%10===day) answer++;
    }
    return answer;
}
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
```

# 일곱 난쟁이

```
function solution(arr) {
    let answer = arr; //Shallow Copy
    let sum = arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
        if (sum - (arr[i] + arr[j]) === 100) {
            arr.splice(j, 1);
            arr.splice(i, 1);
        }
        }
    }
    return answer;
}
arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
```
