import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
        {/* <Route path="/app">
          <Route path="profile" index element={<Profile />}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
