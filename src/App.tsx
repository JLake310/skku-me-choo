import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@pages/Main";
import ReactGA from "react-ga";

if (process.env.NODE_ENV !== "production") {
  const gaTrackingId: string = process.env.REACT_APP_GA_TRACKING_ID!;
  ReactGA.initialize(gaTrackingId, { debug: true });
  ReactGA.pageview(window.location.pathname);
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
