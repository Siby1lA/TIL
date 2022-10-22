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

```
