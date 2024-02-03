import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import { FaSearch, FaHeart } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import "../Navbar/Navbar.css";

function Navbar({
  className,
  handleInputChange,
  prevCart,
  setCart,
  query,
  count,
  handleShow,
}) {
  const location = useLocation();
  const isProductsPage = location.pathname === "/products";

  return (
    <div className={className}>
      <div className="part1">
        (
          <h2>
            "Tech Extravaganza! Save 50% on All Gadgets with Free Express
            Delivery!"
            <Link to="/products" className="shopnow">
              ShopNow
            </Link>
          </h2>
        )
      </div>
      <div className="part2">
        <img src={logo} alt="logo"></img>
        <div className="part2mid">
          <Link to="/" className="page">
            Home
          </Link>
          <Link
            to="/products"
            className="page"
            onClick={() => handleShow(false)}
          >
            Products
          </Link>
          <Link to="/contact" className="page">
            Contact
          </Link>
        </div>
        <div className="part2end">
          <div className="search-bar">
            <div className="input-container">
              <input
                onChange={handleInputChange}
                value={query}
                type="text"
                placeholder="What are you looking for?"
              />
              <FaSearch className="search-icon" />
            </div>
          </div>
          {isProductsPage ? (
            <div className="navicons">
              <span
                onClick={() => {
                  handleShow(true);
                }}
              >
                <IoBagCheck className="navicon" />
                {count}
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;