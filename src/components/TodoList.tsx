import { FC } from 'react'
import './TodoList.css'
interface TodoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList: FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
 
