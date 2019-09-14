import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { AddButton } from "./AddButton";

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

    var text = document.querySelector(".form-control").value;

    if (text == "") {
      return;
    }

    var item =
      '<li data-id="' +
      todos.length +
      '" class="animated flipInX ' +
      "done" +
      '"><div class="checkbox"><span class="close"><i class="fa fa-times"></i></span><label><span class="checkbox-mask"></span><input type="checkbox" />' +
      text +
      "</label></div></li>";
    document.querySelector(".todo-list").insertAdjacentHTML("beforeend", item);

    var el = document.querySelector(".form-control");
    el.value = "";
    el.setAttribute("placeholder", "✍️ Add item...");
    setTodo(todos + { name: text });
  }

  return (
    <div className="add-control" style={style}>
      <div className="form-group has-feedback">
        <TodoItem onKeyPress={onClick} />
        <AddButton onClick={onClick} />
      </div>
    </div>
  );
}
