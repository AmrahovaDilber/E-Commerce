import "./App.css";
import Home from "./pages/Home/Home";
import Products from "../src/pages/Products/Product";
import Contact from "../src/pages/Contact/Contact";
import TapToTopButton from "./components/TapToTop/TapToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <TapToTopButton />
    </BrowserRouter>
  );
}

export default App;
