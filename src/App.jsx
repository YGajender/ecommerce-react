import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./pages/Header.jsx";
import "./ecommerce.css";
import { createContext, useEffect, useState } from "react";
import Cart from "./pages/Cart.jsx";
import Footer from "./pages/Footer.jsx";
import Blog from "./Blogg/Blog.jsx";
import Singleblog from "./Blogg/Singleblog.jsx";
import Contact from "./pages/Contact.jsx";

export const ecomcontext = createContext({});

function App() {
  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState("");

  function handleAddToCart(product) {
    if (!isProductInCart(product)) {
      const updatedProduct = { ...product, quantity: 1 };
      console.log("updatedProduct", updatedProduct);

      setCart([...cart, updatedProduct]);
      // setProductId(product?.id);
    }
  }

  function handleRemoveFromCart(product) {
    setCart(
      cart.filter((cartProduct) => {
        return cartProduct.id !== product.id;
      })
    );
  }

  function isProductInCart(product) {
    return cart.find((cartProduct) => {
      return cartProduct.id === product.id;
    });
  }

  // useEffect(() => {
  //   if (cart) {
  //     console.log("cart>>>>>>>>>>>>>>>>>>>>>", cart);
  //     cart.filter((val) => {
  //       if (val.id == productId) {
  //         val.quantity += 1
  //       }
  //     });
  //   }
  // }, [cart]);

  return (
    <>
      <BrowserRouter>
        <ecomcontext.Provider
          value={{
            cart,
            setCart,
            handleAddToCart,
            handleRemoveFromCart,
            isProductInCart,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Blog" element={<Blog />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/blog/:id" element={<Singleblog />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </ecomcontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
