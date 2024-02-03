import React from "react";
import topproduct from "../../topproduct";
import "../../components/TopProduct/TopProduct.css";

export default function TopProduct() {
  return (
    <div>
      <h2 className="category">Best Selling Products</h2>
      <section className="topproduct-container">
        {topproduct.map((item) => (
          <section className="card" key={item.title}>
            <img
              src={item.image}
              alt={item.title}
              className="card-img"
              style={{ width: "185px", height: "150px" }}
            />
            <div className="card-details">
              <h3 className="card-title">{item.title}</h3>
              <div style={{ marginBottom: "5px" }}>{item.category}</div>
              <section className="card-reviews">
                {item.star} {item.star} {item.star} {item.star}
                <span className="total-reviews">{item.reviews}</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <span>{item.price}</span>
                </div>
              </section>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}
