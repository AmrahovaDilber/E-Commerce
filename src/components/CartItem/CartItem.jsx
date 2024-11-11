import React from "react";
import { IoCartOutline } from "react-icons/io5";
import "./CartItem.css";
import { useContextMain } from "../../context/AppContext";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

export default function CartItem({ item }) {
  const {
    favorites,
    carts,
    handleAddToCart,
    handleRemoveFromCart,
    handleAddToFavorites,
    handleRemoveFromFavorites
  } = useContextMain();
  const isBasket = carts?.includes(item.id);
  const isFavorite = favorites?.includes(item.id);
  return (
    <div className="cart-container">
      <div className="card-img">
        <img src={item.image} alt={item.title} />

        {isBasket ? (
          <button
            className="add-cart"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            <IoCartOutline size={24} />
            <p>Remove From Cart</p>
          </button>
        ) : (
          <button className="add-cart" onClick={() => handleAddToCart(item.id)}>
            <IoCartOutline size={24} />
            <p>Add To Cart</p>
          </button>
        )}
        {isFavorite ? (
          <button
            className="add-favorites"
            onClick={() => handleRemoveFromFavorites(item.id)}
          >
            <MdOutlineFavorite
            style={{color:"red"}}  size={24} />
          </button>
        ) : (
          <button
            className="add-favorites"
            onClick={() => handleAddToFavorites(item.id)}
          >
            <MdOutlineFavoriteBorder size={24} />
          </button>
        )}
      </div>

      <div className="cart-info">
        <p className="title">{item.title}</p>
        <p className="price">${item.price}</p>
        <p className="cart-info-category">{item.category}</p>
        <p className="reviews">{item.reviews} reviews</p>
      </div>
    </div>
  );
}
