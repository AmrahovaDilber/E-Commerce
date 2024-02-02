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
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container--xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner">
                <img src={img1} alt="img" className="img-fluid"></img>
                <div className="main-banner-content">
                  <h4>
                    SUPERCHARGED<br></br> FOR PROS
                  </h4>
                  <h5>IPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link to="/products" className="buy-now-link">
                    BUY NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="home-banner-container">
                {/* image1*/}
                <div className="small-banner">
                  <img src={img2} alt="img" className="img-fluid"></img>
                  <div className="small-banner-content">
                    <h4>Best Sake</h4>
                    <h5>IPad S13+ Pro</h5>
                    <p>
                      From $999.00<br></br> or $41.62/mo.
                    </p>
                  </div>
                </div>
                {/* image2 */}
                <div className="small-banner">
                  <img src={img3} alt="img" className="img-fluid"></img>
                  <div className="small-banner-content">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band<br></br>styles and colors From
                    </p>
                  </div>
                </div>

                {/*image3*/}
                <div className="small-banner">
                  <img src={img4} alt="img" className="img-fluid"></img>
                  <div className="small-banner-content">
                    <h4>
                      SUPERCHARGED<br></br> FOR PROS
                    </h4>
                    <h5>But IPad Air </h5>
                    <p>
                      $999.00<br></br> or $41.62/mo.
                    </p>
                  </div>
                </div>

                {/*image4*/}
                <div className="small-banner">
                  <img src={img5} alt="img" className="img-fluid"></img>
                  <div className="small-banner-content">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback&
                      <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Homeimage;
