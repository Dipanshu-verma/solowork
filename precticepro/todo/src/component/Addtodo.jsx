import React, { useState } from 'react'

const Addtodo = ({setTodos,Todos}) => {
const [todo,setTodo] = useState("");


    function addtodo(e){
      setTodo(e.target.value);
    }

    function handleaddTodo(e){
        e.preventDefault();
        const highestid = Todos?.reduce((acc,cv)=>{
               return acc>cv.id?acc:cv.id;
        },0)  || 0
      const todos = Todos||"";
        const updetedtods = [...todos, {title:todo,status:false,id:highestid+1},]
      localStorage.setItem("todos",JSON.stringify(updetedtods));
        setTodos(updetedtods);


        
    }

  return (
    <div> 
    <form onSubmit={handleaddTodo}>
        <input type="text" value={todo} onChange={addtodo} />
        <input type="submit" value="add"/>
    </form>
    
    </div>
  )
}

export default Addtodo