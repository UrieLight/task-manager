import { useRef } from 'react'
import '../assets/inputformStyle.css'

interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  AddNewTask: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({todo, setTodo, AddNewTask}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form 
      className='form__bloc'
      onSubmit={(e) => {
          AddNewTask(e);
          inputRef.current?.blur();
        }
      }
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        name="task"
        id="task_id"
        className="input__box"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button 
        className='button__submit'
      >Add</button>
    </form>
  )
}

export default InputField