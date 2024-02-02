import React from "react";
import { MdTrolley } from "react-icons/md";
// import { ImHeadphones } from "react-icons/im";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import "../Section/Section.css";
export default function Section() {
  return (
    <>
      <div className="circles">
        <div className="circle1">
          <div className="trolleyIconParent">
            <div className="trolleyIcon">
              <MdTrolley fontSize={"1.2rem"} />
            </div>
          </div>
          <h4>FREE AND FAST DELIVERY </h4>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="circle2">
          <div className="trolleyIconParent">
            <div className="trolleyIcon">
              <MdTrolley fontSize={"1.2rem"} />
            </div>
          </div>

          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="circle3">
          <div className="trolleyIconParent">
            <div className="trolleyIcon">
              <IoShieldCheckmarkOutline fontSize={"1.2rem"} />
            </div>
          </div>
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </>
  );
}
