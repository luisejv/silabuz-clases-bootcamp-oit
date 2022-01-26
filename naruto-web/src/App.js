import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Character from "./pages/Character";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="/personaje/" element={<Layout></Layout>}>
          <Route path=":id" element={<Character></Character>}></Route>
        </Route>
        <Route path="/login" element={<Layout></Layout>}>
          <Route index element={<Login></Login>}></Route>
        </Route>
        <Route path="/register" element={<Layout></Layout>}>
          <Route index element={<Register></Register>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
