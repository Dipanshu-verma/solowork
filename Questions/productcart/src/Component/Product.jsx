import React, { useEffect, useReducer } from "react";

import axios from "axios";
import { addCart } from "../api";
import { productReducer } from "./Reducer/productreducer";
import { getProduct } from "../api";
import Loading from "./Loading";
import "../header/navbar.css"
const Product = () => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    getProduct(dispatch);
  }, [dispatch]);
console.log(state);


  
  return (
    <div>
      {state.loading ? (
        <Loading />
      ) : (
         <div className="Product-container">
            {state.data.length > 0 &&
              state.data.map((product) => {
                return (
                  <div>
                  <div className="img-div">
                    <img src={product.image} alt=""/>
                    </div>
                     <h3>{product.title.slice(0,50)} <span>...</span></h3>
                     <p>Price: ${product.price}</p>
                    <button onClick={() => addCart(product)}>
                      Add to cart
                    </button>
                  </div>
                );
              })}
          </div>
        
      )}
    </div>
  );
};

export default Product;
