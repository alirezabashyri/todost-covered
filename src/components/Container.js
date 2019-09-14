import React from "react";

export default function Container(props) {
  const style = {
    ...props.style,
    paddingTop: "75px"
  };
  return (
    <div {...props} style={style}>
      {props.children}
    </div>
  );
}
