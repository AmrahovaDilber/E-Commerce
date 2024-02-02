import React from "react";
import Filter from "../Sidebar/Filter/Filter";
import Price from "../Sidebar/Price/Price";
import Colors from "../Sidebar/Colors/Colors";
import "../Sidebar/Sidebar.css";

export default function Sidebar({ handleChange }) {
  return (
    <>
      <section className="sidebar">
        <Filter handleChange={handleChange}></Filter>
        <Price handleChange={handleChange}></Price>
        <Colors handleChange={handleChange}></Colors>
      </section>
    </>
  );
}
