import { ADD_TODO_FAIL, ADD_TODO_SUCCESS } from "../ActionsTypes";


export const todosRedcuer =(state=[],action)=>{

 const{type,payload} =  action;
 switch(type){
    case ADD_TODO_SUCCESS:return[
    payload,...state
 ]
    
    default: return state
 }

}