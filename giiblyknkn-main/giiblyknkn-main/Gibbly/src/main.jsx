import { React, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { Loader } from "./Loader.jsx";
import { Canvas } from "@react-three/fiber";
import Popover from "./Popover.jsx";
import { RecoilRoot } from "recoil";
import Popovernext from "./Popovernext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Host from "./Host.jsx";
import AddManually from "./AddManually.jsx";
import Pdf from "./Pdf.jsx";
import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settingcard";
import Upgrade from "./Pages/Upgrade";
import Home from "./Pages/Home.jsx";
import Class from "./Pages/Class";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/pages/Settingcard" element={<Settings />} />
        <Route path="/pages/Upgrade" element={<Upgrade />} />
        <Route path="/pages/Class" element={<Class />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Register" element={<Register />} />

        <Route
          path="/creating"
          element={
            <RecoilRoot>
              <App />
            </RecoilRoot>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <Suspense fallback={<></>}>
              <RecoilRoot>
                <Popovernext />
                <Popover />
              </RecoilRoot>
            </Suspense>
          }
        ></Route>

        <Route
          path="/loader"
          element={
            <Suspense fallback={<> </>}>
              <div id="loader">
                <Canvas>
                  <Loader />
                </Canvas>
              </div>
            </Suspense>
          }
        ></Route>

        <Route
          path="/host"
          element={
            <Suspense fallback={<> </>}>
              <Host />
            </Suspense>
          }
        ></Route>

        <Route path="/manually" element={<AddManually />}></Route>

        <Route path="/pdf" element={<Pdf />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);
