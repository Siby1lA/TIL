import React from "react";

function test() {
  return (
    <>
      <Header>
        <div>
          <button
            onClick={() => {
              setSearchOpen(true);
            }}
          >
            물건 검색
          </button>
          <button onClick={() => navigate("/itemcode")}>코드 상품추가</button>
        </div>
        <div>
          <span>{userInfo?.username}님 환영합니다!</span>
          <button onClick={() => navigate("/mypage")}>마이페이지</button>
          <button onClick={() => Logout(userInfo?.socialType)}>로그아웃</button>
        </div>
      </Header>
      <ItemViewList />
      {searchOpen ? <ItemSearch /> : null}
    </>
  );
}

export default test;
