import "./App.css";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "components/NewTodo";
import { ITodos } from "interfaces/ITodo.model";


const App: React.FC = () => {
    // const todos = [{ id: "t1", text: "finnish class" }];
    const [todos, setTodos] = useState<ITodos[]>([])

    const todoAddHandler = (text: string) => {
      setTodos(prevTodos => [...prevTodos , {id: Math.random().toString(), text}])
        console.log(text);
    };

    const todoDeleteHandler = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter((todo) => todo.id!==todoId)
      })
    };

    return (
        <div className="App">
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
        </div>
    );
};

export default App;
