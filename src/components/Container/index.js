import React from "react";
import "./style.css";

function Container(props) {
  // displaying the clickables as props.children inside a container component
  return <main className="container">{props.children}</main>;
}

export default Container;
