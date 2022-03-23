import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery(coinId ? ["ohlcv", coinId] : "", () =>
    fetchCoinHistory(coinId ? coinId : "")
  );
  return <h1>Chart</h1>;
}

export default Chart;
