import React from "react"

export default function TodoItem(props) {
  const style = {
    ...props.style,
    paddingRight: "25px",
    outline: "none",
  };

  var resetPadding = "";
  function onFocus(e) {
    e.target.style.outline = "none";
    e.target.style.border = "none";
    resetPadding = e.target.style.padding;
    e.target.style.padding = "10px 15px";
  }

  function onBlur(e) {
    e.target.style.padding = resetPadding;
  }

  return (
    <input
      style={style}
      type="text"
      onFocus={onFocus}
      onBlur={onBlur}
      className="form-control"
      placeholder="✍️ Add item..."
    />
  );
}
