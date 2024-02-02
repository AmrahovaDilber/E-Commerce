import React from "react";
import "../Home/Home.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Homeimage from "../../components/Homeimage/Homeimage";
import Music from "../../components/Musicexperience/Musicexperience.jsx";
import Series from "../../components/Series/Series.jsx";
import Section from "../../components/Section/Section.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Category from "../../components/Category/Category.jsx";
import Explore from "../../components/Explore/Explore.jsx";
import TopProduct from "../../components/TopProduct/TopProduct.jsx";
export default function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <div>
      <Navbar
        count={cart.length}
        handleShow={handleShow}
        className="homenav"
      ></Navbar>
      <Homeimage></Homeimage>
      <Explore></Explore>
      <Series></Series>
      <Category></Category>
      <TopProduct></TopProduct>
      <Music></Music>

      <Section></Section>
      <Footer></Footer>
    </div>
  );
}
