import React, { useEffect, useRef, useState } from 'react'
import { Task } from '../models/taskModel'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props{
  todo: Task,
  todosList: Task[],
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}
const Todo: React.FC<Props> = ({todo, todosList, setTodos}) => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [editTodoNewValue, setEditTodoNewValue] = useState<string>(todo.todoName)
  
  const handleEdit = (e: React.FormEvent<HTMLFormElement>, todoId: number) => {
    e.preventDefault();

    setTodos( todosList.map((item) => item.id === todoId ? {...item, todoName:editTodoNewValue} : item))

    setEditMode(false)
  }

  const handleDone = (todoId: number) => {
    setTodos(
      todosList.map((item) => item.id === todoId ? {...item, isDone:!item.isDone} : item)
    )
  }

  const handleDelete = (todoId: number) => {
    setTodos( todosList.filter((item) => item.id != todoId) )
  }

  //Setting focus on the input, when in edit mode
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode])
  

  return (
    <form className='todo__item' onSubmit={(e)=>handleEdit(e, todo.id)}>
      {todo.isDone ? 
        <s className='todo__item--text--done'>{todo.todoName}</s> :

        (!editMode ? 
          <span className='todo__item--text'>{todo.todoName}</span> : 

          <input 
            ref={inputRef}
            className='todo__item--text-editMode'
            type="text" 
            name="todo" 
            value={editTodoNewValue} 
            onChange={(e)=>{ setEditTodoNewValue(e.target.value)}}
          />
        )
      }      
      <div>
          {todo.isDone ?           
            '' :
            <span 
              className='todo__item--icon' 
              onClick={()=> {
                setEditMode(!editMode)
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