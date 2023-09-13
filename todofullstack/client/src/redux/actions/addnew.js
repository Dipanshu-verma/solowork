import axios from "axios";
import {
  GET_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "../ActionsTypes";
 

const API_URL = "http://localhost:8000";
// const API_URL="https://todoappback-7tu7.onrender.com"
 

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });

    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_TODO_FAIL,
      payload: error,
    });
  }
};




export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);
    console.log(res.data);
    dispatch({
      type: GET_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};



export const toggleTodo = (id) => async (dispatch) => {
  try {
     
  
    const res = await axios.get(`${API_URL}/todos/${id}`); 
    
     
    dispatch({
      type:TOGGLE_TODO,
      payload: res.data,
    });


  } catch (error) {
    console.log(error.message);
  }
};

export const updateTodo = (id,data) => async (dispatch) => {
  try {
     
  
    const res = await axios.put(`${API_URL}/todos/${id}`,{data}); 
    
     
    dispatch({
      type:UPDATE_TODO,
      payload: res.data,
    });


  } catch (error) {
    console.log(error.message);
  }
};


export const deleteTodo = (id) => async (dispatch) => {
  try {
     
  
    const res = await axios.delete(`${API_URL}/todos/${id}`); 
   
     
    dispatch({
      type:DELETE_TODO,
      payload: res.data,
    });


  } catch (error) {
    console.log(error.message);
  }
};


export const toggleTab =(tab)=> async(dispatch)=>{

dispatch({type:TOGGLE_TAB,selected:tab})

}