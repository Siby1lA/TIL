import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import promissMiddleware from "redux-promise";
import reduxThunk from "redux-thunk";
import Reducer from "./redux/reducer";
const createStoreMiddleware = applyMiddleware(
  promissMiddleware,
  reduxThunk
)(createStore);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider
      store={createStoreMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>
);
