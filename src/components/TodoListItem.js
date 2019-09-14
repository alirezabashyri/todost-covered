import React from "react";

export default function TodoListItem(props) {
  function onClick(e) {
    const li = e.target.parentElement.parentElement.parentElement;
    if (li.className.includes("danger")) {
      li.className = "checkbox animated flipInX";
      return;
    }
    li.className = "danger animated flipInX";
  }
  return (
    <li className="animated flipInX">
      <div className="checkbox">
        <span className="close">
          <i className="fa fa-times"></i>
        </span>
        <label>
          <span className="checkbox-mask"></span>
          <input onClick={onClick} type="checkbox" />
          {props.children}
        </label>
      </div>
    </li>
  );
}
