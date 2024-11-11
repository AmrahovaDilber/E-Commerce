import React from "react";
import "../Home/Home.css";
import Homeimage from "../../components/Homeimage/Homeimage";
import Series from "../../components/Series/Series.jsx";
import Section from "../../components/Section/Section.jsx";
import Category from "../../components/Category/Category.jsx";
import Explore from "../../components/Explore/Explore.jsx";
import TopProduct from "../../components/TopProduct/TopProduct.jsx";
export default function Home() {
  return (
    <div>
      <Homeimage></Homeimage>
      <Explore></Explore>
      <Series></Series>
      <Category></Category>
      <TopProduct></TopProduct>

      <Section></Section>
    </div>
  );
}
