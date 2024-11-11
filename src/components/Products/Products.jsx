import React from "react";
import "../Products/Products.css";
import { useContextMain } from "../../context/AppContext";
import CartItem from "../CartItem/CartItem";

const Products = () => {
  const { filteredProducts } = useContextMain();

  return (
    <section className="card-container">
      {filteredProducts.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Products;
