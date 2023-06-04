import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectPage from "@pages/SelectPage";
import JaGwaPage from "@pages/JaGwaPage";
import InSaPage from "@pages/InSaPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SelectPage />}></Route>
            <Route path="/jagwa" element={<JaGwaPage />}></Route>
            <Route path="/insa" element={<InSaPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Analytics />
    </>
  );
}

export default App;
