import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ecomcontext } from "../App";

function CartQty(props) {
  const { cart, setCart, handleRemoveFromCart } = useContext(ecomcontext);

  const [displayedProduct, setDisplayedProduct] = useState({});

  function increment() {
    setCart(
      cart.map((item) =>
        item.id === displayedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decrement() {
    setCart(
      cart.map((item) =>
        item.id === displayedProduct.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  useEffect(() => {
    if (cart.length > 0) {
      const productToDisplay = cart.find((item) => {
        console.log(item);
        console.log(props.product);
        return item.id === props.product.id;
      });
      setDisplayedProduct(productToDisplay);
    }
  }, [cart]);

  // console.log(props);
  return (
    <div className="qty">
      <div className="left">
        <button onClick={increment}>+</button>
        {displayedProduct.quantity ? <p>{displayedProduct.quantity}</p> : ""}
        <button
          onClick={() => {
            displayedProduct.quantity > 1 ? decrement() : "";
          }}
        >
          -
        </button>
      </div>
      <div className="right">
        <MdDelete onClick={() => handleRemoveFromCart(props.product)} />
      </div>
    </div>
  );
}

export default CartQty;
