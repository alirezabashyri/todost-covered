import React from "react";

export default function TodoCheckbox(props) {
  return (
    <div className="checkbox">
      <span className="close" onClick={props.onDelete}>
        <i className="fa fa-times"></i>
      </span>
      <label>
        <span className="checkbox-mask"></span>
        <input onClick={props.onCheck} type="checkbox" />
        {props.children}
      </label>
    </div>
  );
}
