import React, { useState, useEffect } from "react";
import "./CartList.css";
import Footer from "../../components/Footer/Footer";

export default function CartList({ cart,handleRemoveItem }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const handleClearCart = () => {
    setCART([]);
    
  };
  return (
    <>
      <div className="cart-list-container">
        {CART?.map((cartItem, cartIndex) => {
          return (
            <div className="cart-item" key={cartIndex}>
              <div className="product-img">
                <img src={cartItem.image} alt="Product" />
              </div>
              <div className="item-details">
                <h2>{cartItem.title}</h2>
                <p>{cartItem.category}</p>
                <div className="quantity-control">
                  <button
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index
                          ? {
                              ...item,
                              quantity:
                                item.quantity > 0 ? item.quantity - 1 : 0,
                            }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => {
                      const _CART = CART.map((item, index) => {
                        return cartIndex === index
                          ? { ...item, quantity: item.quantity + 1 }
                          : item;
                      });
                      setCART(_CART);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="price">
                <h3>${cartItem.price * cartItem.quantity}</h3>
              </div>
              <div className="remove-items">
                <i
                  className="fas fa-trash-alt remove"
                  onClick={() => {
                    handleRemoveItem(cartIndex); 
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card-total">
        <h3>
          Cart Total:
          <span>
            $
            {CART.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </span>
          <div className="clear-cart">
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </h3>
      </div>

      <Footer />
    </>
  );
}
