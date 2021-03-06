import React from "react";

export default function Body(props) {
  const style = {
    ...props.style,
    background: "#020631",
    display: "flow-root",
    height: "100vw",
    font: "14px 'Nunito', sans-serif"
  };
  return <div style={style}>{props.children}</div>;
}
