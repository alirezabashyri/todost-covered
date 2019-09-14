import React from "react"

export function AddButton() {
  const style = {
    lineHeight: "35px",
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: "10",
    display: "block",
    color: "#666",
    WebkitTransition: "color 0.15s linear",
    transition: "color 0.15s linear",
    outline: "none"
  };

  function onMouseOver(e) {
    e.target.style.color = "#999";
  }

  function onMouseOut(e) {
    e.target.style.color = "#666";
  }

  return (
    <i
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="fa fa-plus form-control-feedback add-btn"
      title="Add item"
    ></i>
  );
}