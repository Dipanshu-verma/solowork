import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, updateTodo } from "../redux/actions/addnew";
const Todo = ({ todo }) => {
  const [editing, setediting] = useState(false);
const [text,setText] =  useState(todo.data)
  const dispatch = useDispatch();

  function onFormSubmit(e){
   e.preventDefault();
   setediting(pre => !pre);
   dispatch(updateTodo(todo._id, text))
  }
  return (
    <li
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
      }}
    >
      <span  style={{display:editing?"none":""}} >{todo.data}</span> 
      <form  onSubmit={onFormSubmit} style={{display:!editing?"none":""}}>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </form>
      <span onClick={() => dispatch(deleteTodo(todo._id))}>
        <FiTrash2  />
      </span>
      <span onClick={() => setediting((pre) => !pre)}>
        <BiSolidPencil />
      </span>
    </li>
  );
};

export default Todo;
