import { createStore, combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { todosRedcuer } from "./reducers/todoReducer"
import { tabReducer } from "./reducers/tabReducer";
const root =  combineReducers({
    todos:todosRedcuer,
    currentTab:tabReducer
})

const store  =  createStore(root, composeWithDevTools(applyMiddleware(thunk)));

export default store