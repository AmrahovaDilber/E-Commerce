import React from "react";
import "../Series/Series.css";
import tech from "../../images/tech.png";
import { Link } from "react-router-dom";
export default function Series() {
  return (
    <div className="series">
      <div className="seriescontainer">
        <div className="leftside">
          <div className="iphone">
          
            <h3>Discover Our Latest Collection</h3>
          </div>
          <h2>Up to 10% Off on Selected Items!</h2>

          <Link to="products">
            <button className="shopNowButton">Shop All Products</button>
          </Link>
        </div>
        <div className="rightside">
          <img src={tech} alt="iphone"></img>
        </div>
      </div>
    </div>
  );
}
