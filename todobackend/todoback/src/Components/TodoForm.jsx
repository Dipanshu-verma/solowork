import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions/addnew';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const[todo,setTodo]=  useState("");
const dispatch  =  useDispatch();
   function handleTodo(e){
      e.preventDefault()
  dispatch(addNewTodo(todo))
  setTodo("")
   }

  return (
     <form className='todoForm' onSubmit={handleTodo}>
        <input type="text" placeholder='Enter your task...' value={todo}  onChange={(e)=>setTodo(e.target.value)} />

     </form>
  )
}

export default TodoForm
