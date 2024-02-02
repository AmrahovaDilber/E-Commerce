import React from "react";
import "../Products/Products.css";
import Navbar from "../Navbar/Navbar";

const Products = ({ result }) => {
  return (
    <>

      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;