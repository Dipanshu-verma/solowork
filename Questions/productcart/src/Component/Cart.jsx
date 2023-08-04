import React, { useEffect,  useReducer } from "react";
 import "../header/navbar.css"
import { cartReducer } from "./Reducer/cartreducer";
import { getCartItem } from "../api";
import Card from "./Card";
const Cart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    loading: false,
    error: null,
    data: [],
  });

  useEffect(() => {
    getCartItem(dispatch);
  }, [dispatch]);
   
  
  return (
    <div className="cart-div">
      {state.data.map((elm) => {
        return <Card product={elm} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Cart;
