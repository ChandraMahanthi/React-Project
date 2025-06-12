import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function ProductDetails() {
  let {id}= useParams();
  let [responseData,setResponseData] = useState({
    id: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  });

  useEffect(()=>{
    axios.get(`http://localhost:3000/categories_electronics/${id}`).then((res)=>{
      setResponseData(res.data)
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <h1 className='text-4xl'>{responseData.title}</h1>
      <h1>{responseData.description}</h1>
      <img src={responseData.image} alt="" />
    </div>
  )
}

export default ProductDetails