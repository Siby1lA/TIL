import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(rootReducer, devTools && devTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
