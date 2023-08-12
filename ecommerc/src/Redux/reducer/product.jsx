import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../ActionTypes"

export const product  = (state={loading:false,products:[],error:null},action) =>{
     const{type,payload} = action
    switch(type){
        case PRODUCT_REQUEST:return{
            ...state,loading:true,
        }
        case PRODUCT_SUCCESS:return{
            ...state,products:payload,
        }
        case PRODUCT_FAIL:return{
            ...state,error:payload
        }
        default:return state
    }
}