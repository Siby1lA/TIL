## 타입스크립트란?

> 타입스크립트는 자바스크립트에 타입을 부여한 언어입니다.
> 즉 자바스크립트에서 확장된 언어라고 볼 수 있습니다. 그래서 타입스크립트로 작성된 코드가 자바스크립트로 컴파일 됩니다.

## 왜 타입스크립트를 사용하는지

> 타입스크립트는 자바스크립트 코드의 품질과 개발 생산성을 높힐 수 있기 때문입니다.

- 에러의 사전 방지
- 개발 생산성 상승(vscode의 코드 가이드 및 자동 완성 등...)

### 에러의 사전 방지

> 타입스크립트는 에러를 사전에 미리 예방할 수 있습니다.

```
function sum(a, b){
	return a + b;
}
```

위 코드는 2개의 파라메터를 받아 합을 구하는 함수입니다.
이 코드를 작동시켜보겠습니다.

```
sum('10', '10');
```

위 코드로 함수를 호출하면 `10 + 10 = 20`이 아닌 `1010`이라는 결과가 나올 것입니다. 30의 결과가 나와야하는데 이처럼 개발자의 실수나 의도하지 않는 동작을 예방하기 위해 타입스크립트를 사용합니다.

위의 코드를 타입스크립트로 구현하면 의도하지 않은 코드의 동작을 예방할 수 있습니다.

```
function sum(a: number, b: number){
	return a + b;
}
sum('10', '10');
```

이 코드를 VScode에서 확인하면 아래와 같습니다.
![](https://velog.velcdn.com/images/psb7391/post/c35bb9fc-033d-4ceb-98b6-9a721e787110/image.png)
이와 같이 매개 변수에 `number`라고 타입을 지정해주면 number의 타입만 들어갈 수 있고 이외의 타입은 에러를 표시해줍니다.

또한 런타임 에러도 예방해줍니다.

```
const ts = { name: "typescript" }
ts.hello()
```

ts객체를 만들어서 ts의 객체에서 hello() 함수를 불러온 코드입니다.
누가봐도 이상한 코드인데 자바스크립트는 에러가 날 거라는 것을 모르고 그냥 실행시켜 버립니다.
![](https://velog.velcdn.com/images/psb7391/post/f38ce9a5-055d-4dd7-bdaf-9757b71b3047/image.png)
프로젝트가 커지면 커질 수록 이러한 런타임 에러는 잡기 어렵기 마련인데 타입스크립트는 사전에 ts라는 객체에는 hello()라는 함수가 없습니다 라고 알려줍니다.
![](https://velog.velcdn.com/images/psb7391/post/0c101d80-94d8-484f-8b96-ac86156c38d7/image.png)
이렇게 코드가 실행되기 전에 실수를 바로 잡아주고 타입 지정으로 인해 코드의 가독성도 올라가가기 때문에 많은 사람들이 자바스크립트에서 타입스크립트로 넘어가고 있습니다.

### 개발 생산성 상승

요즘 주로 프론트엔드 개발자가 사용하는 IDE툴인 VSCode에서 타입스크립트를 사용하면 엄청난 생산성를 보입니다.
그 이유는 VSCode와 타입스크립트를 MS에서 만들었고 VSCode는 타입스크립트으로 작성된 툴이기 때문에
코드 자동 완성 기능과 가이드등 타입스크립트 개발에 최적화 되어 있습니다.

## 타입스크립트 기본 타입

타입스크립트로 변수나 함수와 같은 자바스크립트 코드에 타입을 정의할 수 있습니다.
타입스크립트의 기본 타입에는 크게 다음 12가지가 있습니다.

- Boolean
- Number
- String
- Object
- Array
- Tuple
- Enum
- Any
- Void
- Null
- Undefined
- Never

### String

변수의 타입이 문자열인 경우

```
let str: string = 'hi';
```

> 위와 같이 `:`를 이용하여 자바스크립트 코드에 타입을 정의하는 방식을 타입 표기(Type Annotation)라고 합니다.

### Number

타입이 숫자인 경우

```
let num: number = 10;
```

### Boolean

타입이 진위 값인 경우

```
let isLoggedIn: boolean = false;
```

### Object

객체 타입은 아래와 같이 타입을 지정해줍니다. 타입을 지정할 때 Alias 타입으로 재활용 가능하게 많이 사용합니다. 그리고 선택적 변수인 `?` 를 쓰면 그 변수를 필수로 사용하지 않아도 됩니다.

```
type Player = {
	name: string,
    age?: number
}

const link : Player = {
	name: 'link'
}

const zelda : Player = {
	name: 'zelda',
    age: 20
}
```

### Array

타입이 배열인 경우

```
let arr: number[] = [1, 2, 3];
```

또는 아래와 같이 재네릭을 사용할 수 있습니다.

```
let arr: Array<number> = [1, 2, 3];
```

### Tuple

튜플을 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열의 형식을 의미합니다.

```
let arr: [string, number] = ['hi', 10];
```

### Enum

이넘은 상수들의 집합입니다.

```
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;
//인덱스로도 접근 가능합니다.
let hero: Avengers = Avengers[0];
```

원한다면 인덱스를 사용자 편의로 변경하여 사용할 수도 있습ㄴ디ㅏ.

```
enum Avengers { Capt = 2, IronMan, Thor }
let hero: Avengers = Avengers[2];
```

### Any

기존 자바스크립트로 구현되어 있는 코드에 타입스크립트를 점진적으로 적용할 때 활용하는 좋은 타입입니다.
모든 타입에 대해 허용한다는 의미를 갖고 있습니다.

```
let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];
```

### Voide

변수에는 `undefined`와 `null`만 할당하고 함수에는 반환 값을 설정할 수 없는 타입입니다.

```
let untitle: void = undefined;
function hello(): void{
	console.log('hi');
}
```

### Never

함수의 끝에 절대 도달하지 않는 무한 반복의 의미를 지닌 타입입니다.

```
function neverEnd(): never {
  while (true) {

  }
}
```

## 타입스크립트에서의 함수

함수는 크게 3가지 타입을 정의할 수 있습니다.

- 함수의 파라미터 타입
- 함수의 반환 타입
- 함수의 구조 타입

### 함수의 기본적인 타입

함수의 매개변수와 함수의 반환값에 타입을 추가합니다.

```
function sum(a: number, b: number): number{
	return a + b;
}
```

> 여기서 함수의 반환값에 타입을 지정할 않을 땐 `void` 라도 사용합니다.

### 함수의 인자

타입스크립트에서는 함수의 인자를 모두 필수 값으로 간주합니다. 그래서 함수의 매개변수를 설정하면 정의된 값만 받을 수 있고 추가로 인자를 받을 수 없습니다.

```
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // error, too few parameters
```

만약 정의된 매개변수의 갯수 만큼 인자를 넘기지 않고 싶다면 `?` 를 이용합니다.

```
function sum(a: number, b?: number): number {
  return a + b;
}
sum(10, 20); // 30
sum(10, 20, 30); // error, too many parameters
sum(10); // 10
```

## 인터페이스

인터페이스는 상호 간 정의한 약속 혹은 규칙을 의미합니다.
타입스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의합니다.

- 객체의 속성과 속성의 타입
- 함수의 파라미터
- 함수의 반환 타입
- 배열과 객체를 접근하는 방식
- 클래스

### 인터페이스 맛보기

```
let person = { name: 'Capt', age: 28 };

function logAge(obj: { age: number }) {
  console.log(obj.age); // 28
}
logAge(person); // 28
```

위 `logAge()` 함수에서 받는 인자는 age를 속성으로 갖는 객체입니다.
이렇게 인자를 받을 때 타입 뿐만 아니라 객체의 속성의 타입까지 정의할 수 있습니다.

여기에 인터페이스를 적용하면 속성 갯수와 인자로 받는 객체의 속성 갯수를 일치시키지 않아도 됩니다.
(단 타입의 조건만 만족한다면)

```
interface personAge {
  age: number;
}

function logAge(obj: personAge) {
  console.log(obj.age);
}
let person = { name: 'Capt', age: 28 };
logAge(person);
```

또한 `logAge()` 의 인자는 `personAge` 라는 타입을 가져야 한다고 더욱 명시적으로 바뀌었습니다.

### 옵션 속성

인터페이스를 사용할 때 `옵션 속성` 을 사용하면 인터페이스에 정의되어 있는 속성을 모두 다 꼭 사용하지 않아도 됩니다.

```
interface game {
	zelda?: string
}
```

이처럼 속성의 끝에 `?` 를 붙여 사용합니다.

### 읽기 전용 속성
