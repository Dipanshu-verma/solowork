import { createStore, combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { todosRedcuer } from "./reducers/todoReducer"
const root =  combineReducers({
    todos:todosRedcuer
})

const store  =  createStore(root, composeWithDevTools(applyMiddleware(thunk)));

export default store