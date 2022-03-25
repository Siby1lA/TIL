import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";
interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}
function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="chart" element={<Chart isDark={isDark} />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
