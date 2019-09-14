import React from "react"
import TodoItem from './TodoItem'
import { AddButton } from './AddButton'

export default function AddTodoItem(props) {
  const style = {
    ...props.style,
    marginTop: "20px",
    position: "relative"
  };
  return (
    <div className="add-control" style={style}>
      <div className="form-group has-feedback">
        <TodoItem />
        <AddButton />
      </div>
    </div>
  );
}