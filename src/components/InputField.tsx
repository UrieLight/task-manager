import '../assets/inputformStyle.css'

const InputField = () => {
  return (
    <form className='classes.task__form'>
        <input 
          type="input" 
          placeholder="Enter a task" 
          name="task" 
          id="task_id" 
          className='classes.task__input'
        />
        <button>New task</button>
    </form>
  )
}

export default InputField