import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  min-width: 1000px;
  min-height: 600px;
`;

const Left = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  background-color: #fafbfc;
`;
const LeftLine = styled.div`
  align-self: center;
  width: 94%;
  height: 94%;
  margin: 0 auto;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 10px;
  & > div:first-child,
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 1px 1px 3px 0px black;
    cursor: pointer;
    margin-right: 20px;
    & > svg {
      width: 20px;
    }
  }
`;
const SelectedItems = styled.div`
  background-color: white;
  height: 75%;
  margin-bottom: 10px;
  box-shadow: 1px 1px 3px black;
  position: relative;
`;
const AddButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  height: 45px;
  width: 200px;
  border-radius: 25px;
  border: 1px solid black;
  background-color: green;
  color: white;
  font-weight: bold;
  font-size: 17px;
`;
const SelectedInfo = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  & > :first-child {
    font-weight: bold;
    margin-bottom: 5px;
  }
  & > :last-child {
    font-size: 15px;
  }
`;
const Infos = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & > :last-child {
    margin-left: 40px;
  }
`;

const Infomation = styled.div`
  display: flex;
  flex-direction: column;
  & > :first-child {
    font-size: 14px;
  }
  & > :last-child {
    font-weight: bold;
    font-size: 19px;
    text-align: right;
  }
`;

//여기부턴 오른쪽메뉴
const Right = styled.div`
  width: 32%;
  height: 100%;
  background: #212121;
  color: white;
  position: relative;
`;
const RightTitle = styled.div`
  background-color: black;
  font-weight: bold;
  padding: 12px 0;
  padding-left: 15px;
  font-size: 18px;
  position: relative;
  & > svg {
    width: 20px;
    fill: white;
    position: absolute;
    top: 50%;
    right: 14px;
    transform: translateY(-50%);
  }
`;

const Lists = styled.div`
  overflow: scroll;
  height: calc(100% - 100px);
  ul,
  li {
    list-style: none;
  }
  li {
    padding: 7px 0;
    font-weight: bold;
    font-size: 18px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  height: 70px;
  position: absolute;
  bottom: 0;
  width: 100%;
  & > button {
    width: 50%;
    color: white;
    border: none;
    font-size: 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserInfoHeader = styled.div`
  display: flex;
  font-size: 18px;
  div:last-child,
  div:first-child {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    padding: 5px;
    background-color: white;
    box-shadow: 1px 1px 3px 0px black;
  }
  div:last-child {
    cursor: pointer;
  }
`;

function App() {
  return (
    <Container>
      <Left>
        <LeftLine>
          <Header>
            <Icons>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill={"black"}
                >
                  <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill={"black"}
                >
                  <path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z" />
                </svg>
              </div>
            </Icons>
            <UserInfoHeader>
              <div>Welcome! 수빈</div>
              <div>Logout</div>
            </UserInfoHeader>
          </Header>
          <SelectedItems>
            <AddButton>Add PLU Item</AddButton>
          </SelectedItems>
          <SelectedInfo>
            <InfoText>
              <span>Done Shopping?</span>
              <span>Exit through the Amazon Dash Cart lane</span>
            </InfoText>
            <Infos>
              <Infomation>
                <span>items</span>
                <span>0</span>
              </Infomation>
              <Infomation>
                <span>SUBTOTAL</span>
                <span>$0.00</span>
              </Infomation>
            </Infos>
          </SelectedInfo>
        </LeftLine>
      </Left>

      <Right>
        <RightTitle>
          <span>DAMA Shoppinng</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </RightTitle>

        <Lists></Lists>
        <RightMenu>
          <button
            style={{
              backgroundColor: "black",
            }}
          >
            Alexa List
          </button>
          <button
            style={{
              backgroundColor: "black",
            }}
          >
            Coupons
          </button>
        </RightMenu>
      </Right>

      <div
        style={{
          backgroundColor: "blue",
          color: "white",
        }}
      ></div>
    </Container>
  );
}

export default App;
