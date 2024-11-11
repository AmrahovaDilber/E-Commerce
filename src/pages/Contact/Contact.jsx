import React, { useState } from "react";
import "../Contact/Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";

export default function Contact() {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  // State variables to track empty fields
  const [emptyFields, setEmptyFields] = useState({
    Name: false,
    Email: false,
    Subject: false,
    Message: false,
  });

  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // Update emptyFields state based on input value
    setEmptyFields({ ...emptyFields, [name]: value.trim() === "" });
  };

  const sendContactData = async (e) => {
    e.preventDefault();
    const { Name, Email, Subject, Message } = user;
    // Basic form validation
    if (!Name || !Email || !Message) {
      alert("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      const res = await fetch(
        "https://e-commerce-680f4-default-rtdb.firebaseio.com/Message.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Email,
            Subject,
            Message,
          }),
        }
      );

      console.log(res);

      if (res.ok) {
        alert("Your message sent");
      } else {
        alert("An error occurred");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred");
    }
  };

  return (
    <>
      {/* Navbar and Contact Container */}
      <Navbar className="contactnav"></Navbar>
      <h2 className="contactus">#Contact Us</h2>
      <div className="contact-container">
        {/* Left Section */}
        <div className="contactleft">
          <div className="callto">
            <div className="calicon">
              <span className="contactic">
                <FaPhoneAlt />
              </span>
              <p style={{ marginTop: "11px", marginLeft: "5px" }}>Call To Us</p>
            </div>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr></hr>
          <div className="write">
            <div className="writeto">
              <span className="contactic">
                {" "}
                <CiMail />
              </span>

              <p style={{ marginTop: "11px", marginLeft: "5px" }}>
                Write To US
              </p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        {/* Right Section */}
        <form className="contactright" method="POST">
          <div className="top">
            <input
              type="text"
              name="Name"
              value={user.Name}
              placeholder="Your Name"
              onChange={data}
              className={emptyFields.Name ? "emptyField" : ""}
            ></input>
            {emptyFields.Name && (
              <p className="errorMessage">Name is required</p>
            )}
            <input
              type="email"
              name="Email"
              value={user.Email}
              placeholder="Your Email"
              onChange={data}
              className={emptyFields.Email ? "emptyField" : ""}
            ></input>
            {emptyFields.Email && (
              <p className="errorMessage">Email is required</p>
            )}
            <input
              type="text"
              name="Subject"
              value={user.Subject}
              placeholder="Your Phone"
              onChange={data}
              className={emptyFields.Subject ? "emptyField" : ""}
            ></input>
            {emptyFields.Subject && (
              <p className="errorMessage">Phone is required</p>
            )}
          </div>
          <input
            type="text"
            className={`righttext ${emptyFields.Message ? "emptyField" : ""}`}
            placeholder="Your message"
            value={user.Message}
            name="Message"
            onChange={data}
          ></input>
          {emptyFields.Message && (
            <p className="errorMessage">Message is required</p>
          )}
          <button onClick={sendContactData}>Send Message</button>
        </form>
      </div>

    </>
  );
}
