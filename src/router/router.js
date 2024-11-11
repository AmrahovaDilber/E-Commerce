import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Product";
import Contact from "../pages/Contact/Contact";
import AppLayout from "../layout/AppLayout";
import { MainContextProvider } from "../context/AppContext";
import CartPage from "../pages/CartPage/CartPage";
import WishlistPage from "../pages/WishlistPage/WishlistPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    layout: "App",
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
    layout: "App",
  },
  {
    path: "/cart",
    element: <CartPage />,
    layout: "App",
  },
  {
    path: "wishlist",
    element: <WishlistPage></WishlistPage>,
    layout: "App",
  },
];

const routerMap = (arr) => {
  return arr.map((item) => {
    if (item.layout) {
      if (item.layout === "App") {
        item.element = (
          <MainContextProvider>
            <AppLayout>{item.element}</AppLayout>
          </MainContextProvider>
        );
      }
    } else {
      item.element = <MainContextProvider>{item.element}</MainContextProvider>;
    }
    return item;
  });
};

export const router = createBrowserRouter(routerMap(routes));
