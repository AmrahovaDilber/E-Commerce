import React, { useEffect, useState } from "react";
import { useContextMain } from "../../context/AppContext";
import CartItem from "../../components/CartItem/CartItem";
import "../WishlistPage/WishlistPage.css";
export default function WishListPage() {
  const [favoriteProducts,setFavoriteProducts] = useState([]);
  const { favorites, fetchFavoritesProducts } = useContextMain();

  useEffect(() => {
    const fetchedProducts = fetchFavoritesProducts();
    console.log("Fetched Cart Products:", fetchedProducts);
    setFavoriteProducts(fetchedProducts);
  }, [favorites,fetchFavoritesProducts ]);

  return (
    <div className="wishlistpage">
      {favoriteProducts.length === 0 ? (
        <p className="wishlist-empty">Your Wishlist is Empty</p>
      ) : (
        <div className="wishlist-grid-container">
          {favoriteProducts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
