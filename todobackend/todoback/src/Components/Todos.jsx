import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../redux/actions/addnew'
import Todo from './Todo'
import Tab from './Tab'
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from '../redux/ActionsTypes'

const Todos = () => {

  const todos = useSelector(state=>state.todos)  
const dispatch =  useDispatch()
    useEffect(()=>{
dispatch(getAllTodos())

    },[])
    const {currentTab}  = useSelector(state=>state);

    function getTodos(){
      if(currentTab === ALL_TODOS){
        return todos
      }else if(currentTab === ACTIVE_TODOS){
        return todos.filter((todo)=>!todo.done)
      }else if(currentTab === DONE_TODOS){
        return todos.filter((todo)=>todo.done)
      }
    }
  return (
   <article>
   <div>
    <Tab currentTab={currentTab}/>
   </div>
    <ul>
        {
          getTodos().map((todo)=>{
               return <Todo key={todo._id} todo={todo}/>
            })
        }
    </ul>
   </article>
  )
}

export default Todos
