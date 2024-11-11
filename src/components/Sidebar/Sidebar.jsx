import React from "react";

import Price from "../Sidebar/Price/Price";
import Colors from "../Sidebar/Colors/Colors";
import "../Sidebar/Sidebar.css";
import { useContextMain } from "../../context/AppContext";
import FilterCategory from "./FilterCategory/FilterCategory";

export default function Sidebar() {
  const { handleCategoryChange, handleColorChange, handlePriceChange } =
    useContextMain();

  return (
    <section className="sidebar">
      <FilterCategory handleCategoryChange={handleCategoryChange} />
      <Colors handleColorChange={handleColorChange} />
      <Price handlePriceChange={handlePriceChange} />
    </section>
  );
}
