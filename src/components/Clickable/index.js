import React from "react";
import "./style.css";

function Clickable(props) {
  return (
    <div
      aria-label="clickable"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`clickable${props.shake ? " shake" : ""}`}
    />
  );
}

export default Clickable;
