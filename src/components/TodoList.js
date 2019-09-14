import React from "react";

export default function TodoList(props) {
  return <ul className="todo-list">{props.children}</ul>;
}
