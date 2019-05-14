import React, { Component } from "react";
import "./style.css";

class Message extends Component {
  // using state for conditional rendering of text animations
  state = {
    guess: "",
    animating: false
  };

  componentDidUpdate({ score, highScore }, prevState) {
    const updatedState = { animating: true };

    // changing state according to whether last guess was a new or repeat guess
    if (score === 0 && highScore === 0) {
      updatedState.guess = "";
    } else if (score === 0 && highScore > 0) {
      updatedState.guess = "repeat";
    } else {
      updatedState.guess = "new";
    }

    // setting state to changed state defined above
    if (score !== this.props.score || this.state.guess !== updatedState.guess) {
      this.setState(updatedState);
    }
  }

  // rendering text according to state to display the appropriate message to the user
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
        {/* displaying the message here */}
        {this.renderText()}
      </li>
    );
  }
}

export default Message;
