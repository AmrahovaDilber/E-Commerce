import React from "react";
import topproduct from "../../topproduct";
import "./TopProduct.css";
import CartItem from "../CartItem/CartItem";

export default function TopProduct() {
  return (
    <div className="top-container">
      <h2 className="category">Best Selling Products</h2>
      <div className="topproduct-container">
        {topproduct.map((item, index) => (
          <CartItem key={item.id || index} item={item} />
        ))}
      </div>
    </div>
  );
}