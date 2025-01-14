import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ user, todoList, getTasks }) => {
  return (
    <div>
      <h2>{user.name}님의 Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item) => (
          <TodoItem key={item._id} item={item} getTasks={getTasks} />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
