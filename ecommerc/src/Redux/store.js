import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { product } from "./reducer/product";

export const store =  legacy_createStore(product,applyMiddleware(thunk))
  
 
