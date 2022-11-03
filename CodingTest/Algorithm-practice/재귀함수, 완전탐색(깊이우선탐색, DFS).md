# 8. 섹션 8. 재귀함수와 완전탐색(깊이우선탐색, DFS)

## 재귀함수

### 문제 풀이

```
function solution(n) {
    function DFS(L) {
        if (L === 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }
    DFS(n);
}
console.log(solution(3));
```

## 재귀함수를 이용한 이진수 출력

### 문제 풀이

```
function solution(n) {
    let answer = "";
    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(parseInt(n / 2));
            answer += n % 2;
        }
    }
    DFS(n);
    return answer;
}
console.log(solution(11));
```

## 이진트리 순회(깊이우선탐색)

### 문제 풀이

```
function solution(n) {
    let answer;
    function DFS(n) {
        if (n > 7) return;
        else {
            console.log(n);
            DFS(n * 2);
            DFS(n * 2 + 1);
        }
    }
    DFS(n);
    return answer;
}
console.log(solution(1));
```

## 부분집합 구하기(DFS)

### 문제 풀이

```
function solution(n) {
    let answer = [];
    let ch = Array.from({ length: n + 1 }, () => 0);
    function DFS(L) {
        if (L === n + 1) {
            let tmp = "";
            for (let i = 1; i <= n; i++) {
              if (ch[i] === 1) tmp += i + " ";
        }
        if (tmp.length > 0) answer.push(tmp.trim());
        } else {
            ch[L] = 1;
            DFS(L + 1);
            ch[L] = 0;
            DFS(L + 1);
        }
    }
    DFS(1);
    return answer;
}
console.log(solution(3));
```

## 합이 같은 부분집합(DFS : 아마존 인터뷰)

### 문제 풀이

```
function solution(arr) {
    let answer = "NO", flag = 0;
    let total = arr.reduce((a, b) => a + b, 0);
    let n = arr.length;
    function DFS(L, sum) {
        if (flag) return;
        if (L === n) {
            if (total - sum === sum) {
              answer = "YES";
              flag = 1;
            }
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
```

## 바둑이 승차(DFS)

### 문제 풀이

```
function solution(c, arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    function DFS(L, sum) {
        if (sum > c) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + arr[L]);
            DFS(L + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
```

## 최대점수 구하기(DFS)

### 문제 풀이

```
function solution(m, ps, pt) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = ps.length;
    function DFS(L, sum, time) {
        if (time > m) return;
        if (L === n) {
            answer = Math.max(answer, sum);
        } else {
            DFS(L + 1, sum + ps[L], time + pt[L]);
            DFS(L + 1, sum, time);
        }
    }
    DFS(0, 0, 0);
    return answer;
}
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
```
