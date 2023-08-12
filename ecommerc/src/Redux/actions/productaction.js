import { PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../ActionTypes"
import axios from 'axios'
export const getProduct=()=> async (dispatch)=>{

    dispatch({
        type:PRODUCT_REQUEST
    })
    
  await axios.get("https://fakestoreapi.com/products").then((res)=>{
      dispatch({
        type:PRODUCT_SUCCESS,
        payload:res.data,
      })
   }).catch((error)=>{
    dispatch({
        type:PRODUCT_FAIL,
        payload:error,
    })
   })




}