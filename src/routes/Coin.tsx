import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface RouterState {
  state: {
    name: string;
    rank: string;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouterState;
  return (
    <Container>
      <Header>
        <Title>
          {state?.name || "Loading.."}, {state?.rank || "Loading.."}
        </Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}

export default Coin;
