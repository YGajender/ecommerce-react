import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Singleblog() {
  const { id } = useParams();
  const [Sdata, setSdata] = useState([]);

  useEffect(() => {
    async function Fetchdata1() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data);
      setSdata(res.data);
    }
    Fetchdata1();
  }, []);
  return (
    <div key={Sdata.id} className="sdata">
      <h2>{Sdata.title}</h2>
      <p>{Sdata.body}</p>
    </div>
  );
}

export default Singleblog;
