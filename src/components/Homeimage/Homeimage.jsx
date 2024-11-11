import React from "react";
import "../Homeimage/Homeimage.css";
import img1 from "../../images/main-banner-1.jpg";
import img2 from "../../images/catbanner-01.jpg";
import img3 from "../../images/catbanner-02.jpg";
import img4 from "../../images/catbanner-03.jpg";
import img5 from "../../images/catbanner-04.jpg";
import { Link } from "react-router-dom";

function Homeimage() {
  return (
    <div className="home-banner-grid">
      {/* Main Banner on the left */}
      <div className="main-banner">
        <img src={img1} alt="img" className="img-fluid" />
        <div className="main-banner-content">
          <h4>
            SUPERCHARGED<br /> FOR PROS
          </h4>
          <h5>IPad S13+ Pro</h5>
          <p>From $999.00 or $41.62/mo.</p>
          <Link to="/products" className="buy-now-link">
            BUY NOW!
          </Link>
        </div>
      </div>

      {/* 2x2 grid of small banners */}
      <div className="small-banners">
        <div className="small-banner">
          <img src={img2} alt="img" className="img-fluid" />
          <div className="small-banner-content">
            <h4>Best Sake</h4>
            <h5>IPad S13+ Pro</h5>
            <p>From $999.00<br /> or $41.62/mo.</p>
          </div>
        </div>
        <div className="small-banner">
          <img src={img3} alt="img" className="img-fluid" />
          <div className="small-banner-content">
            <h4>NEW ARRIVAL</h4>
            <h5>Smartwatch 7</h5>
            <p>Shop the latest band<br />styles and colors</p>
          </div>
        </div>
        <div className="small-banner">
          <img src={img4} alt="img" className="img-fluid" />
          <div className="small-banner-content">
            <h4>
              SUPERCHARGED<br /> FOR PROS
            </h4>
            <h5>But IPad Air</h5>
            <p>$999.00<br /> or $41.62/mo.</p>
          </div>
        </div>
        <div className="small-banner">
          <img src={img5} alt="img" className="img-fluid" />
          <div className="small-banner-content">
            <h4>Free Engraving</h4>
            <h5>AirPods Max</h5>
            <p>High-fidelity playback<br />& ultra-low distortion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeimage;
