import React from "react";
import "../Products/Product.css";
import { useState } from "react";
import Card from "../../../src/Card.js";
import CartList from "../../components/CartList/CartList";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";

//Data import
import productdata from "../../productdata.js";

export default function Product() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [count, setCount] = useState(0);
  //---------------ADD TO CART--------------//
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
    setCount(count + 1);
  };

  //------ Removimg the item at the specified index from the cart---------//
  const handleRemoveItem = (index) => {
    const updatedCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
    setCart(updatedCart);
    setCount(count - 1);
  };
  const handleClearCart = () => {
    setCart([]);
    setCount(0);
  };

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = productdata.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(productdata, selected, query) {
    let filteredProducts = productdata;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, price, title }) =>
          category === selected ||
          color === selected ||
          price === selected ||
          title === selected
      );
    }

    return filteredProducts.map((curElem) => (
      <Card
        key={Math.random()}
        image={curElem.image}
        title={curElem.title}
        category={curElem.category}
        star={curElem.star}
        reviews={curElem.reviews}
        price={curElem.price}
        addToCart={addToCart}
      />
    ));
  }

  const result = filteredData(productdata, selectedCategory, query);

  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <div>
      {showCart ? (
        <>
          <Navbar
            query={query}
            handleInputChange={handleInputChange}
            className="productnav"
            count={cart.length}
            handleShow={handleShow}
            setCart={setCart}
          ></Navbar>
          <CartList
            handleRemoveItem={handleRemoveItem}
            handleClearCart={handleClearCart}
            cart={cart}
          ></CartList>
        </>
      ) : (
        <>
          <Navbar
            query={query}
            handleInputChange={handleInputChange}
            className="navok"
            count={cart.length}
            handleShow={handleShow}
            setCart={setCart}
          ></Navbar>
          <Sidebar handleChange={handleChange}></Sidebar>
          <Products addToCart={addToCart} result={result}></Products>
        </>
      )}
    </div>
  );
}
