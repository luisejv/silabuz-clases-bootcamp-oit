import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoListApp = () => {
  const [valorInput, setValorInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, valorInput]);
    setValorInput("");
  };

  return (
    <div>
      <TodoList todos={todos}></TodoList>
      <div>
        <input
          type={"text"}
          value={valorInput}
          onChange={(event) => setValorInput(event.currentTarget.value)}
          placeholder="Escribe tu nuevo TODO"
        ></input>
        <button onClick={addTodo}>Agregar ToDo</button>
      </div>
    </div>
  );
};

export default TodoListApp;
