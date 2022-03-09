# 벨로퍼트님의 모던 리액트

# 1장 리액트 입문

## 1. 리액트는 어쩌다 만들어졌을까?

- 기존의JS의 DOM을 건드리는 작업은 번거롭고 난잡하다.
- 리액트는 DOM을 다 날려버리고 다시 만들어서 보여준다.
- 메모리에 가상DOM을 만들어서 성능과 속도도 잡음
- 가상DOM과 브라우저DOM을 비교해 변경된 부분만 패치

## 2. 작업환경 준비

- Node.js: Webpack, Babled사용하기 위해 기반인 Node.js가 필요
- VSCode : 내가 주로 사용하는 에디터

### 새 리엑트 프로젝트 생성

```
$ npx create-react-app app-name
```

## 3. 리액트 컴포넌트

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

## 4. JSX의 기본 규칙

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

## 5. props 를 통해 컴포넌트에게 값 전달하기

- props는 properties의 줄임말
- 어떠한 값을 컴포넌트에게 전달할 때 props를 사용

### props 기본 사용법

```
<Hello name="react" />
```

다른 컴포넌트에서 Hello 컴포넌트를 사용 할 때 name이라는 값을 전달한다.

```
import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

export default Hello;
```

파라미터를 통해 조회 가능하다. name값을 조회하려면 props.name을 쓴다

```
function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}
```

비 구조화 할당으로 더 간결하게 작성 가능하다.

```
Hello.defaultProps = {
  name: '이름없음'
}
```

props를 지정하지 않았을 때 기본값으로 설정하고 싶다면 defaultprops로 설정한다

```
import React from 'react';
function Wrapper() {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
    </div>
  )
}
```

컴포넌트 태그 사이에 넣은 값을 조회 할 땐 props.children을 사용

```
<Wrapper>
    <Hello name="react" color="red"/>
    <Hello color="pink"/>
</Wrapper>
```

위처럼 하면 Hello 컴포넌트가 보여지지 않는다

```
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}
```

하지만 Wrapper에서 props.children을 렌더링 해주면 가능하다

## 6. 조건부 렌더링

```
{ isSpecial ? <b>*</b> : null }
```

가장 기본인 삼항연산자로 isSpecial값이 true면 \* 아니면 null을 보여준다.

```
{isSpecial && <b>*</b>}
```

true면 보여주고 아니면 숨기는 상황에서는 && 연산자가 더 간편하다.

```
<Hello name="react" color="red" isSpecial />
```

props 값 설정시 이름만 작성하고 값을 생략하면 ={true}로 설정한거와 같다.

## 7. useState

리액트16.8부터 Hooks라는 기능이 생겨 함수형 컴포넌트에도 상태관리가 가능하다
usState는 리액트 Hooks 중 하나

리액트에서 엘리먼트에 이벤트 설정할땐 `on이벤트명={함수}` 형태이다

- onClick={onClick()} 이처럼 함수형태가 아닌 함수를 실행하면 렌더링시 호출되어버림 {OnClick}로 해야한다

```
const [number, setNumber] = useState(0);
```

useState를 선언 방식이다, 첫번째 원소는 현 상태, 두번째 원소는 Setter함수이다.
number의 값을 변경하려면 setNumber(값)을 넣어주면 된다

## 8. Input 상태 관리

- input의 onChange를 사용하면 이벤트 객체 e를 파라미터로 받아올 수 있다.
- e.target은 이벤트가 발생한 DOM을 가리킨다.
- e.target.value를 조회하면 input의 value을 알 수 있다.
- input 상태관리시 value값도 설정해줘야 input 업데이트된다.

## 9. 여러개의 Input 상태 관리

input의 개수가 여러개 일땐 단순히 useState를 여러번 사용하고 onChange 도 여러개 만들어서 구현은 가능하지만 좋은 방법은 아니다.

```
const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
```

객체형식으로 설정

```
const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      // name에 대괄호 생략시 문자열 name으로 인식
      // 위에 선언한 객체의 name 값을 바꿔주는 것이다.
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };
```

```
<input name="name" placeholder="이름" onChange={onChange} />
<input name="nickname" placeholder="닉네임" onChange={onChange} />
```

name 속성으로 인해 어떤 tag를 수정하였는지 알 수 있어 객체형식인 하나의 useState로 name, nickname을 관리할 수 있음

### 객체 상태 업데이트 주의점

- 기존의 객체 상태를 복사
- 그 값에서 특정 값을 덮음
- 그 값을 새로운 상태로 설정
- 이게 불변성을 지킨다고도 함
- 불변성을 지켜야 업뎃을 감지 하고 렌더링

## 10. useRef로 특정 DOM 선택

JS에서 특정 DOM을 선택할 때는 `getElementByID`, `querySelector` 같은 DOM Selector함수를 사용한다.
리액트에서는 `useRef`라는 Hook를 사용한다.

```
const nameInput = useRef();
const onClick = () => {
    nameInput.current.focus();
}
return(
    <input ref={nameInput} />
    <button onClick={onClick}>클릭</button>
)
```

- useRef로 객체를 생성하
- 원하는 DOM에 ref={}의 형태로 작성
- .current의 값은 우리가 지정한 DOM을 가르킴
- nameInput.current.focus()형태로 사용

## 11. 배열 렌더링하기

```
<div>
    <User user={users[0]} />
    <User user={users[1]} />
    <User user={users[2]} />
</div>
```

배열이 고정적일땐 상관없지만 인덱스 하나하나 조회하면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못한다. 그래서 JS의 내장함수 `map()`을 사용한다.
`map()`함수는 배열안에 있는 각 원소를 변환해 새로운 배열을 만든다.
arr.map(i => )형태로 값 전달
Map에서는 Key가 필요하다. key값이 없다면 중간 값 변경시 하위 값들이 전부 변한다.

```
function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}
```

## 12. useRef로 컴포넌트 안의 변수 만들기

`useRef`는 DOM을 선택하는 용도 외에도 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리할 수 있다.
`useRef`로 관리하는 변수는 값이 바뀌어도 리렌더링되지 않는다.
useRef()에 파라미터를 넣어주면 이 값이 .current 값의 기본값이다.

## 13. 배열에 항목 추가하기

spread 연산자 사용

- setUsers([...users, user]);

concat 함수 사용

- setUsers(users.concat(user));

## 14. 배열에 항목 제거하기

```
<button onClick={() => onRemove(user.id)}>
```

위와 같이 태그에서 변수를 전달

```
const onRemove = id => {
// user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
// = user.id 가 id 인 것을 제거함
setUsers(users.filter(user => user.id !== id));
};
```

## 15. 배열에 항목 수정하기

boolean 값으로 자주 사용한다.

- 수정시 불변성 지켜줌(state)
- 수정시 map과 if문을 비교
- style 속성에도 js사용 가능
- boolean으로 on/off시 onToggle이란 함수명을 자주 사용

## 16. useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정

- 마운트 : 컴포넌트가 처음 나타날 때
- 언마운트 : 컴포넌트가 사라질 때
- 업데이트 : 특정 props가 바뀔 때

마운트시 주로 하는 작업

- props로 받은 값을 컴포넌트의 로컬 상태로 설정
- 외부 API 요청
- 라이브러리 사용
- setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약

언마운트시 주로 하는 작업

- setInterval, setTimeout의 작업들 clear
- 라이브러리 인스턴스 제거

### useEffect구조

- Hook 함수
- 첫번째 인자는 함수, 두번째 인자는 배열(deps)

### cleanup //언마운트

- useEffect안에서 return 할 때 실행
- useEffectdml 뒷정리

### deps

- deps에 특정 값을 넣게 되면 처음과 값이 변경될 때 호출
- deps에 값이 없다면 최신 값을 가리키지 않음
- deps에 값이 없다면 컴포넌트 리렌더링 될 때마다 호출

## 17. useMemo를 사용하여 연산한 값 재사용

- Memo는 memoized를 의미 이는 이전에 계산한 값을 재사용한다는 의미
- 첫번째 인수에는 함수 , 두번째 인수에는 배열
- 두번째 인수의 값이(deps) 바뀔때만 함수 실행
- 두번째 인수의 값이(deps) 안바뀌면 이전의 값을 재사용

## 18. useCallback 을 사용하여 함수 재사용하기

```
const function = useCallback(() => {
}, [])
```

`useCallback`은 `useMemo`와 비슷한 Hook이다.

- 두번째 인자의 값이 변경될 때 까지 재사용
- 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
- useMemo와 비슷, useMemo 기반이기 때문
- deps 배열에 꼭 함수 안에서 사용하는 상태 혹은 props를 넣음
- 랜더링되어도 함수의 값이 바뀌지 않는 한 기존 함수 반환

단순히 컴포넌트 내에서 함수를 반복해서 생성하지 않기 위해 useCallback()을 사용하는건 큰 의미가 없거나 오히려 손해인 경우가 있는데
언제 `useCallback()`를 써야 의미있는 성능 향상을 기대할 수 있을까

### 의존 배열로 함수를 넘길 때

많은 Hook 함수들이 불필요한 작업을 줄이기 위해 두 번째 인자로, 첫 번째 함수가 의존해야 하는 배열을 받는다.
예로 `useEffect()`함수는 두 번째 인자로 넘어온 의존 배열이 변경될 때 첫 번째 인자로 넘어온 함수를 호출한다.

```
import React, { useState, useEffect } from "react";

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  const fetchUser = () =>
    fetch(`https://your-api.com/users/${userId}`)
      .then((response) => response.json())
      .then(({ user }) => user);

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, [fetchUser]);

  // ...
}
```

위의 코드를 보면 무한루프가 발생한다
deps를 보면 fetchUser가 변경될 때만 호출이 되는데
첫번째 인자가 fetchUser의 user값을 변경시켜 결국 무한 반복이 된다.

```
import React, { useState, useEffect } from "react";

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(
    () =>
      fetch(`https://your-api.com/users/${userId}`)
        .then((response) => response.json())
        .then(({ user }) => user),
    [userId]
  );

  useEffect(() => {
    fetchUser().then((user) => setUser(user));
  }, [fetchUser]);

  // ...
}
```

이와 같은 상황에서 `useCallback()`을 이용해 userId가 변경되지 않는 한 재호출을 (리렌더링)방지할 수 있다.

## 19. React.memo 를 사용한 컴포넌트 리렌더링 방지

`React.memo()`함수로 컴포넌트를 감싸주면 해당 컴포넌트는 props 값이 변경되지 않는 한 다시 호출되지 않는다.

사용 예 :

```
import React from "react";

function Light({ room, on, toggle }) {
  console.log({ room, on });
  return (
    <button onClick={toggle}>
      {room} {on ? "💡" : "⬛"}
    </button>
  );
}
```

위의 컴포넌트를 아래 React.memo로 감싸준다

```
Light = React.memo(Light);
```

Light의 props가 변경되지 않는 한 다시 호출되지 않는다.

```
import React, { useState, useCallback } from "react";
function SmartHome() {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  const toggleMaster = () => setMasterOn(!masterOn);
  const toggleKitchen = () => setKitchenOn(!kitchenOn);
  const toggleBath = () => setBathOn(!bathOn);

  return (
    <>
      <Light room="침실" on={masterOn} toggle={toggleMaster} />
      <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" on={bathOn} toggle={toggleBath} />
    </>
  );
}
```

SmartHome를 이용해서 침실의 조명을 켜보면 침실뿐만이 아니라 주방과 욕실까지 모든 방에 대한 Light 컴포넌트 함수가 호출된다.

조명을 키거나 크는 방의 Light 컴포넌트 함수를 호출하려고 React.memo()를 사용했는데 왜 그럴까?

toggle()함수들의 참조값이 SmartHoe 컴포넌트가 랜더링될 때 마다 모두 바뀌어버려서 그렇다.

해결법은 모든 toggle 함수를 useCallback()으로 감싸고 두번 째 인자로 각 함수가 의존하고 있는 상태를 배열로 넘긴다.

```
const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
```

이 후 조명을 켜보면 해당 Light 컴포넌트 함수만 호출 될 것이다.

## 20. useReducer 를 사용하여 상태 업데이트 로직 분리하기

현재 컴포넌트가 아닌 다른 곳에 state를 저장하고 싶을 때 사용
여러개의 하위값을 포함하는 복잡한 State를 다루어야 할 때 사용

```
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}
```

우선 useReducer Hook 함수를 알기 전에 reducer가 뭔지 설명하자면
reducer는 현재 상태와 액션 객체를 파라미터로 받아와 새로운 상태를 반환해주는 함수입니다.
reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.

### useReducer 형태

- reducer : state를 업데이트 하는 역할
- dispatch : state 업데이트를 위한 요구
- action : 요구 내용

```
const [state, dispatch] = useReducer(reducer, initialState);
```

여기서 `state`는 초기값이 `initialState` 이며 reducer를 통해서만 업데이트 가능하다.
단 dispatch를 불러서 가능 부르면 reducer가 호출된다. 이 dispatch는 인자로 action을 전달한다 action을 통해서 state를 업데이트

사용 예

```
import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}
export default Counter;
```

## 21. 커스텀 Hooks 만들기

컴포넌트를 만들다보면 반복되는 로직이 자주 발생한다.
예를 들어 input을 관리하는 코드는 관리 할 때마다 비슷한 코드가 반복되기에 이러한 상황에 커스터 Hooks를 만들어 반복되는 로직을 재사용하면 좋다.

간단한 사용 예

```
import { useState } from "react";
const useInput = (init, vail) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let will = true;
    if (typeof vail === "function") {
      will = vail(value);
    }
    if (will) {
      setValue(value);
    }
  };
  return { value, onChange };
};
const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
export default App;
```

## 22. Context API

Context는 앱 안에서 전역적으로 사용 할 수 있는 값을 관리 할 수 있다.
하지만 Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있기에 꼭 필요할때만 사용하자

```
export const UserDispatch = React.createContext(null);
```

먼저 `Context`를 생성하는데 보통 js파일을 따로 만든다.
위의 코드를 Context.js파일의 코드라고 생각하자

```
<Context.Provider value={}></Context.Provider>
```

사용 방법은 컴포넌트를 Provider로 감싸주고 값은 value에 넣는다 Provider로 감싸진 하위 컴포넌트들은 언제든지 Context값을 조회 가능하다.

```
import React , {useContext} from 'react';
import {Context} from 'Context';
const app = () => {
    //구조화 해서 사용한다.
    const {value} = useContext(Context);
}
```
