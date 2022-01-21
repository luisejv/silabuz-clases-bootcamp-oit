import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
