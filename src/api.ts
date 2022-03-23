import { start } from "repl";

const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchcoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const StartDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historycal?start=${StartDate}&end=${endDate}`
  ).then((response) => response.json());
}
