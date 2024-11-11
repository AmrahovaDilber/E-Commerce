import React from "react";
import "../Products/Product.css";
import { useState } from "react";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

//Data import

export default function Product() {
  const [cart, setCart] = useState([]);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      (
      <>
        <Navbar
          query={query}
          handleInputChange={handleInputChange}
          className="navok"
          count={cart.length}
          setCart={setCart}
        ></Navbar>
        <Sidebar></Sidebar>
        <Products></Products>
      </>
      )
    </div>
  );
}
