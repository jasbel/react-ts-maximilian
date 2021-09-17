import { FC, FormEvent, useRef } from 'react'
import './NewTodo.css';


interface Props {
  onAddTodo: Function;
}

const NewTodo: FC<Props> = (props) => {

  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHadler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText)
  };

  return (
    <form onSubmit={todoSubmitHadler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>

      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default NewTodo
