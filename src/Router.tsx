import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="/:coinId" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
