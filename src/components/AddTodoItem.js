import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddButton from "./AddButton";
import TodoList from "./TodoList";
import TodoListItem from "./TodoListItem";

export default function AddTodoItem(props) {
  const [todos, setTodo] = useState([]);

  const style = {
    ...props.style,
    marginTop: "20px",
    position: "relative"
  };

  function onClick(e) {
    if (e.key !== "Enter") {
      return;
    }

    var el = document.querySelector(".form-control");
    if (el.value === "") {
      return;
    }

    setTodo(todos.concat({ name: el.value }));
    el.value = "";
  }

  return (
    <div className="add-control" style={style}>
      <div className="form-group has-feedback">
        <TodoItem onKeyPress={onClick} />
        <AddButton onClick={onClick} />
        <TodoList>
          {todos.map(todo => (
            <TodoListItem>{todo.name}</TodoListItem>
          ))}
        </TodoList>
      </div>
    </div>
  );
}
