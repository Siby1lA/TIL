# 1. API 연동의 기본

API를 호출하기 위해서 axios라는 라이브러리가 필요하다.

```
npm i axios
```

axios를 사용해서 GET, PUT, POST, DELETE등의 메서드로 API 요청을 할 수 있다.
이 메서드 들의 대하여 자세히 알아보기 : https://meetup.toast.com/posts/92

간단히 알아보면

- GET : 데이터 조회
- POST : 데이터 등록
- PUT : 데이터 수정
- DELETE : 데이터 제거
- 이외에 PATCH, HEAD도 있다.

```
import axios from 'axios';
axios.get('/users/1');
```

get이 위치한 자리는 메서드 이름을 소문자로 넣는다.
새로운 데이터를 등록하고 싶으면 `axios.post()`를 사용하고 파라미터에는 API의 주소를 넣는다.
axios.post()로 데이터를 등록할 땐 두 번째 파라미터에 등록하고자 하는 정보를 넣을 수 있다.

```
axios.post('/users', {
  username: 'blabla',
  name: 'blabla'
});
```

## API 연동 실습

JSONPlaceholder에 있는 연습용 API 사용 : https://jsonplaceholder.typicode.com/users

### useState와 useEffect로 데이터 로딩하기

`useState`로 요청 상태 관리, `useEffect`로 컴포넌트가 렌더링되는 시점에 요청
요청에 대한 상태관리 할 때는 총 3가지 상태를 관리해야 한다.

- 요청의 결과
- 로딩 상태
- 에러

```
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default Users;
```

useEffect에 첫번째 파라미터로 등록하는 함수에는 async를 못쓰기에 내부에서 새로 선언해야한다.

로딩 상태가 활성화시 `로딩중...`
users값이 아직 없을땐 `null`
마지막에는 `users` 배열을 렌더링
