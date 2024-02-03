import React from "react";
import "../Category/Category.css";
import img2 from "../Category/Category-Computer.png";
import img1 from "../Category/Category-CellPhone.png";
import img3 from "../Category/Category-Camera.png";
import img4 from "../Category/Category-Headphone.png";
import img5 from '../Category/free-smart-watch-icon-2087-thumb.png';
import img6 from '../Category/table.png'
export default function Category() {
  return (
    <>
      <hr></hr>
      <h2 className="category">Browse By Category</h2>
      <div className="boxes">
        <div className="box1">
          <img src={img1} alt="img"></img>
          <p>Phones</p>
        </div>
        <div className="box1">
          <img src={img2} alt="img"></img>
          <p>Computers</p>
        </div>
        <div className="box1">
          <img
            src={img3}
            alt="img"
            style={{ width: "56px", height: "56px" }}
          ></img>
          <p>Camera</p>
        </div>

        <div className="box1">
          <img src={img4} alt="img"></img>
          <p>Headphones</p>
        </div>

        <div className="box1">
          <img className="watch" src={img5} alt="img"></img>
          <p>Smart Watch</p>
        </div>
        <div className="box1">
          <img className="tablet"src={img6} alt="img"></img>
          <p>Tablet</p>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
