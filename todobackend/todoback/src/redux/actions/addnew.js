import axios  from "axios";
import { ADD_TODO_FAIL, ADD_TODO_SUCCESS } from "../ActionsTypes";

const API_URL =  "http://localhost:8000"
export  const addNewTodo =(data)=> async(dispatch)=>{
 try{
   const res =await axios.post(`${API_URL}/todos`, {data});
  
   dispatch({
    type:ADD_TODO_SUCCESS,
    payload:res.data
   })

 }catch(error){
    console.log(error);
    dispatch({
        type:ADD_TODO_FAIL,
        payload:error
       })
 }
 


}