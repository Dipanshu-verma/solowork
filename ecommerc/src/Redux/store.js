import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cart, product} from "./reducer/product";
const rootreducer = combineReducers({
    products:product,
    cart:cart,
})
export const store =  legacy_createStore(rootreducer,applyMiddleware(thunk))
  
 
