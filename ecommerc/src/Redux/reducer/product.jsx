import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../ActionTypes"

export const product  = (state={loading:false,products:[],error:null},action) =>{
     const{type,payload} = action
    switch(type){
        case PRODUCT_REQUEST:return{
            ...state,loading:true,
        }
        case PRODUCT_SUCCESS:return{
            ...state,products:payload,loading:false,
        }
        case PRODUCT_FAIL:return{
            ...state,error:payload,loading:false
        }
        default:return state
    }
}



export const productDetails  = (state={loading:false,product:{},error:null},action) =>{
    const{type,payload} = action
   switch(type){
       case PRODUCT_DETAIL_REQUEST:return{
           ...state,loading:true,
       }
       case PRODUCT_DETAIL_SUCCESS:return{
           ...state,product:payload,loading:false,
       }
       case PRODUCT_DETAIL_FAIL:return{
           ...state,error:payload,loading:false
       }
       default:return state
   }
}