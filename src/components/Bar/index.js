import React from "react";
import Message from "../Message";
import "./style.css";

function Bar(props) {
  return (
    <nav className="bar">
      <ul>
        <li className="logo">
          <a href="/">React, Recall, Rearrange!</a>
        </li>
        {/* passing score info as props to the Message component */}
        <Message score={props.score} highScore={props.highScore} />
        <li>
          {/* displaying current round and score info */}
          Round {props.currentRound} | Score: {props.score} | High Score: {props.highScore}
        </li>
      </ul>
    </nav>
  );
}

export default Bar;
