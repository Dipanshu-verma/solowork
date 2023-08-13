import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { product, productDetails } from "./reducer/product";
const rootreducer = combineReducers({
    products:product,
    productDetail:productDetails,
})
export const store =  legacy_createStore(rootreducer,applyMiddleware(thunk))
  
 
