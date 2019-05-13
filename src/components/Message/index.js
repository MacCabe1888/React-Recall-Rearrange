import React, { Component } from "react";
import "./style.css";

class Message extends Component {
  state = {
    guess: "",
    animating: false
  };

  componentDidUpdate({ score, highScore }, prevState) {
    const updatedState = { animating: true };

    if (score === 0 && highScore === 0) {
      updatedState.guess = "";
    } else if (score === 0 && highScore > 0) {
      updatedState.guess = "repeat";
    } else {
      updatedState.guess = "new";
    }

    if (score !== this.props.score || this.state.guess !== updatedState.guess) {
      this.setState(updatedState);
    }
  }

  renderText = () => {
    switch (this.state.guess) {
    case "new":
      return "You chose wisely!";
    case "repeat":
      return "Uh oh! Repeat guess!";
    default:
      return "Click on an image to begin!";
    }
  };

  render() {
    return (
      <li
        className={this.state.animating ? this.state.guess : ""}
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {this.renderText()}
      </li>
    );
  }
}

export default Message;
