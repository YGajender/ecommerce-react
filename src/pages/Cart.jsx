/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ecomcontext } from "../App";
import { FaRupeeSign } from "react-icons/fa";

import CartQty from "./CartQty";
function Cart() {
  const { cart, handleRemoveFromCart } = useContext(ecomcontext);

  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  //useEffect: run effectful code just once
  //useEffect: run effectful code whenever there is a change in any other variable / variables

  console.log(cart);

  useEffect(() => {
    if (cart?.length > 0) {
      let temp = 0;
      cart.map((item) => {
        temp += item.price * item.quantity;
      });
      console.log("temp>>>>>>>>>>>>>>>>>>>>", temp);
      setCartTotal(temp);
    }
  }, [cart]);

  return (
    <div className="cart">
      <div className="items">
        {cart.map((item) => {
          return (
            <div className="cartData" key={item.id}>
              <div className="left">
                <img src={item.image} alt="" />
              </div>
              <div className="right">
                <h4>{item.title}</h4>
                <p>
                  Price:- <FaRupeeSign /> {item.price.toFixed(2)}
                </p>
                <CartQty product={item} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <h3>Your Total</h3>
        <p>
          Items: <FaRupeeSign />
          <span>{cartTotal.toFixed(2)}</span>
        </p>
        <p>
          Delivery Charge: <FaRupeeSign />
          <span>{deliveryCharge}</span>
        </p>
        <hr />
        <h3>
          Total: <FaRupeeSign />{" "}
          <span>{(cartTotal + deliveryCharge).toFixed(2)}</span>
        </h3>
      </div>
    </div>
  );
}

export default Cart;
