import InputField from "./components/InputField"
import "./index.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Task Manager</span>
      <InputField />
    </div>
  )
}

export default App
