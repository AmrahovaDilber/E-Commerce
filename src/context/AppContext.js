import { createContext, useContext, useState, useEffect } from "react";
import Productdata from "../productdata";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Productdata);
  const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedCarts = JSON.parse(localStorage.getItem("carts"));
    if (savedCarts) {
      setCarts(savedCarts);
    }

    const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, []);

  useEffect(() => {
    if (carts.length > 0) {
      localStorage.setItem("carts", JSON.stringify(carts));
    }

    if (favorites.length > 0) {
      localStorage.setItem(
        "favorites",
        JSON.stringify((favorites))
      );
    }
  }, [carts, favorites]);

  const handleAddToCart = (id) => {
    if (!carts.includes(id)) {
      const newCarts = [...carts, id];
      setCarts(newCarts);
    }
  };

  const handleRemoveFromCart = (id) => {
    const filteredCarts = carts.filter((cartid) => cartid !== id);
    setCarts(filteredCarts);
  };

  const fetchCartProducts = () => {
    return products.filter((product) => carts.includes(product.id));
  };

  const handleAddToFavorites = (id) => {
    if (!favorites.includes(id)) {
      const newFavorites = [...favorites, id];
      setFavorites(newFavorites);
    }
  };

  const handleRemoveFromFavorites = (id) => {
    const filteredFavorites = favorites.filter(
      (favoriteId) => favoriteId !== id
    );
    setFavorites(filteredFavorites);
  };

  const fetchFavoritesProducts = () => {
    return products.filter((product) => favorites.includes(product.id));
  };

  const values = {
    carts,
    products,
    handleAddToCart,
    handleRemoveFromCart,
    fetchCartProducts,
    handleAddToFavorites,
    favorites,
    fetchFavoritesProducts,
    handleRemoveFromFavorites,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useContextMain = () => useContext(MainContext);
