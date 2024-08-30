import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../ecommerce.css"

function Blog() {
  const [content, setContent] = useState([])

  useEffect(()=>{
    async function Fetchdata(){
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(result.data)
      setContent(result.data)
    }
    Fetchdata()
  },[])
  return (
    <div className='Container'>
          {content.map((item)=>{
               return(
                <div key={item.id}>
                      <h3>
                        <Link to={`/blog/${item.id}`}>{item.title}</Link>
                        
                        </h3>
                      <p>{item.body}</p>
                </div>
               )
          })}
    </div>
  )
}

export default Blog
