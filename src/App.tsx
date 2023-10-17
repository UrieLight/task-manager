import { useState } from "react"
import InputField from "./components/InputField"
import "./index.css"

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
