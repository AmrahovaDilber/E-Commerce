import React from "react";
import "../Series/Series.css";
import icon from "../../images/iphoneicon.png";
import iphone from "../../images/iphone.jpeg";
import { Link } from "react-router-dom";
export default function Series() {
  return (
    <div className="series">
      <div className="seriescontainer">
        <div className="leftside">
          <div className="iphone">
            <img src={icon} alt="img"></img>
            <h3>iPhone 14 Series</h3>
          </div>
          <h2>Up to 10% off Voucher</h2>
          <Link to="products">
    
            <button className="shopNowButton">Shop Now</button>
          </Link>
        </div>
        <div className="rightside">
          <img src={iphone} alt="iphone"></img>
        </div>
      </div>
    </div>
  );
}
