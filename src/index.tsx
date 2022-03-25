import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { drakTheme } from "./theme";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={drakTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
