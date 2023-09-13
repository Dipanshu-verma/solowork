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
    <li className="todolist"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
      }}
    >
      <span  style={{display:editing?"none":""}} >{todo.data}</span> 
      <form className="editform" onSubmit={onFormSubmit} style={{display:!editing?"none":""}}>
        <input className="editinput" type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
      </form>
       <div>

       <span onClick={() => setediting((pre) => !pre)}>
        <BiSolidPencil />
      </span>
      <span onClick={() => dispatch(deleteTodo(todo._id))}>
        <FiTrash2  />
      </span>
     
      </div>
    </li>
  );
};

export default Todo;
