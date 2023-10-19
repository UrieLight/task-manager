import React from 'react'
import { Task } from '../models/taskModel'
import '../assets/todoItemStyle.css'
import Todo from './Todo'

interface Props{
  todos: Task[],
  setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}

const TodosList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((item) => {
        return(
          <Todo 
            key={item.id}
            todo={item}
            todosList={todos}
            setTodos={setTodos}
          />
        )
      })}
    </div>
  )
}

export default TodosList