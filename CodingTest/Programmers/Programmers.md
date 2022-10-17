# [신규 아이디 추천](https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript)

```
function solution(new_id) {
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w\-\.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    const len = answer.length;
    return len > 2 ? answer : answer.padEnd(3,answer[len-1]);
}
```

## 정규표현식 정리

- `^` : 문장의 시작
- `$` : 문장의 끝
- `\w` : 알파벳, 숫자, \_를 포함
- `+` : 1개 이상
- `/g` : 문자열 전체
- `[^]` : []안의 ^는 해당 문자를 제외 즉 여기선 `\w\-\.`를 제외

## 정리

- `padEnd` : 현재 문자열에 인수로 지정된 길이만큼 문자로 채워 새로운 문자열로 반환
  `String newString padEnd(Integer newLength[, String padString])`

# [비밀지도](https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript)

## 내 풀이

```
function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let a = arr1[i].toString(2).padStart(n, 0);
        let b = arr2[i].toString(2).padStart(n, 0);

        let tmp = "";
        for (let j = 0; j < n; j++) {
            if (a[j] === "1" || b[i] === "1") {
                tmp += "#";
            } else {
                tmp += " ";
            }
        }
        answer.push(tmp);
    }
    return answer;
}
```

## 좋아요 많이 받은 풀이

```
function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(
            (arr1[i] | arr2[i])
            .toString(2)
            .padStart(n, 0)
            .replace(/1/gi, "#")
            .replace(/0/gi, " ")
        );
    }
    return answer;
}
```

#　성격 유형 검사하기

## 문제 풀이

```
function solution(survey, choices) {
    let table = new Map();
    Array("R", "T", "C", "F", "J", "M", "A", "N").forEach((e) =>
        table.set(e, 0)
    );
    survey.forEach((e, i) => {
        let score = choices[i] - 4;
        if (score > 0) {
            table.set(e[1], table.get(e[1]) + score);
        } else if (score < 0) {
            table.set(e[0], table.get(e[0]) + Math.abs(score));
          }
    });
    let answer = "";
    Array("RT", "CF", "JM", "AN").forEach((e) => {
        answer += [...e].sort((a, b) => table.get(b) - table.get(a))[0];
    });
    return answer;
}
let arr = [1, 2, 8, 4, 9];
console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
```
