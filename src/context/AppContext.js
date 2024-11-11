import { createContext, useContext, useState, useEffect } from "react";
import Productdata from "../productdata";

const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [products, setProducts] = useState(Productdata);
  const [carts, setCarts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(Productdata);

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

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
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [carts, favorites]);

  const handleAddToCart = (id) => {
    if (!carts.includes(id)) {
      const newCarts = [...carts, id];
      setCarts(newCarts);
    }
  };

  const handleRemoveFromCart = (id) => {
    const filteredCarts = carts.filter((cartId) => cartId !== id);
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
    const filteredFavorites = favorites.filter((favId) => favId !== id);
    setFavorites(filteredFavorites);
  };

  const fetchFavoritesProducts = () => {
    return products.filter((product) => favorites.includes(product.id));
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
  };

  const handleColorChange = (color) => {
    setColorFilter(color);
  };

  const handlePriceChange = (price) => {
    setPriceFilter(price);
  };

  useEffect(() => {
    let filtered = [...products];

    if (categoryFilter !== "all") {
      filtered = filtered.filter((product) => product.category === categoryFilter);
    }

    if (colorFilter) {
      filtered = filtered.filter((product) => product.color === colorFilter);
    }

    if (priceFilter !== "all") {
      switch (priceFilter) {
        case "49.99":
          filtered = filtered.filter((product) => parseFloat(product.price) <= 50);
          break;
        case "89.99":
          filtered = filtered.filter(
            (product) => parseFloat(product.price) > 50 && parseFloat(product.price) <= 100
          );
          break;
        case "149.99":
          filtered = filtered.filter(
            (product) => parseFloat(product.price) > 100 && parseFloat(product.price) <= 150
          );
          break;
        case "529.99":
          filtered = filtered.filter((product) => parseFloat(product.price) > 150);
          break;
        default:
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [products, categoryFilter, colorFilter, priceFilter]);

  const values = {
    carts,
    products,
    filteredProducts,
    handleAddToCart,
    handleRemoveFromCart,
    fetchCartProducts,
    handleAddToFavorites,
    favorites,
    fetchFavoritesProducts,
    handleRemoveFromFavorites,
    setProducts,
    handleCategoryChange,
    handleColorChange,
    handlePriceChange,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useContextMain = () => useContext(MainContext);