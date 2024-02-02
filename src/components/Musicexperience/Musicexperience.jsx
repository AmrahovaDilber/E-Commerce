import React from "react";
import "../Musicexperience/Musicexperience.css";
import music from "../../images/music.png";
import { Link } from "react-router-dom";
export default function Music() {
  return (
    <div className="music">
      <div className="musiccontainer">
        <div className="left">
          <h1>Enhance Your Music Experience</h1>
          <div className="buttons">
            <button>
              <span>23</span>
              <br></br> Hours
            </button>
            <button>
              <span> 05</span>
              <br></br> Days
            </button>
            <button>
              <span> 59</span>
              <br></br> Minutes
            </button>
            <button>
              <span> 35</span>
              <br></br> Seconds
            </button>
          </div>
          <Link to="/products">
            {" "}
            <button className="buy">Buy Now!</button>
          </Link>
        </div>
        <div className="right">
          <img src={music} alt="img"></img>
        </div>
      </div>
    </div>
  );
}
