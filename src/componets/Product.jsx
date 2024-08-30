/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { useContext, useState } from "react";
import { ecomcontext } from "../App";
import { MdDeleteForever } from "react-icons/md";
import CartQty from "../pages/CartQty";

function Product({ product }) {
  const { handleAddToCart, cart, handleRemoveFromCart, isProductInCart } =
    useContext(ecomcontext);
  const [count, setCount] = useState(1);
  const [isAdded, setIsAdded] = useState(true);

  return (
    <div className="product" key={product.id}>
      <img src={product.image} alt="" />
      <h4>{product.title}</h4>
      <p>
        <FaRupeeSign />
        {product.price}
      </p>

      {isProductInCart(product) ? (
        <CartQty product={product} />
      ) : (
        <Link to="#" onClick={() => handleAddToCart(product)}>
          Add to cart
        </Link>
      )}
    </div>
  );
}

export default Product;
