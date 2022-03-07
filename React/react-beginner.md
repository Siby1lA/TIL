# 벨로퍼트님의 모던 리액트

## 1장 리액트 입문

### 01 리액트는 어쩌다 만들어졌을까?

- 기존의JS의 DOM을 건드리는 작업은 번거롭고 난잡하다.
- 리액트는 DOM을 다 날려버리고 다시 만들어서 보여준다.
- 메모리에 가상DOM을 만들어서 성능과 속도도 잡음
- 가상DOM과 브라우저DOM을 비교해 변경된 부분만 패치

### 02 작업환경 준비

- Node.js: Webpack, Babled사용하기 위해 기반인 Node.js가 필요
- VSCode : 내가 주로 사용하는 에디터

### 새 리엑트 프로젝트 생성

```
$ npx create-react-app app-name
```

### 03 리액트 컴포넌트

Hello.js

```
import React from 'react';
function Hello() {
  return <div>Hello</div>
}
export default Hello;

```

```
import React from 'react';
```

리액트 컴포넌트를 만들 땐 리액트를 임포트해야한다.

```
export default Hello;
```

이 코드는 Hello라는 컴포넌트를 내보내겠다는 의미이다. 이러면 다른 컴포넌트에서 불러와서 사용 가능하다.

```
import Hello from './Hello';
```

다른 컴포넌트에서 사용하려면 import하고

```
<Hello />
```

이렇게 태그해서 사용하면 된다.

### 04 JSX의 기본 규칙

```
return <div>Hello</div>;
```

얼핏 보면 HTML같은데 사실 JS이다.
리액트에서 XML형태로 코드를 작성하면 babel이 JSX를 JS로 변환해준다.
여기서 babel은 JS문법을 확장시켜주는 도구다 지원하지 않는 최신문법, 실험적인 문법들을 JS형태로 해줌으로써 실행 가능하게 해준다.

- 태그는 꼳 닫혀 있어야 한다
- input, br과 같은 태그도 Self Closing 사용
- 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야된다
- 단순히 div로 안감싸도 Frgment즉 <></>로 감싸도 된다
- {}로 JS 값 사용 가능
- 스타일은 backgroundColor처럼 camelCase형태 네이밍이다
- CSS class는 calssName으로 설정한다
- JSX내부 주석은 {/\* \*/}이다
- 열리는 태그 내부에선 //로 작성 가능
