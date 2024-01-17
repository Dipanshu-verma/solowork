import React, { useState } from 'react'
import Addtodo from './Addtodo';
import Todolist from './Todolist';
const Todos = () => {
   
   const data = localStorage.getItem("todos")!==undefined?JSON.parse(localStorage.getItem("todos")): [];
    const [Todos,setTodos] =  useState(data);
   
   
 return (

    <div>
      <Addtodo setTodos={setTodos} Todos={Todos}/>
      <Todolist setTodos={setTodos} Todos={Todos} />
    </div> 

  )
}

export default Todos