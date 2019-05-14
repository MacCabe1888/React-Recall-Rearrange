import React, { Component } from "react";
import { Bar, Clickable, Container, Footer, Header } from "./components";
import choices from "./choices.json";

class App extends Component {
  state = {
    round: 1,
    choices,
    score: 0,
    highScore: 0
  }

  componentDidMount() {
    this.setState({ choices: this.shuffleArr(this.state.choices) });
  }

  shuffleArr = arr => {
    let i = arr.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i--;
    }
    return arr;
  };

  handleClick = id => {
    let repeatGuess = true;
    const updatedChoices = this.state.choices.map(choice => {
      const thisClickable = { ...choice };
      if ((thisClickable.id === id) && (!thisClickable.clicked)) {
        thisClickable.clicked = true;
        repeatGuess = false;
      }
      return thisClickable;
    });
    repeatGuess
      ? this.handleRepeat(updatedChoices)
      : this.handleNew(updatedChoices);
  };

  handleRepeat = choices => {
    this.setState({
      round: 1,
      choices: this.resetChoices(choices),
      score: 0
    });
  };

  handleNew = choices => {
    let { score, highScore } = this.state;
    score += 1;
    highScore = Math.max(score, highScore);

    let newRound = true;
    choices.map(choice => {
      if (!choice.clicked) {
        newRound = false;
      }
      return newRound;
    });
    
    this.setState({
      round: newRound ? this.state.round + 1 : this.state.round,
      choices: newRound ? this.resetChoices(choices) : this.shuffleArr(choices),
      score,
      highScore
    });
  };

  resetChoices = choices => {
    const noneClicked = choices.map(choice => ({ ...choice, clicked: false }));
    return this.shuffleArr(noneClicked);
  };

  render() {
    return (
      <div style={{
        backgroundImage: "url(/assets/images/spongebob-floral-background.png)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "cover"
      }}>
        <Bar
          currentRound={this.state.round}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        <Container>
          {this.state.choices.map(clickable => (
            <Clickable
              key={clickable.id}
              id={clickable.id}
              shake={!this.state.score && this.state.highScore}
              handleClick={this.handleClick}
              image={clickable.image}
            />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
