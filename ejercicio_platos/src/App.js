import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Filter from "./pages/Filter";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path=":filtro" element={<Filter></Filter>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
