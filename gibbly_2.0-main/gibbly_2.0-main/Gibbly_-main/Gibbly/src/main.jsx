import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { Loader } from "./Loader.jsx";
import { Canvas, events } from "@react-three/fiber";
import Popover from "./Popover.jsx";
import { RecoilRoot } from "recoil";
import Popovernext from "./Popovernext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Host from "./Host.jsx";
import AddManually from "./AddManually.jsx";
import Pdf from "./Pdf.jsx";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Settings from "./Pages/Settingcard.jsx";
import Upgrade from "./Pages/Upgrade.jsx";
import Home from "./Pages/Home.jsx";
import Class from "./Pages/Class.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import CreditCard from "./Pages/CreditCard.jsx";

const AppWrapper = () => {
  let [enable, setenable] = useState(true)

  useEffect(() => {
    document.querySelectorAll("button").forEach((ele) => {
      console.log(ele)
      ele.addEventListener("click", (event) => {
        console.log(1)
        let utterance = new SpeechSynthesisUtterance(`${event.target.innerText}`);
        console.log(utterance)
        speechSynthesis.speak(utterance) 
        
      })
    });
    


  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/pages/Settingcard" element={<Settings />} />
        <Route path="/pages/Upgrade" element={<Upgrade />} />
        <Route path="/pages/Class" element={<Class />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Register" element={<Register />} />
        <Route path="/credit" element={<CreditCard />} />
        <Route
          path="/creating"
          element={
            <RecoilRoot>
              <App />
            </RecoilRoot>
          }
        />
        <Route
          path="/create"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <RecoilRoot>
                <Popovernext />
                <Popover />
              </RecoilRoot>
            </Suspense>
          }
        />
        <Route
          path="/loader"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <div id="loader">
                <Canvas>
                  <Loader />
                </Canvas>
              </div>
            </Suspense>
          }
        />
        <Route
          path="/host"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Host />
            </Suspense>
          }
        />
        <Route path="/manually" element={<AddManually />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppWrapper />);
