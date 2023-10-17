import '../assets/inputformStyle.css'

const InputField = () => {
  return (
    <form className='form__bloc'>
        <input
          type="input"
          placeholder="Enter a task"
          name="task"
          id="task_id"
          className="input__box"
        />
        <button className='button__submit'>Add</button>
    </form>
  )
}

export default InputField