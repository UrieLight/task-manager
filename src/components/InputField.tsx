import '../assets/inputformStyle.css'

interface Props{
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className='form__bloc'>
        <input
          type="input"
          placeholder="Enter a task"
          name="task"
          id="task_id"
          className="input__box"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='button__submit'>Add</button>
    </form>
  )
}

export default InputField