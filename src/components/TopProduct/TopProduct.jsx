import React from "react";
import topproduct from "../../topproduct";
import "./TopProduct.css";
import CartItem from "../CartItem/CartItem";
import Title from "../Title/Title";

export default function TopProduct() {
  return (
    <div className="top-container">
      <Title>Best Selling Products</Title>
      <div className="topproduct-container">
        {topproduct.map((item, index) => (
          <CartItem key={item.id || index} item={item} />
        ))}
      </div>
    </div>
  );
}