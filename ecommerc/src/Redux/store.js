import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { product} from "./reducer/product";
const rootreducer = combineReducers({
    products:product,
 
})
export const store =  legacy_createStore(rootreducer,applyMiddleware(thunk))
  
 
