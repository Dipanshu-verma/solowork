import { GET_TODO_SUCCESS, ADD_TODO_SUCCESS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from "../ActionsTypes";


export const todosRedcuer =(state=[],action)=>{

 const{type,payload} =  action;
 switch(type){
    case ADD_TODO_SUCCESS:return[
    payload,...state
 ]
 case GET_TODO_SUCCESS:return[
    ...payload
]
case TOGGLE_TODO:return state.map(todo => (
   todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
))
case UPDATE_TODO:return state.map(todo => (
   todo._id === action.payload._id ? payload : todo
)) 
case DELETE_TODO:return state.filter(todo => todo._id !== action.payload._id);
    default: return state
 }

}