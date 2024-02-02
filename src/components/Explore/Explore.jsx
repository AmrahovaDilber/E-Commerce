import React from 'react'
import { Link } from "react-router-dom";
import '../Explore/Explore.css';
import img from '../../components/Explore/tablet_928.webp'


export default function Explore() {
  return (
    <div>
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>Explore The Collection!</h2>
            <Link to="/products" className="link">
              Shop Now
            </Link>
          </div>
          <div className="img_box">
            <img style={{width:"600px",height:"370px"}} src={img} alt="img"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
