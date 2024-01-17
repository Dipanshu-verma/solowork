import React from 'react'
import Todo from "./Todo.jsx"
const Todolist = ({setTodos,Todos}) => {


  return (
    <div>
    <table>
      <thead>
       <th>
        <td>S.N</td>
        <td>Title</td>
        <td>Toggle</td>
        <td>Edit</td>
        <td>Delete</td>
       </th>
      </thead>
      <tbody>
      {

            Todos?.map((elm)=>(
            
            <Todo key={elm.id} todo={elm}/>
        ))
}
      </tbody>
    </table>
     
        
    </div>
  )
}

export default Todolist