import {ADD_CART_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, TOTAL_PRICE_UPDATE } from "../ActionTypes"

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

let total  =  0;
let items =  JSON.parse(localStorage.getItem("cartItems"))||[]
items?.map((elm)=>{
    let quan  =  localStorage.getItem(`quan_${elm.id}`)
    total += elm.price * Number(quan)
})


export const cart  = (state={cartItems:JSON.parse(localStorage.getItem("cartItems"))||[],totalPrice:total},action) =>{
    const{type,payload} = action
     
   switch(type){
      
       case ADD_CART_SUCCESS:return{
          ...state,cartItems:payload, 
       }
       case TOTAL_PRICE_UPDATE:return{
        ...state,totalPrice:payload
      }
       default:return state
   }
}


 


 