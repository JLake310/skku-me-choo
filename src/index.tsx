import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const isMobile = function () {
  const match = window.matchMedia("(pointer:coarse)");
  return match && match.matches;
};

const GlobalStyle = createGlobalStyle`
  html{
    font-size: ${
      isMobile() ? window.innerWidth / 390 : window.innerHeight / 844
    }px;
  }
`;
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <App />
    <GlobalStyle />
  </>
);
