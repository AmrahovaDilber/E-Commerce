import React, { useEffect, useState } from "react";
import { useContextMain } from "../../context/AppContext";
import CartItem from "../../components/CartItem/CartItem";
import "../CartPage/CartPage.css";
export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const { carts, fetchCartProducts } = useContextMain();

  useEffect(() => {
    const fetchedProducts = fetchCartProducts();
    console.log("Fetched Cart Products:", fetchedProducts);
    setCartProducts(fetchedProducts);
  }, [carts, fetchCartProducts]);

  return (
    <div className="cartpage">
      {cartProducts.length === 0 ? (
        <p className="cart-empty">Your Cart is Empty</p>
      ) : (
        <div className="cart-grid-container">
          {cartProducts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
