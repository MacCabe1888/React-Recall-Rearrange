import React from "react";
import "./style.css";

function Clickable(props) {
  return (
    <div
      aria-label="clickable"
      // passing the App component's handleClick function down to the Clickable component
      onClick={() => props.handleClick(props.id)}
      // displaying the associated clickable image
      style={{ backgroundImage: `url("${props.image}")` }}
      // using className to create a conditional shake effect (takes effect iff props.shake is true)
      className={`clickable${props.shake ? " shake" : ""}`}
    />
  );
}

export default Clickable;
