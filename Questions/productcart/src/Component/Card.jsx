import React from 'react'
 import axios from 'axios'
 import "../header/navbar.css"
import { removeitem } from '../api'
const Card = ({product,dispatch}) => {
    
  
  return (
    <div >
       <img src={product.image} alt="" />
       <div  >
        <p>Title: {product.title}</p>
        <p>Price: ${product.price}</p>
        <p>description: {product.description.slice(0,100)}</p>
         <button onClick={()=>removeitem(product.id,dispatch)}>DELETE</button>
       </div>
    </div>
  )
}

export default Card
