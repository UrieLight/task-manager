import React, { useState } from 'react'
import { Task } from '../models/taskModel'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props{
  todo: Task,
  todosList: Task[],
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}
const Todo: React.FC<Props> = ({todo, todosList, setTodos}) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todoName)
  
  const handleEdit = (todoId: number) => {
    setTodos(
      todosList.map((item) => item.id === todoId ? {...item, isDone:!item.isDone} : item)
    )
  }

  const handleDone = (todoId: number) => {
    setTodos(
      todosList.map((item) => item.id === todoId ? {...item, isDone:!item.isDone} : item)
    )
  }

  const handleDelete = (todoId: number) => {
    setTodos( todosList.filter((item) => item.id != todoId) )
  }

  return (
    <form className='todo__item'>
      {todo.isDone ? 
        <s className='todo__item--text--done'>{todo.todoName}</s> :
        <span className='todo__item--text'>{todo.todoName}</span>
      }      
      <div>
          {todo.isDone ?           
            '' :
            <span 
              className='todo__item--icon' 
              onClick={()=> {
                setEdit(!edit)
                handleEdit(todo.id)
              }
              }><AiFillEdit /></span>
          }
          <span className='todo__item--icon' onClick={()=>handleDelete(todo.id)}><AiFillDelete /></span>
          <span className='todo__item--icon' onClick={()=>handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  )
}

export default Todo