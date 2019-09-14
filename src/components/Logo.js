import React from "react"
import { ReactComponent as TodoSVG } from "../assets/logos/todo.svg";

export default function Logo(props) {
  const style = {
    ...props.style,
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "-50px"
  };
  return (
    <div {...props} style={style}>
      <TodoSVG />
    </div>
  );
}