import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Ejercicio4 />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
