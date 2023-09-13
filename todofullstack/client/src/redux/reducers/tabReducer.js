import { ALL_TODOS, TOGGLE_TAB } from "../ActionsTypes";

export const tabReducer = (state=ALL_TODOS,action)=>{
    const{type,selected} =  action;

    switch(type){
case TOGGLE_TAB:return selected
        default: return state
    }
}