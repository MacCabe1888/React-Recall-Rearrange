import React from "react";

function Clickable(props) {
  return (
    <div
      aria-label="clickable"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
    />
  );
}

export default Clickable;
