import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../componets/Product.jsx";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("loading", loading);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const result = await axios.get("https://fakestoreapi.com/products");
        if (result) {
          setLoading(false);
          setProducts(addQuantityKey(result.data));
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  function addQuantityKey(dataFromAPI) {
    return dataFromAPI.map((obj) => {
      return { ...obj, quantity: 1 };
    });
  }

  return loading ? (
    <div className="extraordinary-loader">
      <div className="spinner"></div>
      <div className="text">Loading...</div>
    </div>
  ) : (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
