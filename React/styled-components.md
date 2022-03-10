# styled-components

```
import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

function App() {
  return <Circle />;
}

export default App;
```

styled-components를 사용하면 이렇게 스타일을 가진 컴포넌트를 생성할 수 있다. 위의 코드는 `div`를 스타일링 하기 위해 `styled.div` 를 썻다.

```
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
`;

function App() {
  return <Circle color="blue" />;
}
```

스타일 컴포넌트에 props 값을 설정해서 사용 가능하다.
