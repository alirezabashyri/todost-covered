import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddButton from "./AddButton";
import TodoList from "./TodoList";

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

  function onCheck(e) {
    const li = e.target.parentElement.parentElement.parentElement;
    if (li.className.includes("danger")) {
      li.className = "";
      return;
    }
    li.className = "danger";
  }

  function onDelete(i) {
    setTodo(todos.filter((todo, j) => i !== j));
  }

  return (
    <div className="add-control" style={style}>
      <div className="form-group has-feedback">
        <TodoItem onKeyPress={onClick} />
        <AddButton onClick={onClick} />
        <TodoList>
          {todos.map((todo, i) => (
            <li key={i}>
              <div className="checkbox">
                <span className="close" onClick={() => onDelete(i)}>
                  <i className="fa fa-times"></i>
                </span>
                <label>
                  <span className="checkbox-mask"></span>
                  <input onClick={onCheck} type="checkbox" />
                  {todo.name}
                </label>
              </div>
            </li>
          ))}
        </TodoList>
      </div>
    </div>
  );
}
