import { useState } from "react"
import InputField from "./components/InputField"
import "./index.css"
import { Task } from './models/taskModel'
import TodosList from "./components/TodosList"

const App: React.FC = () => {

  const [todoInputText, setTodoInputText] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);
  
  const handleAddNewTask = (e: React.FormEvent) => {
    e.preventDefault();
    todoInputText ? setTodos([...todos, {id:Date.now(), todoName:todoInputText, isDone:false}]) : "";
    setTodoInputText("");
  }

  console.log(todos)

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField 
        todo={todoInputText} 
        setTodo={setTodoInputText} 
        AddNewTask={handleAddNewTask} 
      />

      <TodosList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App
