# 타입스크립트

자바스크립트에 변수, 매개변수, 리턴값에 타입을 붙여놓은 것이 타입스크립트 주 목적은 any를 없애는 것

## 기본 지식

- typescript는 최종적으로 javascript로 변환된다. 순전한 typescript 코드를 돌릴 수 있는 것은 `deno` 이나 대중화되지 않음 브라우저와 노드 모두 js 파일을 실행한다.
- typescript는 언어이자 컴파일러(tsc)이다. ts -> js 로 변환(트랜스파일러)
- ts를 실행하는게 아닌 js를 실행한다.
- 단순히 타입 검사만 하고 싶다면 `tsc -noEmit`
- tsc는 `tsconfig.json` 에 따라 ts 코드를 js로 바꿔준다.
- ts의 타입 검사에서 에러가 발생해도 js 변환은 하기에 결과가 변환된다. (ts에러가 나도 tsc는 실행됨, ts에선 말이 안되지만 js에선 실행되는 경우도 있기에)
- 실무에서 타입 에러가 발생하면 빌드 안하는 것을 권고
- `VSCode` 와 같은 툴을 사용하면 자동완성 및 타입 검사(tsc -noEmit)를 자동으로 해준다.
- 개인 의견: tsconfig.json에서 그냥 esModuleInterop: true, strict: true 두 개만 주로 켜놓는 편. strict: true가 핵심임.

- 타입스크립트 사용하기(생성)

폴더 생성 -> .ts파일 생성 -> npm init -y -> npm i typescript -> npx tsc --init

- npx tsc (js파일로 변환)
- npx tsc --Emit (타입 검사)

- tsconfig

- `"allowJs": true` 해두면 ts, js 동시에 사용 가능
- `"strict" : true` 를 false로 바꾸는걸 추천하지 않음 ts 의미 퇴색
- `"target": "es2016"` 변환할 js 버전
- `"module": "commonjs"` 최신 모듈 ES2015~, 노드 모듈 commonjs

## TS 문법

- 타입

아래의 코드보다 타입을 지정하는 방식은 더 많은데 일단은 기본적인 타입부터 알아보자

```
const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = 123;
const g: true = true;
const h: 5 = 5;

function add(x: number, y: number): number {
  return x + y;
}
type Add = (x: number, y: number) => number;
const add2: Add = (x, y) => x + y;
const add3: (x: number, y: number) => number = (x, y) => x + y;
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
const arr: string[] = ["12", "12"];
const arr2: number[] = [12, 12];
const arr3: Array<number> = [12, 123]; //제네릭
const arr4: [number, string, number] = [1, "1", 1]; //튜플

```

- 타입 추론

타입 추론을 적극 활용하자.

<img width="254" alt="스크린샷 2023-01-12 오후 3 03 31" src="https://user-images.githubusercontent.com/77488652/211990005-03004c20-cb77-4e16-ae9d-03e63c61098b.png">

타입스크립트는 타입을 추론해준다. 하지만 이를 무시하고 내가 `const a: string = '5';` 라는 코드를 작성했다고 보자 변수 a는 값이 변하지 않는 상수인 '5'를 갖고 있는데 string으로 타입을 지정함으로써 더 넓은, 부정확한 타입으로 만들어버렸다. 분명 타입이 5라고 지정을 해줬는데 이를 무시하고 말이다.
하지만 추론을 너무 믿지는 말자 추론이 잘못 되었다면 고쳐야 한다.

> **결론**<br>
> 웬만하면 추론이 잘 되면 추론에 맡기고 타입은 최대한 좁게 적어라.

- 뒷부분, as 뒷부분, <> 부분, interface, type, function 일부를 제외하면 자바스크립트와 동일. 제외하고 생각하는 연습을 초반에 해야 함.

```
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };
const obj = { lat: 37.5, lon: 127.5 };

const a = document.querySelector('#root') as HTMLDivElement;
const a = document.querySelector('#root');

function add<T>(x: T, y: T): T { return x + y }
function add(x, y) { return x + y }

interface A {};
type A = {};
```

- 자바스크립트에 비해서 자유도가 확 줄어듦(ex: 변수에 문자열을 넣었다가 숫자로 바꾸는 등의 행동 어려워짐)

```
let x = 5;
x = 'hello';
```

- any를 최대한 쓰지 않는 것을 목표로 할 것.
- [never](https://ui.toast.com/weekly-pick/ko_20220323), unknown, any 타입 주의하기. any는 최대한 피하고 쓰더라도 나중에 꼭 제대로 타이핑하기.

```
try {
  const array = []; // noImplicitAny가 false일 때
  array[0];
} catch(error) {
  error;
}
```

- 최대한 ! 대신 if를 쓸 것

세상에 확실한 것은 없다...

```
const head = document.querySelector('#head')!;
console.log(head);

const head = document.querySelector('#head');
if (head) {
  console.log(head);
}
```

- string과 String은 다름. 소문자로 하는 것 기억하기.
  String은 New String() 타입

```
const a: string = 'hello';
const b: String = 'hell';

```

- 자동완성 가능 (컨트롤 + 스페이스)

```
type World = "word";
const a: World = "world;
```

- 템플릿 리터럴 타입이 존재(유니언 등 사용 가능)

```
type World = "world" | "hell";

// type Greeting = "hello world"
type Greeting = `hello ${World}`;

```

- 배열, 튜플 문법

튜플의 2번째 인자 number 타입에 문자열이 들어오는 것은 막지만 push까지는 못막는다 즉 타입 추론을 꼭 믿진 마라

```
let arr: string[] = [];
let arr2: Array<string> = [];
function rest(...args: string[]) {}

const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello';
tuple.push('hello');
```

- enum, keyof, typeof

enum은 여러개의 변수를 하나로 묶고 싶을 때 주로 사용한다. 하지만 개인적으로 객체를 주로 사용하는 사람도 있음 (나)

enum과 객체의 차이점은 js로 변한 될 시 enum은 사라진다는 것이다.

객체에서 `as const`라고 타이핑하면 대입된 값들을 고정으로 쓰겠다는 의미 === `readonly`

```
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

EDirection.Up;

(enum member) EDirection.Up = 0

ODirection.Up;

(property) Up: 0

// Using the enum as a parameter
function walk(dir: EDirection) {}

// It requires an extra line to pull out the keys
type Direction = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);
```

- 객체 타이핑: type과 interface 구분하기

간단한건(노말) type 객체지향은 interface

```
type A = { a: string };
const a: A = { a: 'hello' };

interface B { a: string }
const b: B = { a: 'hello' };
```

- union, intersection

```
function add(x: string | number, y: string | number): string | number { return x + y }
add(1, 2)
add('1', '2')
add(1, '2')

type A = {
    a: string;
}
type B = {
    b: string;
}

const aa: A | B = { a: 'hello', b: 'world' };
const bb: A & B = { a: 'hello', b: 'world' };
```

- interface는 같은 이름으로 여러번 선언할 수 있고끼리는 서로 합쳐짐.

그래서 남의 라이브러리에서 사용되는 interface 타입들을 나중에 추가하고 싶을 때 선언해서 추가할 수 있음

```
interface A { a: string }
interface A { b: string }
const obj1: A = { a: 'hello', b: 'world' }

type B = { a: string }
type B = { b: string }
const obj2: B = { a: 'hello', b: 'world' } // 불가능
```

- 객체 리터럴은 잉여 속성 검사가 있음.

```
type A = { hello: string };
const a: A = { hello: 'world', why: 'error' }; // 불가능

const b = { hello: 'world', why: 'error' };
const c: A = b;

```

- void 타입은 return값을 사용하지 안 겠다는 뜻(메서드나 매개변수에서는 리턴값 사용 가능, but 조심해야 함)

```
declare function forEach<T>(arr: T[], callback: (el: T) => undefined): void;
// declare function forEach<T>(arr: T[], callback: (el: T) => void): void;
let target: number[] = [];
forEach([1, 2, 3], el => target.push(el));

interface A {
    talk: () => void;
}
const a: A = {
    talk() { return 3; }
}
```

- 타입만 선언하고 싶을 때 declare(구현은 다른 파일에 있어야 함)

```
declare const a: string;
declare function a(x: number): number;
declare class A {}

// 추후 declare module, declare global, declare namespace도 배움
```

- unknown과 any

any를 쓸빠에 unknown이 차라리 낫다.
any는 타입 검사를 포기해버린다. (타입스크립트를 쓰는 의미가 없음)
unknown는 지금 당장 타입을 모를때 사용 추후 as를 지정하던가 함
주로 try catch문에서 에러문의 타입을 지정할 때 사용한다. 나중에 (error as Error).mesaage 라고 지정함

- 타입 가드

promise 관련 리턴 타입 성공, 실패 타입 지정을 해줘야 한다.
안해주면 PromiseSettledResult라고 넓게 추론해주기 때문에 성공, 실패 타입 지정하고 싶으면 ~ is PromiseRjectedResult, PromiseFulfilledResult를 사용해 타입 가드를 함

```
function numOrStr(a: number | string) {
  if (typeof a === 'string') {
    a.split(',');
  } else {
    a.toFixed(1);
  }
}

function numOrNumArr(a: number | number[]) {
  if (Array.isArray(a)) {
    a.slice(1);
  } else {
    a.toFixed(1);
  }
}

type B = { type: 'b', bbb: string };
type C = { type: 'c', ccc: string };
type D = { type: 'd', ddd: string };
type A = B | C | D;
function typeCheck(a: A) {
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}

interface Cat { meow: number }
interface Dog { bow: number }
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) { return false }
  return true;
}
const cat: Cat | Dog = { meow: 3 }
if (catOrDog(cat)) {
    console.log(cat.meow);
}
if ('meow' in cat) {
    console.log(cat.meow);
}

const isRejected = (input: PromiseSettledResult<unknown>): input is PromiseRejectedResult => input.status === 'rejected';
const isFulfilled = <T>(input: PromiseSettledResult<T>): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected);
```

- {}와 Object 차이

```
const x: {} = "hello";
const y: Object = "hi"; // {}와 Object는 모든 타입(null과 undefined는 제외)
const xx: object = "hi"; // 에러
const yy: object = { hello: "world" }; // object 지양 interface, type, calss를 사용하자
const z: unknown = "hi";
```

- readonly

```
interface A {
  readonly a: string;
  b: string;
}
```

- 값이 다 문자열이었음 좋겠다.

인덱스 시그니처

```
type A = {[key: string]: string} // 어떤 키든 값에 문자열 값도 문자열
```

키도 줄일 수 있다

```
type B = "H" | "M" | "A";
type A = {[key in B]: number}
const aa: A = {H:123, M:1, A:2};
```

- class에 private, protected 추가됨

```
class B implements A {
  private a: string;
  protected b: string;
}
class C extends B {}
new C().a;
new C().b;
```

- optional

```
function abc(a: number, b?: number, c: number?) {}
abc(1)
abc(1, 2)
abc(1, 2, 3)

let obj: { a: string, b?: string }  = { a: 'hello', b: 'world' }
obj = { a: 'hello' };
```

- 제네릭은 타입에 대한 함수라고 생각하면 됨. 추론을 활용하기

```
function add<T>(x: T, y: T): T { return x + y }
add<number>(1, 2);
add(1, 2);
add<string>('1', '2');
add('1', '2');
add(1, '2');
```

extends로 제한 가능

```
function add<T extends number>(x: T, y: T): T {
  return x + y;
}
```

추론을 위해 언노운 쓰는 경우도 있음

```
const add = <T = unknown>(x: T, y: T) => ({x, y});
const add = <T,>(x: T, y: T) => ({x, y});
```
