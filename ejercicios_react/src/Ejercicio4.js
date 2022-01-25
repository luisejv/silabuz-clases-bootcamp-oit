import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home2 from "./pages/Home2";
import UserInfo from "./pages/UserInfo";

const Ejercicio4 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home2 />}></Route>
          <Route path=":id" element={<UserInfo></UserInfo>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Ejercicio4;
