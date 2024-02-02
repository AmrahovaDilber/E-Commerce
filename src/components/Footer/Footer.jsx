import React from "react";
import "../Footer/Footer.css";
import img1 from "../../components/Footer/image1.jpeg";
import img2 from "../../components/Footer/image2.png";
import img3 from "../../components/Footer/image3.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="sectioncontainer">
      <div className="sections">
        <div className="section1">
          <h3>Exclusive</h3>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input
            type="email"
            className="email"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="section2">
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="section3">
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
        </div>
        <div className="section4">
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="section5">
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="images">
            <img src={img1} style={{ width: 76, height: 76 }} alt="img" />
            <img src={img2} style={{ width: 104, height: 100 }} alt="img"></img>
            <img src={img3} style={{ width: 104, height: 100 }} alt="img"></img>
          </div>
          <div className="icon-container">
            <li className="icon-item">
              <a href="https://www.facebook.com">
                <FaFacebook className="facebook-icon" />
              </a>
            </li>
            <li className="icon-item">
              <a href="https://www.instagram.com">
                <FaInstagram className="instagram-icon" />
              </a>
            </li>
            <li className="icon-item">
              <a href="https://twitter.com">
                <FaTwitter className="twitter-icon" />
              </a>
            </li>
            <li className="icon-item">
              <a href="https://www.youtube.com">
                <FaYoutube className="youtube-icon" />
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
