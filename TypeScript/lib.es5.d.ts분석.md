# 1. forEach, map 제네릭 분석

## forEach 분석

```
// forEach 타입
interface Array<T> {
forEach(
callbackfn: (value: T, index: number, array: T[]) => void,
thisArg?: any
): void;
}

[1, 2, 3].forEach((value) => {
console.log(value);
});

["1", "2", "3"].forEach((value) => {
console.log(value);
});
```

T 제네릭을 통해 선언한 값이 뭔지 유추 가능
코드를 작성할 땐 타입이 뭔지 모르니 실행할때 자동으로 타입지정 해줌
제네릭이 있어야지만 아래와 같은 코드를 막을 수 있음
add("1", 2)
add(1, "2")

```
function add<T>(x: T, y: T): T { return x + y }
add<number>(1, 2);
// <number>add(1, 2); 주의 앞에 붙으면 as 즉 타입 강제 지정
add(1, 2);
add<string>('1', '2');
add('1', '2');
add(1, '2');

```

<number> 와 같이 제네릭의 타입을 알려줄 수 있다.

## map 분석

```
interface Array<T> {
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];
}
const strings = [1, 2, 3].map((item) => item.toString());
```

T는 [1, 2, 3]의 배열로 지정
U는 즉 map의 리턴값 이건 string으로 지정

```
interface Array<T> {
  map<U>(callbackfn, thisArg): string[];
}
const strings = [1, 2, 3].map((item) => item.toString());
```

코드의 가독성이 안좋으니 헷갈리면 타입을 다 지워보자
