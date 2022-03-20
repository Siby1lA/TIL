import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coins() {
  const { coinId } = useParams();
  return <h1>Coin : {coinId}</h1>;
}

export default Coins;
