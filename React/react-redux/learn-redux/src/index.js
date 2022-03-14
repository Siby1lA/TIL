import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
