import React from 'react'
import { Task } from '../models/taskModel'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props{
  todo: Task,
  todosList: Task[],
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}
const Todo: React.FC<Props> = ({todo, todosList, setTodos}) => {
  
  const handleDone = (todoId: number) => {
    
    setTodos(
      todosList.map((item) => 
        todo.id === todoId ? {...item, isDone:!item.isDone} : item
      )
    )
  }

  return (
    <form className='todo__item'>
      {todo.isDone ? 
        <s className='todo__item--text--done'>{todo.todoName}</s> :
        <span className='todo__item--text'>{todo.todoName}</span>
      }      
      <div>
          <span className='todo__item--icon'><AiFillEdit /></span>
          <span className='todo__item--icon'><AiFillDelete /></span>
          <span className='todo__item--icon' onClick={()=>handleDone(todo.id)}
          ><MdDone /></span>
      </div>
    </form>
  )
}

export default Todo