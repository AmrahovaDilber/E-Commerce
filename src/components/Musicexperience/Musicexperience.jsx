import React, { useState, useEffect } from "react";
import "../Musicexperience/Musicexperience.css";
import music from "../../images/music.png";
import { Link } from "react-router-dom";

export default function Music() {
  const calculateTimeLeft = () => {
    const now = new Date();
const targetDate = new Date("2024-12-31T23:59:59");
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="music">
      <div className="musiccontainer">
        <div className="left">
          <h1>Enhance Your Music Experience</h1>
          <div className="buttons">
       
            <button>
              <span>{timeLeft.hours}</span>
              <br /> Hours
            </button>
            <button>
              <span>{timeLeft.minutes}</span>
              <br /> Minutes
            </button>
            <button>
              <span>{timeLeft.seconds}</span>
              <br /> Seconds
            </button>
          </div>
          <Link to="/products">
            {" "}
            <button className="buy">Buy Now!</button>
          </Link>
        </div>
        <div className="right">
          <img src={music} alt="img" />
        </div>
      </div>
    </div>
  );
}
