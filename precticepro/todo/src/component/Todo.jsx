import React from 'react'

const Todo = ({todo}) => {
  return (
    <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
     <td className="cursor-pointer text-4xl">{todo.status?"Completed":"Not-Completed"}</td>
     <button className="cursor-pointer ">Edit</button>
     <button className="cursor-pointer">Delete</button>
    </tr>
  )
}

export default Todo